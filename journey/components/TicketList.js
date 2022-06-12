import TicketItem from './TicketItem';
import ticketStyles from '../styles/Ticket.module.css';
import {Row} from "react-bootstrap";

const TicketList = ({ tickets }) => {
  return (
    <Row className="">
      {tickets.map((ticket) => (
        <TicketItem ticket={ticket} />
      ))}
    </Row>
  )
}

export default TicketList
