import Link from "next/link";
import landmarkStyles from "../styles/Landmark.module.css";
import { Col, Image, Card, Row } from 'react-bootstrap';

const LandmarkItem = ({ landmark }) => {
    return (
        <Col xl = '4' className=" my-2">
        <Link href={`/landmark/${landmark.id}`} className="">
            <Card className = {landmarkStyles.landElem}>
                <Image className="" src={landmark.picture[0]} height= '200' width = '100%' />
                <Card.Body>
                    <Row>
                        <Col>
                    <Row>
                        <h5>{landmark.name}
                        </h5>
                        <div> {landmark.city}
                        </div>
                        </Row>
                    </Col>
                    <Col>
                    <h5 className="d-flex justify-content-end">Program: {landmark.openHour} - {landmark.closeHour} </h5>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
        </Col>
    );
};



export default LandmarkItem;
