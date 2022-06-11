import Link from "next/link";
import landmarkStyles from "../styles/Landmark.module.css";
import TicketList from "./TicketList";
import { useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import CarouselList from "./CarouselList";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const LandmarkProfile = () => {
    const auth = useHookstate(authState).get();
    const landmark = useHookstate(landmarkState).get();
    const [description, setDescription] = useState(landmark.description);
    const [nume, setNume] = useState(landmark.name);
    const [open, setOpen] = useState(landmark.openHour);
    const [close, setClose] = useState(landmark.closeHour);
    const [city, setCity] = useState(landmark.city);
    
    const handleSave= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://localhost:5000/landmark",
                {
                    name: nume,
                    description: description,
                    // openHour: open,
                    // closeHour: close,
                    city: city,
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );
            landmarkState.set({
                name: nume,
                    description: description,
                    // openHour: open,
                    // closeHour: close,
                    city: city,
            });

            window.location.href = "/";
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Card>
            <Card.Body>
                <Row className="mt-4">
                    <Col xl="5" className="">
                        <CarouselList photos={[1, 2, 3, 4]} />
                        <Row>
                            <Col xl="1" className="" />
                            <Col xl="4">
                                <input type="file" className="form-control" id="" />
                                <div className="d-grid gap-2 my-4 ">
                                    <button
                                        className="btn btn-primary"
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
                                <Form.Label>Oras</Form.Label>
                                <Form.Control className="form-control" 
                                value={city}
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control as="textarea" rows={5} 
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                />
                            </Form.Group>
                            <Row className="">
                                <Col className="">
                                    <Form.Label>Deschidere</Form.Label>
                                    <div className="my-2">
                                        <input type="time" name="box1" 
                                        />
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
                                    className="btn btn-primary"
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

export default LandmarkProfile;
