import Link from "next/link";
import { Col, Image, Card, Row } from "react-bootstrap";
import { currentLandmarkState, cartState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { server } from "../config";
import { useEffect, useState } from "react";

const CartItem = ({ ticket }) => {
    const previousShop = useHookstate(currentLandmarkState).get()._id;
    const prev2 = useHookstate(currentLandmarkState);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [tikName, setTikName] = useState("");
    const cart = useHookstate(cartState);
    
    
    useEffect(async () => {
        const res2 = await fetch(`${server}/landmark/${previousShop}`);

        const landmark = await res2.json();

        if (landmark) {
            setName(landmark.name);
        }

        const res = await fetch(`${server}/ticket/${ticket.id}`);

        const ticketReceived = await res.json();
        console.log(ticketReceived)

        if (ticketReceived) {
            setPrice(ticketReceived.price);
            setTikName(ticketReceived.name);
        }

    }, []);

    return (
        <Card className=" my-2">
            <button type="button" class="btn btn-danger btn-sm" 
            onClick={() => {
                const l = JSON.parse(JSON.stringify(cart.get()));
                const isEq = (e) => {
                    return(e == ticket.id)
                };
                const idx = l.findIndex(isEq)
                l.splice(idx, 1)
                if(!l.length) {
                    prev2.set({_id: ""})
                }
                cart.set(l);
            }}
            >Delete</button>
            <Card.Body className="">
                <Row className=" mb-2">
                    <Col>
                        <h5>{tikName}</h5>
                    </Col>
                    <Col>
                        <h5 className="d-flex justify-content-end">
                            X {ticket.quantity}
                        </h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5>{name}</h5>
                    </Col>
                    <Col>
                        <h5 className="d-flex justify-content-end">
                            {price} RON
                        </h5>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
