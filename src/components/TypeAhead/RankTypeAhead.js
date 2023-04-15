import React from 'react'
import '../../assets/css/TypeAhead.css'
import EntityTypeAhead from './EntityTypeAhead'

const RankTypeAhead = (props) => {

  const formatOption = (option) => {
    return option.rank
  }

  return <EntityTypeAhead type="rank" id="rankTypeAhead" formatOption={formatOption} selected={props.selected}
                          handleSelect={props.handleSelect}/>

}

export default RankTypeAhead