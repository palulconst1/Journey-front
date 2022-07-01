import Link from "next/link";
import { Col, Image, Card, Row } from "react-bootstrap";
import { currentLandmarkState, cartState } from "../pages/_app";
import { Downgraded, useHookstate } from "@hookstate/core";
import axios from "axios";
import { server } from "../config";
import { useEffect, useState } from "react";

const CartItem = ({ ticket, obiectiv }) => {
    const prev2 = useHookstate(currentLandmarkState);
    const cart = useHookstate(cartState);

    

    return (
        <Card className=" my-2">
            <button type="button" class="btn btn-danger btn-sm" 
            onClick={() => {
                console.log("cart", cart);
                const l = cart.attach(Downgraded).get()
                console.log("l", l)
                const isEq = (e) => {
                    return(e.id == ticket[0]._id)
                };
                const idx = l.findIndex(isEq)
                console.log(idx)
                
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
                        <h5>{ticket[0].name}</h5>
                    </Col>
                    <Col>
                        <h5 className="d-flex justify-content-end">
                            X {ticket[1]}
                        </h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5>{obiectiv}</h5>
                    </Col>
                    <Col>
                        <h5 className="d-flex justify-content-end">
                            {ticket[0].price} RON
                        </h5>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
