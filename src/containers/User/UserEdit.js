import React, {useEffect} from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {userFormSchema} from "../../services/forms/schema";
import {useDispatch, useSelector} from "react-redux";
import {Accordion, Card} from "react-bootstrap";
import {setAccordion, setUserField, setUserLocked, submitUserForm} from "../../store/actions";
import SavedBadge from "../Booking/SavedBadge";
import ErrorBadge from "../Booking/ErrorBadge";
import {isEmptyObject} from "../../services/funcs/funcs";
import {deleteTicket, loadTickets, removeTicket} from "../../store/actions/ticket";
import Aux from "../../hoc/Aux"
import PaidBadge from "../Booking/PaidBadge";
import {useParams} from "react-router";
import UserForm from "./UserForm";
import {clearUser, loadUser} from "../../store/actions/user"
import Load from "../../ReactUI/Loading/Load";

const UserEdit = () => {

  const dispatch = useDispatch();
  const formState = useSelector(state => state.userReducer);
  const authState = useSelector(state=> state.authenticationReducer)

  let { id } = useParams();

  id = id === undefined ? authState.token_data.id : id;

  useEffect(() => {
    dispatch(loadUser(id));
    return () => dispatch(clearUser());
  }, [dispatch, id])

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(userFormSchema)

  const onChange = (event) => {
    dispatch(setUserField({[event.target.name]: event.target.value}));
  }

  const onSubmit = () => {
    dispatch(submitUserForm(formState.fields, formState.fields['@id']))
  }

  const childProps = {
    errors: errors,
    data: formState.fields,
    onChange: onChange,
    ref: register
  }

  return (
    <Aux>
      <h1>Account Details</h1>
      <Load loading={!formState.isLoaded}>
        <UserForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={formState.locked}
                 childProps={childProps} saved={formState.saved}/>
      </Load> 
    </Aux>
  );
  
};


export default UserEdit;