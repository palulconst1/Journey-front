import Link from "next/link";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import axios from "axios";

const ResetPassword = ( ) => {
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");

    const handleSend= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/user/password/reset/" + code,
                {
                    password: password
                },
            );

            window.location.href = "/login";
        } catch (error) {
            console.error(error)
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/landmark/password/reset/" + code,
                {
                    password: password
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
                                <Form.Label>Parola noua</Form.Label>
                                <Form.Control className="form-control" 
                                value = {password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Cod</Form.Label>
                                <Form.Control className="form-control" 
                                value = {code}
                                onChange={(e) => {
                                    setCode(e.target.value);
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

export default ResetPassword;
