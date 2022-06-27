import LandmarkItem from "./LandmarkItem";
import landmarkStyles from "../styles/Landmark.module.css";
import { Container, Row, Form, Col } from "react-bootstrap";

const LandmarkList = ({ landmarks }) => {
    return (
        <Container>
            
                <Form className="mt-4">
                <Row>
                  <Col xl = "4">
                    <Form.Control type="search" id="form1" className="" />
                    <label className="form-label" for="form1">
                        
                    </label>
                    </Col>
                    <Col>
                    <button type="button" className="btn btn-primary">
                        search
                    </button>
                    </Col>
                    </Row>
                </Form>
           
            <Row className="my-4">
                {landmarks.map((landmark) => (
                    <LandmarkItem landmark={landmark} className="" />
                ))}
            </Row>
        </Container>
    );
};

export default LandmarkList;
