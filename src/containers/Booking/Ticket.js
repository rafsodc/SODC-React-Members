import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {ticketFormSchema} from "../../services/forms/schema";
import Aux from "../../hoc/Aux";
import {useDispatch, useSelector} from "react-redux";
import TicketForm from "./TicketForm";
import {formSave, formSubmit, saveMultiForm} from "../../store/actions/form";
import {replaceElementByIndex, updateObject} from "../../store/utility";


const Ticket = (props) => {
  const formName = 'ticket';
  const dispatch = useDispatch();

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(ticketFormSchema, formName, props.fields, '', props.formKey)

  const onChange = (event) => {
    dispatch(saveMultiForm(formName, {[event.target.name]: event.target.value}, props.formKey));
  }

  const onSubmit = () => dispatch(formSubmit(formName, "path", props.fields))

  const childProps = {
    form: formName,
    errors: errors,
    data: props.fields,
    onChange: onChange,
    ref: register
  }

  return <Aux>
    <h3>Add Ticket</h3>
    <TicketForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.locked}
               childProps={childProps} />
  </Aux>;

};

export default Ticket;