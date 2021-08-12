import React from "react";
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, setError, setOptions, setValue} from "../../store/actions/typeAhead";
import {Form} from "react-bootstrap";
import Aux from "../../hoc/Aux";

const UserTypeAhead = (props) => {

  const dispatch = useDispatch();
  const typeAheadState = useSelector(state => state.typeAheadReducer[props.id])

  const handleSearch = (query) => {
    dispatch(loadUsers(query, props.id))
  }

  const handleSelect = (value) => {
    //const value = valueArr.length !== 0 ? valueArr[0] : null;
    dispatch(setValue(value, props.id))
    dispatch(setError(false, props.id))
  }

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  const errorMsg = typeAheadState.error ? <Form.Text muted className={"form-warning-desc"}>User must be selected</Form.Text> : "";

  const formatOption = (option) => {
    const rank = option.rank === undefined ? "" : " (" + option.rank.rank + ")";
    return option.lastName + ", " + option.firstName + rank;
  }

  return (
    <Aux>
      <AsyncTypeahead
        className={typeAheadState.error ? "form-warning-el" : ""}
        filterBy={filterBy}
        id="async-example"
        isLoading={typeAheadState.loading}
        labelKey={(option) => formatOption(option)}
        minLength={3}
        onSearch={handleSearch}
        options={typeAheadState.options}
        placeholder="Search for a user..."
        selected={typeAheadState.selected}
        onChange={handleSelect}
      />
      {errorMsg}
    </Aux>
    );
}

export default UserTypeAhead;