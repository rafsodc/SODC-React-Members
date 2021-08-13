import React, {useEffect} from "react";
import Aux from "../../hoc/Aux";
import {useDispatch, useSelector} from "react-redux";
import UserTypeAhead from "../TypeAhead/UserTypeAhead";
import {Button} from "react-bootstrap";
import {clearUnstickyAlerts, setAlert} from "../../store/actions";
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";
import {setError, setMeAsDefault} from "../../store/actions/typeAhead";
import {setOwner} from "../../store/actions/booking";

const BookingOwnerSelect = (props) => {

  const dispatch = useDispatch();
  const bookingState = useSelector(state => state.bookingReducer);
  const typeAhead = useSelector(state => state.typeAheadReducer.bookingOwner);
  const user = useSelector(state => state.authenticationReducer.token_data);

  useEffect(() => {
    // If I am an admin @todo - check for role
    console.log(user.roles.includes("ROLE_ADMIN"));
    if(user.roles.includes("ROLE_ADMIN")) {
      if(!props.ownerSelectDisabled) {
        // Put me in the search box
        dispatch(setMeAsDefault("bookingOwner"));
      }
    }
    else {
      console.log(user.id);
      dispatch(setOwner(user.id));
    }
    
    // setOwner(user.id)
    
  }, [dispatch, user]);

  const handleSelectOwner = () => {
    dispatch(clearUnstickyAlerts())
    if(typeAhead.selected.length === 0) {
      dispatch(setAlert('Error', 'Please select a user', ALERT_DANGER));
      dispatch(setError(true, "bookingOwner"))
    }
    else {
      dispatch(setOwner(typeAhead.selected[0]['@id']))
    }
  }

  if(props.disabled || bookingState.owner !== null) {
    return props.children;
  }
  else {
    return (
      <Aux>
        <UserTypeAhead id={"bookingOwner"} /><br/>
        <Button onClick={handleSelectOwner}>Select User</Button>
      </Aux>
    );
  }
}

export default BookingOwnerSelect;