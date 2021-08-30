import React, {useState, useEffect} from "react";
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";
import Aux from "../../hoc/Aux";
import axios from "../../services/axios/axios";
import apiPaths from "../../store/paths";
import {Form} from "react-bootstrap";
import "../../resources/css/TypeAhead.css"
import EntityTypeAhead from "./EntityTypeAhead";

const RankTypeAhead = (props) => {

  const formatOption = (option) => {
    return option.rank;
  }

  return <EntityTypeAhead type="rank" id="rankTypeAhead" formatOption={formatOption} selected={props.selected} handleSelect={props.handleSelect}/>
  
}

export default RankTypeAhead;