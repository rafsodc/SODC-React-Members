import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventForm from './EventForm'
import {eventFormSchema} from "../../../utils/forms/schema";
import {clearEvent, loadEventForm, setEventField, submitEventForm, setEventSaved} from "../../../store/actions/event";
import useFormBuilder from "../../../hooks/Forms/useFormBuilder";
import { useParams } from 'react-router'
import apiPaths from "../../../store/paths";
import TicketType from './TicketType';
import { setAccordion } from '../../../store/actions/layout';
import TicketTypeList from './TicketTypeList';
import { addTicketType } from '../../../store/actions/ticketTypes';

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

    const handleAddTicketType = () => {
        dispatch([
          addTicketType(),
          setAccordion(Object.entries(ticketTypes.form).length + 1)
        ])
    }

    //const ticketTypes = settings.location && <TicketTypes event={settings.location} ticketTypes={ticketTypes} accordion={accordion}/>;

    const transformedTicketForms = Object.entries(ticketTypes.form).map((ticketType, key) => {
      return <TicketType
        form={ticketType[1]}
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

    const ticketTypeList = settings.location !== null ? <TicketTypeList activeKey={accordion} handleAddTicketType={handleAddTicketType}>{transformedTicketForms}
    </TicketTypeList> : ''
  
    return (
      <>
        <h1>Create Event</h1>
          <EventForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={settings.isLocked}
                   childProps={childProps} saved={settings.isSaved} />
          
          {ticketTypeList}
       </>
    )

  }

export default EventEdit