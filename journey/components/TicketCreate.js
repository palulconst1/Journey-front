import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const TicketCreate = () => {
    const auth = useHookstate(authState).get();
    const [description, setDescription] = useState("");
    const [nume, setNume] = useState("");
    const [price, setPrice] = useState(0);
    
    const handleSave= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/ticket",
                {
                    name: nume,
                    description: description,
                    price: price,
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );

            window.location.href = "/landmarkProfile";
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
                                <Form.Label>Pret</Form.Label>
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
                                    Adauga
                                </button>
                            </div>
                        </Form>
                    </Col>
                    <Col />
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TicketCreate;
