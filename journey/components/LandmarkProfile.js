import Link from "next/link";
import landmarkStyles from "../styles/Landmark.module.css";
import TicketListOwn from "./TicketListOwn";
import { useEffect, useState } from "react";
import { Col, Image, Card, Row, Container, Form } from "react-bootstrap";
import CarouselList from "./CarouselList";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { server } from "../config";
import { useRouter } from "next/router";

const LandmarkProfile = () => {
    const auth = useHookstate(authState).get();
    const landmark = useHookstate(landmarkState).get();
    const [description, setDescription] = useState(landmark.description);
    const [nume, setNume] = useState(landmark.name);
    const [open, setOpen] = useState(landmark.openHour);
    const [close, setClose] = useState(landmark.closeHour);
    const [city, setCity] = useState(landmark.city);

    const router = useRouter();

    const [tickets, setTickets] = useState([]);

    const [madeTicketRequest, setMadeTicketRequest] = useState(false);

    useEffect(async () => {
        if (!madeTicketRequest) {
            madeTicketRequest = true;
            
            const res2 = await fetch(`${server}/tickets/${landmark._id}`);
        
            const fetchedTickets = await res2.json();

            if (fetchedTickets) {
                setTickets(fetchedTickets);
            }
        }
    }, [madeTicketRequest]);
    
    const handleSave= async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://localhost:5000/landmark",
                {
                    name: nume,
                    description: description,
                    openHour: open,
                    closeHour: close,
                    city: city,
                },{ 
                headers: {
                    "Authorization": auth.jwt
                  }}
            );
            landmarkState.set({
                name: nume,
                    description: description,
                    openHour: open,
                    closeHour: close,
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
                <Col xl = "1" />
                    <Col xl="6" className="">
                        <CarouselList photos={[1, 2, 3]} />
                        <Row className = "mt-4" >
                            <Col xl="1" className="" />
                            <Col xl="4">
                                <input type="file" className="form-control" id="" />
                                <div className="d-grid gap-2 my-4 ">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl = "1" />
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
                                         value={open}
                                         onChange={(e) => {
                                             setOpen(e.target.value);
                                         }}
                                        />
                                    </div>
                                </Col>
                                <Col className="">
                                    <Form.Label>Inchidere</Form.Label>
                                    <div className="my-2">
                                        <input type="time" 
                                        value={close}
                                        onChange={(e) => {
                                            setClose(e.target.value);
                                        }} />
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
                    <Col xl = "1" />
                </Row>
                <TicketListOwn tickets={tickets} />
                <Col xl = "4">
                <div className="d-grid gap-2 my-4 ">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        router.push(`/ticket/create`);
                                    }}
                                >
                                    Adauga Bilet
                                </button>
                            </div>
                            </Col>
            </Card.Body>
        </Card>
    );
};



export default LandmarkProfile;
