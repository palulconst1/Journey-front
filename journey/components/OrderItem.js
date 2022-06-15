import Link from "next/link";
import { Col, Image, Card, Row } from 'react-bootstrap';

const OrderItem = ({ order }) => {
    return (
        <Col xl = '4' className=" my-2">
        <Link href={`/orderu/${order.id}`} className="">
            <Card className = "">
                <Card.Body>
                    <Row>
                        <Col>
                        <h5>{order.total}
                        </h5>
                        <div> {order.createdAt}
                        </div>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
        </Col>
    );
};



export default OrderItem;
