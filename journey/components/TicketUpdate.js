import { useEffect, useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const TicketUpdate = (ticket) => {
    const auth = useHookstate(authState).get();
    const [description, setDescription] = useState(ticket.ticket.description);
    const [nume, setNume] = useState(ticket.ticket.name);
    const [price, setPrice] = useState(ticket.ticket.price);
    
    const handleSave= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://localhost:5000/ticket/" + ticket.ticket._id,
                {
                    name: nume,
                    description: description,
                    price: price,
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    const handleDelete= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.delete(
                "http://localhost:5000/ticket/" + ticket.ticket._id,{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Card  >
            <Card.Body>
                <Row className="mt-4">
                    <Col />
                    <Col className="" xl="2">
                        <Form onSubmit= {(e) => handleSave(e)}>
                            <Form.Group>
                                <Form.Label>Nume</Form.Label>
                                <Form.Control className="form-control" 
                                value={nume}
                                onChange={(e) => {
                                    setNume(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control
                                value={price}
                                type = "number"
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                                />
                            </Form.Group>
                            <div className="d-grid gap-2 my-4 ">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>

                        </Form>
                        <Form onSubmit= {(e) => handleDelete(e)}>
                        <div className="d-grid gap-2 my-4 ">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Elimina bilet
                                </button>
                            </div>
                            </ Form>
                    </Col>
                    <Col />
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TicketUpdate;
