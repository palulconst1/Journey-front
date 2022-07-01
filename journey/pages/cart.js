import { server } from "../config";
import Meta from "../components/Meta";
import CartItemList from "../components/CartItemList";
import { Col, Image, Card, Row, Carousel, Button } from "react-bootstrap";
import axios from "axios";
import CartStyles from "../styles/Cart.module.css";
import { cartState, totalState, currentLandmarkState, authState } from "./_app";
import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";

const cart = () => {
    const tickets = useHookstate(cartState).get();
    const curentLandmark = useHookstate(currentLandmarkState).get();
    const auth = useHookstate(authState).get();
    const [total, setTotal] = useState(0);
    const [bilete, setBilete] = useState([]);
    const [obiectiv, setObiectiv] = useState();

    useEffect(async () => {
        const l = [];
        const sum = 0;

        for (const ticket of tickets) {
            const res = await fetch(`${server}/ticket/${ticket.id}`);

            const ticketReceived = await res.json();
            l.push([ticketReceived, ticket.quantity])
            

            if (ticketReceived) {
                sum += ticket.quantity * ticketReceived.price;
                // setTotal(total + ticket.quantity*ticketReceived.price)
            }

        const res2 = await fetch(`${server}/landmark/${curentLandmark._id}`);

        const lndm = await res2.json();

        if (lndm) {
            setObiectiv(lndm.name);
        }

        }
        setBilete(l)
        setTotal(sum);
    }, [tickets.length]);

    const handleBuy = async (e) => {
        
        const cart = []
        for(let i of e) {
            cart.push({
                ticketId: i.id,
                quantity: i.quantity
            })
        }


        try {
            const response = await axios.post(
                "http://localhost:5000/order",
                {
                    landmark: curentLandmark._id,
                    cart: cart
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );
            currentLandmarkState.set({
                id: ""
            });

            cartState.set([])

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    }

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
                            <CartItemList tickets={bilete} obiectiv = {obiectiv} />
                        </Col>
                        <Col xl="5" />
                        <Col xl="2">
                            <h5>Total: {total} </h5>
                            <Button
                                className="btn btn-primary btn-block"
                                onClick={() => {
                                    const cart = JSON.parse(
                                        JSON.stringify(tickets)
                                    );
                                    handleBuy(cart);
                                }}
                            >
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
