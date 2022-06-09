import Link from "next/link";
import landmarkStyles from "../styles/Landmark.module.css";
import TicketList from "./TicketList";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import CarouselList from "./CarouselList";
import TimePicker from "react-bootstrap-time-picker";

const LandmarkProfile = ({ landmark }) => {
    const [val, setVal] = useState(0);
    return (
        <Card>
            <Card.Body>
                <Row className="mt-4">
                    <Col xl="5" className="">
                        <CarouselList photos={[1, 2, 3, 4]} />
                        <Row>
                            <Col xl="1" className="" />
                            <Col xl="4">
                                <input type="file" class="form-control" id="" />
                                <div className="d-grid gap-2 my-4 ">
                                    <button
                                        class="btn btn-primary"
                                        type="submit"
                                        onClick={(data) => {
                                            console.log(data);
                                        }}
                                    >
                                        Upload
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="" xl="3">
                        <Form>
                            <Form.Group>
                                <Form.Label>Nume</Form.Label>
                                <Form.Control className="form-control" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Oras</Form.Label>
                                <Form.Control className="form-control" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                            <Row className="">
                                <Col className="">
                                    <Form.Label>Deschidere</Form.Label>
                                    <div className="my-2">
                                        <input type="time" name="box1" />
                                    </div>
                                </Col>
                                <Col className="">
                                    <Form.Label>Inchidere</Form.Label>
                                    <div className="my-2">
                                        <input type="time" />
                                    </div>
                                </Col>
                            </Row>
                            <div className="d-grid gap-2 my-4 ">
                                <button
                                    class="btn btn-primary"
                                    type="submit"
                                    onClick={(data) => {
                                        console.log(data);
                                    }}
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

export default LandmarkProfile;
