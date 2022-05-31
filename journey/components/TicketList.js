import TicketItem from './TicketItem'
import ticketStyles from '../styles/Ticket.module.css'

const TicketList = ({ tickets }) => {
  return (
    <div className={ticketStyles.grid}>
      {tickets.map((ticket) => (
        <TicketItem ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketList
