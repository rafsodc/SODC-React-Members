import React from 'react'
import { Form } from 'react-bootstrap'
import RankTypeAhead from '../TypeAhead/RankTypeAhead'
import UserTypeAhead from '../TypeAhead/UserTypeAhead'
import Aux from '../../hoc/Aux'
import { replaceElementByIndex } from '../../store/helpers/utility'
import FormSelectOptions from './FormSelectOptions'

const FormElement = React.forwardRef((props, ref) => {
    let control

    const handleSelect = (value, index) => {

      let data
      // If the original data is an array, we need to update that array
      if (Array.isArray(props.data[props.name])) {
        // First, update the element that's been updated
        data = replaceElementByIndex(props.data[props.name], index, value)

        // Filter the array for duplicates and if the item is null
        data = data.filter((item, index) => data.indexOf(item) === index)
        data = data.filter((item) => item !== null)
      }
      // Otherwise replace the data with the new value
      else {
        data = value
      }

      // Create an object to send to the onChange event.
      const object = {
        target: {
          name: props.name,
          value: data
        }
      }
      props.onChange(object)
    }

    switch (props.type) {
      case 'select':
        control =
          <Form.Control as="select" disabled={props.disabled} onChange={props.onChange} name={props.name} ref={ref}
                        placeholder={props.placeholder}
                        className={props.errors[props.name] && 'form-warning-el'}
                        defaultValue={props.data[props.name]}
          ><FormSelectOptions options={props.options}/></Form.Control>
        break
      case 'rankTypeAhead':
        control = <RankTypeAhead id={'rankTypeAhead'} handleSelect={handleSelect} selected={props.data[props.name]}/>
        break
      case 'userTypeAhead':
        const typeAheads = props.data[props.name].map((selected, index) => {
          return <UserTypeAhead id={props.name + index} index={index} key={index} selected={selected}
                                handleSelect={handleSelect}/>
        })

        control =
          <Aux> {typeAheads} <UserTypeAhead id={'seatingPreference'} index={typeAheads.length} key={typeAheads.length}
                                            handleSelect={handleSelect}/> </Aux>
        break
      case 'password':
        control =
          <Form.Control as={'input'} disabled={props.disabled} onChange={props.onChange} name={props.name} ref={ref}
                        type={props.type}
                        placeholder={props.placeholder}
                        className={props.errors[props.name] && 'form-warning-el'}
                        value={props.data[props.name]}/>
        break
      default:
        control =
          <Form.Control as={props.type} rows={5} disabled={props.disabled} onChange={props.onChange} name={props.name}
                        ref={ref} type={props.type}
                        placeholder={props.placeholder}
                        className={props.errors[props.name] && 'form-warning-el'}
                        value={props.data[props.name]}/>
    }

    return <Aux>
      <Form.Label>{props.label}</Form.Label>
      {control}
      <Form.Text muted className={'form-warning-desc'}>{props.errors[props.name]?.message}</Form.Text>
    </Aux>
  }
)

export default FormElement
