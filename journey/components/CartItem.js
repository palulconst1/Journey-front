import Link from "next/link";
import { Col, Image, Card, Row } from "react-bootstrap";

const CartItem = ({ ticket }) => {
    return (
        <Card className=" my-2">
            <Card.Body className="">

            <Row className = " mb-2" >
                <Col>
            <h5>{ticket.name}</h5>
            </Col>
            <Col>
            <h5 className="d-flex justify-content-end" >X {ticket.cantitate}</h5>
            </Col>
            </Row>

            <Row>
                <Col>
            <h5>{ticket.obiectiv}</h5>
            </Col>
            <Col>
            <h5 className="d-flex justify-content-end" >{ticket.pret}</h5>
            </Col>
            </Row>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
