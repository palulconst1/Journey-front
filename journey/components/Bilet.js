import { Col, Image, Card, Row } from "react-bootstrap";

const Bilet = ({ bilet }) => {
    return (
        <Row className = "mb-4">
            <Col>{bilet.quantity} bilete {bilet.item} la pretul: {bilet.price} Ron</Col>
        </Row>
    );
};

export default Bilet;