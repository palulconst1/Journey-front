import CartItem from './CartItem'
import { Container, Row } from 'react-bootstrap'

const CartItemList = ({ tickets }) => {
  return (
    <Container>
        <Row>
      {tickets.map((ticket) => (
        <CartItem ticket={ticket} className="" />
      ))}
      </Row>
    </Container>
  )
}

export default CartItemList
