import ticketStyle from "../styles/Ticket.module.css";
import { useState } from "react";
import { Col, Image, Card, Row } from "react-bootstrap";
import { useRouter } from "next/router";

const TicketItemOwn = ({ ticket }) => {
    const [counter, setCounter] = useState(1);
    const router = useRouter();
    
    return (
        <Col xl = "2" className = "mt-4" >
        <Card className=" my-2">
            <Card.Body className="">
                <h5 className="card-title">
                    <span>{ticket.name}</span>
                    <span className={ticketStyle.price}>
                        {ticket.price} RON
                    </span>
                </h5>
                <p className="card-text">{ticket.description}</p>
                <button
                        className= "btn btn-primary"
                        onClick={() => {
                            router.push(`/ticket/${ticket._id}`);
                        }}
                    >
                        Edit
                    </button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default TicketItemOwn;
