import { server } from "../config";
import Meta from "../components/Meta";
import CartItemList from "../components/CartItemList";
import { Col, Image, Card, Row, Carousel, Button } from "react-bootstrap";
import axios from "axios";
import CartStyles from "../styles/Cart.module.css";

const tickets = [
    {
        name: "ticket 1",
        pret: 15,
        obiectiv: "Statuie",
        catitate: 2,
    },
    {
        name: "ticket 2",
        pret: 14,
        obiectiv: "Statuie",
        catitate: 1,
    },
];

const cart = ({ tickets }) => {
    tickets = [
        {
            name: "ticket 1",
            pret: 15,
            obiectiv: "Statuie",
            cantitate: 2,
        },
        {
            name: "ticket 2",
            pret: 14,
            obiectiv: "Statuie",
            cantitate: 1,
        },
        {
            name: "ticket 1",
            pret: 15,
            obiectiv: "Statuie",
            cantitate: 2,
        },
        {
            name: "ticket 2",
            pret: 14,
            obiectiv: "Statuie",
            cantitate: 1,
        },
    ];

    return (
        <Card>
            <Meta title={"cart"} />
            <Card.Header className="d-flex justify-content-center">
                <h1>Shopping Cart</h1>
            </Card.Header>
            <div className="d-flex justify-content-center mt-4">
                <Col xl="6" className="border border-primary ">
                    <Row className="mt-2">
                        <Col xl="5" className="">
                            <CartItemList tickets={tickets} />
                        </Col>
                        <Col xl="5" />
                        <Col xl="2" >
                        <h5>Total: 50</h5>
                            <Button className="btn btn-primary btn-block">  
                                Cumpara
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Card>
    );
};

export default cart;
