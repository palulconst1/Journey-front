import TicketItemOwn from './TicketItemOwn';
import {Row} from "react-bootstrap";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from '@hookstate/core';
import { server } from '../config';

const TicketListOwn = ({ tickets }) => {
  return (
    <Row className="mx-4">
      {tickets && tickets.map((ticket) => {
        return (<TicketItemOwn ticket={ticket} />)
        })}
    </Row>
  )
}



export default TicketListOwn
