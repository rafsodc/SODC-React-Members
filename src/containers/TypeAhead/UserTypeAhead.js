import React, {useState, useEffect} from "react";
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";
import Aux from "../../hoc/Aux";
import axios from "../../services/axios/axios";
import apiPaths from "../../store/paths";
import {Form} from "react-bootstrap";

const UserTypeAhead = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
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

  }, [props.selected]);

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
    setSelected(value);
    if(value[0] !== undefined) {
      const uri = value[0]['@id'];
      props.handleSelect(uri);
    }
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
        className={props.error ? "form-warning-el" : ""}
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
        useCache={true}
      />
      <Form.Text muted className={"form-warning-desc"}>{props.error}</Form.Text>
    </Aux>
    );
}

export default UserTypeAhead;