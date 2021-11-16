import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Aux from "../../hoc/Aux";
import Loading from "../../ReactUI/Loading/Loading";
import {useParams} from "react-router";
import { loadAgenda, setAccordion } from "../../store/actions/agenda";
import AgendaItem from "./AgendaItem";
import {Accordion} from "react-bootstrap";

const Agenda = () => {

  const dispatch = useDispatch();
  const agendaState = useSelector(state => state.agendaReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadAgenda(id));
  }, [dispatch]);

  const handleHeaderClick = (key) => {
    const setKey = (key === agendaState.accordion) ? null : key;
    dispatch(setAccordion(setKey));
  }

  console.log(agendaState.accordion);
  const agenda = agendaState.agenda.map((agenda, key) => <AgendaItem agenda={agenda} handleHeaderClick={() => handleHeaderClick(agenda['@id'])} id={agenda['@id']} key={agenda['@id']} />)

  if (agendaState.loaded)  {
    return <Aux>
      <h2>Event Agenda</h2>
      <Accordion activeKey={agendaState.accordion}>
        {agenda}
      </Accordion>
    </Aux>
  }
  else {
    return <Loading />
  }


};

export default Agenda;