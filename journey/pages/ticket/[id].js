import { server } from "../../config";
import Meta from "../../components/Meta";
import { Col, Image, Card, Row, Carousel } from "react-bootstrap";
import TicketUpdate from "../../components/TicketUpdate";

export default function Ticket({ ticket }) {
    return (
        <Card>
            <Meta title={ticket.name} />

            <TicketUpdate ticket={ticket} />
        </Card>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/ticket/${context.params.id}`);

    const ticket = await res.json();


    return {
        props: {
            ticket,
        },
    };
};
