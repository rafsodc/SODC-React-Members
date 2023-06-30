import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventForm from './EventForm'
import {eventFormSchema} from "../../../utils/forms/schema";
import {clearEvent, loadEventForm, setEventField, submitEventForm, setEventSaved} from "../../../store/actions/event";
import {clearUnstickyAlerts} from "../../../store/actions";
import FormSubmitted from "../../../components/Form/FormSubmitted";
import useFormBuilder from "../../../hooks/Forms/useFormBuilder";
import { useParams } from 'react-router'
import apiPaths from "../../../store/paths";
import TicketTypeEdit from './TicketTypeEdit';
import {Accordion} from 'react-bootstrap';
import TicketTypes from './TicketType';
import TicketType from './TicketType';
import { setAccordion } from '../../../store/actions/layout';

const EventEdit = () =>  {

    let { id } = useParams()

    const dispatch = useDispatch()
    const {form, settings} = useSelector(state => state.eventFormReducer)
    const ticketTypes = useSelector(state => state.ticketTypesFormReducer)
    const {accordion} = useSelector(state => state.layoutReducer)

    useEffect(() => {
      dispatch(id ===  undefined ? clearEvent() : loadEventForm(apiPaths.event.EVENTS + '/' + id + '/form'))
    }, [dispatch])

    const onChange = (event) => {
      dispatch(setEventField(event.target.name, event.target.value))
      dispatch(setEventSaved(false))
    }

    const onSubmit = () => dispatch(submitEventForm(form, settings.location));

    const {
      register,
      errors,
      handleSubmit,
    } = useFormBuilder(eventFormSchema)

    const childProps = {
        errors: errors,
        data: form,
        onChange: onChange,
        ref: register
    }

    const handleHeaderClick = (tab, key) => {
      const setKey = (key === accordion) ? -1 : key
      dispatch(setAccordion(setKey))
    }

    //const ticketTypes = settings.location && <TicketTypes event={settings.location} ticketTypes={ticketTypes} accordion={accordion}/>;

    const transformedTicketForms = Object.entries(ticketTypes.form).map((ticketType, key) => {
      return <TicketType
        ticket={ticketType[1]}
        settings={ticketTypes.settings[ticketType[0]]}
        key={key}
        ticketTypeKey={(key + 1)}
        handleHeaderClick={() => handleHeaderClick('ticketType', key + 1)}
        event={settings.location}
      />
    })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, [])
  
    return (
      <>
        <h1>Create Event</h1>
          <EventForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={settings.isLocked}
                   childProps={childProps} saved={settings.isSaved} />
       </>
    )

  }

export default EventEdit