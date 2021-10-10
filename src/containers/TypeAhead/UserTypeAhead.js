import React, {useState, useEffect} from "react";
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";
import Aux from "../../hoc/Aux";
import axios from "../../services/axios/axios";
import apiPaths from "../../store/paths";
import {Form} from "react-bootstrap";
import "../../resources/css/TypeAhead.css"

const UserTypeAhead = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [hasChanged, setHasChanged] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(props.error);
    if(props.selected !== undefined) {
      setIsLoading(true);
      const path = apiPaths.user.GET_COLLECTION + "?id=" + props.selected
      axios.get(path).then((response) => {
        setOptions(response.data['hydra:member']);
        setSelected(response.data['hydra:member']);
      })
      .finally(
        setIsLoading(false)
      );
    }

  }, [props.selected, props.error]);

  const handleSearch = (query) => {
    setIsLoading(true);

    const path = apiPaths.user.GET_COLLECTION + "?name=" + query.toLowerCase();
    axios.get(path).then((response) => {
      console.log(response.data);
      setOptions(response.data['hydra:member']);
    })
    .finally(
      setIsLoading(false)
    );
  };

  const handleSelect = (value) => {
    setHasChanged(false);
    setError(false);
    setSelected(value);
    // If value, then change
    //const uri = value[0] === undefined ? null : value[0]['@id'];
    if(props.handleSelect !== undefined && value[0] !== undefined) {
      props.handleSelect(value[0]['@id'], props.index);
    } 
  }

  const handleInputChange = (value) => {
    if(value === "") {
      props.handleSelect(null, props.index);
    }
    else {
      setHasChanged(true);
    }
  }

  const handleBlur = () => {
    setError(hasChanged && "Please use the drop down menu to select a user.");
  }

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  const formatOption = (option) => {
    const rank = option.rank === undefined ? "" : " (" + option.rank.rank + ")";
    return option.lastName + ", " + option.firstName + rank;
  }

  return (
    <Aux>
      <AsyncTypeahead
        clearButton
        className={error ? "form-warning-el" : ""}
        filterBy={filterBy}
        id={props.id}
        isLoading={isLoading}
        labelKey={(option) => formatOption(option)}
        minLength={2}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for a user..."
        selected={selected}
        onChange={handleSelect}
        renderMenuItemChildren={(option) => formatOption(option)}
        useCache={false}
        onInputChange={handleInputChange}
        onBlur={handleBlur}
      />
      <Form.Text muted className={"form-warning-desc"}>{error}</Form.Text>
    </Aux>
    );
}

export default UserTypeAhead;