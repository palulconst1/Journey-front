import Link from "next/link";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import axios from "axios";

const SendResetPassword = ( ) => {
    const [username, setUsername] = useState("");

    const handleSend= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/user/password/reset",
                {
                    email: username
                },
            );

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/landmark/password/reset",
                {
                    email: username
                },
            );

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Card>
            <Card.Body className="" >
                <Row className="mt-4">
                    <Col className="" xl="">
                        <Form onSubmit= {(e) => handleSend(e)}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="form-control" 
                                value = {username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}/>
                            </Form.Group>

                            <div className="d-grid gap-2 mt-4 ">
                                <button
                                    class="btn btn-primary"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default SendResetPassword;
