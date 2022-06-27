import Link from "next/link";
import ticketStyle from "../styles/Ticket.module.css";
import { useState } from "react";
import { Col, Image, Card, Row } from "react-bootstrap";
import { cartState, currentLandmarkState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";

const TicketItem = ({ ticket }) => {
    const [counter, setCounter] = useState(1);
    const cart = useHookstate(cartState);
    const previousShop = useHookstate(currentLandmarkState);

    const handleBuy = (counter, id, landmark) => {
        const l = JSON.parse(JSON.stringify(cart.get()));
        if (previousShop._id.get()) {
            if (previousShop._id.get() != landmark) {
                alert("Alt obiectiv");
            } else {
                if (l) {
                    console.log(l);
                    l.push({
                        id: id,
                        quantity: counter,
                    });
                    cart.set(l);
                    console.log(cart.get());
                }
            }
        } else {
            previousShop.set({_id: landmark})
            if (l) {
                console.log(l);
                l.push({
                    id: id,
                    quantity: counter,
                });
                cart.set(l);
                console.log(cart.get());
            }
        }
    };

    return (
        <Col xl="2" className="mt-4">
            <Card className=" my-2">
                <Card.Body className="">
                    <h5 className="card-title">
                        <span>{ticket.name}</span>
                        <span className={ticketStyle.price}>
                            {ticket.price} RON
                        </span>
                    </h5>
                    <p className="card-text">{ticket.description}</p>
                    <div>
                        <button
                            className={ticketStyle.my_button}
                            onClick={() => {
                                if (counter > 0) {
                                    setCounter(counter - 1);
                                }
                            }}
                        >
                            -
                        </button>
                        <a> {counter} </a>
                        <button
                            className={ticketStyle.my_button}
                            onClick={() => {
                                if (counter < 10) {
                                    setCounter(counter + 1);
                                }
                            }}
                        >
                            +
                        </button>

                        <button
                            className={ticketStyle.buy}
                            onClick={() => {
                                setCounter(0);
                                if(counter > 0) {
                                    handleBuy(counter, ticket._id, ticket.landmark);
                                }
                                
                            }}
                        >
                            Adauga
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TicketItem;
