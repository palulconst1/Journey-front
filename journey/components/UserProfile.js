import Link from "next/link";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import { userState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const UserProfile = () => {
    const auth = useHookstate(authState).get();
    const user = useHookstate(userState).get();
    const [prenume, setPrenume] = useState(user.firstName);
    const [nume, setNume] = useState(user.lastName);

    const handleSave= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://localhost:5000/user",
                {
                    firstName: prenume,
                    lastName: nume,
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );
            userState.set({
                firstName: prenume,
                lastName: nume,
            });

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Card>
            <Card.Body className="">
                <Row className="mt-4">
                    <Col className="" xl="">
                        <Form onSubmit= {(e) => handleSave(e)}>
                            <Form.Group>
                                <Form.Label>Nume</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    value={nume}
                                    onChange={(e) => {
                                        setNume(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Prenume</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    value={prenume}
                                    onChange={(e) => {
                                        setPrenume(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <div className="d-grid gap-2 my-4 ">
                                <button
                                    class="btn btn-primary"
                                    type="submit"
                                    
                                >
                                    Save
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default UserProfile;
