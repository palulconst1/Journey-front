import { server } from "../config";
import loginStyles from "../styles/Login.module.css";
import { Col, Image, Card, Row, Form } from "react-bootstrap";

export default function Login() {
    return (
        <Row className="mt-4">
            <Col className="" xl="1" />
            <Col className="" xl="4">
                <div className={loginStyles.card}>
                    <h4 className="titlu">Log in</h4>
                    <Form>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                            />
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                            />
                        </Form.Group>

                        <Row className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </Row>

                        <button
                            type="button"
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
                    <Form>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                            />
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                            />
                        </Form.Group>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                id="form2Example1"
                                className="form-control"
                                placeholder="Prenume"
                            />
                        </Form.Group>
                        <Form.Group className="form-outline mb-4">
                            <Form.Control
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="Nume"
                            />
                        </Form.Group>

                        <button
                            type="button"
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
