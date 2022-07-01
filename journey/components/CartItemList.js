import CartItem from './CartItem'
import { Container, Row } from 'react-bootstrap'

const CartItemList = ({ tickets, obiectiv }) => {
  return (
    <Container>
        <Row>
      {tickets.map((ticket) => (
        <CartItem ticket={ticket} obiectiv={obiectiv} className="" />
      ))}
      </Row>
    </Container>
  )
}

export default CartItemList
