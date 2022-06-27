import { server } from "../config";
import Meta from "../components/Meta";
import CartItemList from "../components/CartItemList";
import { Col, Image, Card, Row, Carousel, Button } from "react-bootstrap";
import axios from "axios";
import CartStyles from "../styles/Cart.module.css";
import { cartState, totalState } from "./_app";
import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";

const cart = ( ) => {
    const tickets = useHookstate(cartState).get();
    const [total, setTotal] = useState(0)
    useEffect(async () => {
        const sum = 0;
        
        for(const ticket of tickets) {
            const res = await fetch(`${server}/ticket/${ticket.id}`);

            const ticketReceived = await res.json();
            console.log(ticketReceived)
    
            if (ticketReceived) {
                sum += ticket.quantity*ticketReceived.price;
                // setTotal(total + ticket.quantity*ticketReceived.price)
            }
        }

        setTotal(sum);

    }, [tickets.length]);

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
                        <h5>Total: {total} </h5>
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
