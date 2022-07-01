import { server } from "../config";
import loginStyles from "../styles/Login.module.css";
import { Col, Image, Card, Row, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHookstate } from "@hookstate/core";
import { authState, cartState } from "./_app";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginState = useHookstate(authState);
    const cart = useHookstate(cartState);

    const [usernameR, setUsernameR] = useState("");
    const [passwordR, setPasswordR] = useState("");
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");

    const handleLogin = async (e) => {
        e.stopPropagation();
        e.preventDefault();


        try {
            const response = await axios.post(
                "http://localhost:5000/user/login",
                {
                    email: username,
                    password: password,
                }
            );
            loginState.set({
                jwt: response.data.token,
                loggedIn: true,
                tip: "user",
            });

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/landmark/login",
                {
                    email: username,
                    password: password,
                }
            );
            loginState.set({
                jwt: response.data.token,
                loggedIn: true,
                tip: "landmark",
            });

            cart.set([]);

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    const handleRegister = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/user",
                {
                    email: usernameR,
                    password: passwordR,
                    firstName: fn,
                    lastName: ln
                }
            );

            console.log(response)

            const res = await axios.post(
                "http://localhost:5000/user/verify",
                {
                    email: response.data.email
                }
            );
            console.log("done")
            window.location.href = "/verifyUser";
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Row className="mt-4">
            <Col className="" xl="1" />
            <Col className="" xl="4">
                <div className={loginStyles.card}>
                    <h4 className="titlu">Log in</h4>
                    <Form onSubmit= {(e) => handleLogin(e)}> 
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Row className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <a href="/forgotPassword">Forgot password?</a>
                            </div>
                        </Row>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            
                        >
                            Sign in
                        </button>
                    </Form>
                </div>
            </Col>
            <Col className="" xl="1" />
            <Col className="" xl="4">
                <div className={loginStyles.card}>
                    <h4 className="titlu">Register</h4>
                    <Form onSubmit= {(e) => handleRegister(e)}>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                                value={usernameR}
                                onChange={(e) => {
                                    setUsernameR(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                                value={passwordR}
                                onChange={(e) => {
                                    setPasswordR(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                id="form2Example1"
                                className="form-control"
                                placeholder="Prenume"
                                value={fn}
                                onChange={(e) => {
                                    setFn(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                id="form2Example1"
                                className="form-control"
                                placeholder="Nume"
                                value={ln}
                                onChange={(e) => {
                                    setLn(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Sign up
                        </button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}
