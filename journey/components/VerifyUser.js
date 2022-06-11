import Link from "next/link";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import { userState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const VerifyUser = ( ) => {
    const [cod, setCod] = useState("");
    const auth = useHookstate(authState).get();

    const handleVerify= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/user/verify/" + cod, {},
                { 
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
        <Card>
            <Card.Body className="" >
                <Row className="mt-4">
                    <Col className="" xl="">
                        <Form onSubmit= {(e) => handleVerify(e)}>
                            <Form.Group>
                                <Form.Label>Cod de verificare</Form.Label>
                                <Form.Control className="form-control"
                                    value = {cod}
                                    onChange={(e) => {
                                        setCod(e.target.value);
                                    }} />
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

export default VerifyUser;
