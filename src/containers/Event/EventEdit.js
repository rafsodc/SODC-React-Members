import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventForm from '../../components/Form/EventForm'
import {eventFormSchema} from "../../utils/forms/schema";
import {clearEvent, loadEvent, setEventField, submitEventForm} from "../../store/actions/event";
import {clearUnstickyAlerts} from "../../store/actions";
import FormSubmitted from "../../components/Form/FormSubmitted";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import { useParams } from 'react-router'
import apiPaths from "../../store/paths";

const EventEdit = () =>  {

    let { id } = useParams()

    const dispatch = useDispatch()
    const formState = useSelector(state => state.eventReducer)
  
    useEffect(() => {
      let returnFunc = id ===  undefined ? clearEvent() : loadEvent(apiPaths.event.EVENTS + '/' + id)
      return () => dispatch(returnFunc)
    }, [dispatch])

    const onChange = (event) => {
      dispatch(setEventField({ [event.target.name]: event.target.value }))
    }

    const onSubmit = () => dispatch(submitEventForm(formState.fields));

    const {
      register,
      errors,
      handleSubmit,
    } = useFormBuilder(eventFormSchema)

    const childProps = {
        errors: errors,
        data: formState.fields,
        onChange: onChange,
        ref: register
    }
  
    return (
      <>
        <h1>Create Event</h1>
        <FormSubmitted saved={formState.saved}>
          <EventForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={formState.locked}
                   childProps={childProps} saved={formState.saved} />
        </FormSubmitted>
       </>
    )

  }

export default EventEdit