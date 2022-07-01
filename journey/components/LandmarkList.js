import LandmarkItem from "./LandmarkItem";
import landmarkStyles from "../styles/Landmark.module.css";
import { Container, Row, Form, Col } from "react-bootstrap";
import { useState } from "react";

const LandmarkList = ({ landmarks }) => {
    const [_landmarks, setLandmarks] = useState(landmarks);
    const [oras, setOras] = useState("");

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const prevLand = landmarks;

        setLandmarks(
            prevLand.filter((landmark) => landmark.city.toLowerCase().includes(oras))
        );
    };
    return (
        <Container>
            <Form
                className="mt-4"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <Row>
                    <Col xl="4">
                        <Form.Control
                            type="search"
                            id="form1"
                            className=""
                            value={oras}
                            onChange={(e) => {
                                setOras(e.target.value);
                            }}
                        />
                        <label className="form-label" for="form1"></label>
                    </Col>
                    <Col>
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </Col>
                </Row>
            </Form>

            <Row className="my-4">
                {_landmarks.map((landmark) => (
                    <LandmarkItem landmark={landmark} className="" />
                ))}
            </Row>
        </Container>
    );
};

export default LandmarkList;
