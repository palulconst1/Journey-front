import Link from "next/link";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import axios from "axios";
import { userState, authState, landmarkState, cartState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";

const Logout = ( ) => {

    const auth = useHookstate(authState);
    const user = useHookstate(userState);
    const landmark = useHookstate(landmarkState);
    const cart = useHookstate(cartState);

    const handleLogout= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            user.set({
                _id: "",
                firstName: "",
                lastName: "",
                verified: false,
                verifyCode: "",
                orders: [],
            });

            landmark.set({
                _id: "",
                name: "",
                description: "",
                openHour: "",
                closeHour: "",
                tickets: [],
                orders: [],
            });

            auth.set({
                jwt: "",
                loggedIn: false,
                tip: "",
            });

            cart.set([]);

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
                        <Form onSubmit= {(e) => handleLogout(e)}>
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

export default Logout;
