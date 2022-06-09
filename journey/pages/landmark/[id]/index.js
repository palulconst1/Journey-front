import { server } from "../../../config";
import Link from "next/link";
import Meta from "../../../components/Meta";
import TicketList from "../../../components/TicketList";
import { Col, Image, Card, Row, Carousel } from "react-bootstrap";
import CarouselList from "../../../components/CarouselList";

const landmark = ({ landmark, tickets }) => {
    return (
        <Card>
            <Meta title={landmark.name} />
            <Card.Header className="d-flex justify-content-center">
                <Row>
                    <h1>{landmark.name}</h1>
                    <h5 className="">
                        Program: {landmark.openHour} - {landmark.closeHour}{" "}
                    </h5>
                </Row>
            </Card.Header>
            <Card.Body>
              <Row>
              <Col xl = '2' />
              <Col xl = '8' >
                <Card.Text className="">{landmark.description}</Card.Text>
                </Col>
                <Col xl = '2' />
                </Row>

            <CarouselList photos = {[1, 2, 3]} />

            <TicketList tickets={tickets} />
            </Card.Body>
        </Card>
    );
};

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/landmark/${context.params.id}`);

    const landmark = await res.json();

    const res2 = await fetch(`${server}/tickets/${context.params.id}`);

    const tickets = await res2.json();

    return {
        props: {
            landmark,
            tickets,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/landmarks`);

    const landmarks = await res.json();

    const ids = landmarks.map((landmark) => landmark.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};

export default landmark;
