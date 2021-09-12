import React from "react";
import Aux from "../../hoc/Aux";

const FormSelectOptions = (props) => {
  if(Array.isArray(props.options)) {
    const transformedOptions = props.options.map((option, key) => {
      //const selected = option.value === props.selected;
      return <option key={key} value={option.value}>{option.description}</option>
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    return <Aux><option value={""}>Choose...</option>{transformedOptions}</Aux>;
  }
  else return null;
}

export default FormSelectOptions;