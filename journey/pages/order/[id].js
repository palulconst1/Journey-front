import { server } from "../../config";
import Meta from "../../components/Meta";
import { Col, Image, Card, Row, Carousel } from "react-bootstrap";
import TicketUpdate from "../../components/TicketUpdate";
import axios from "axios";
import { authState } from "../_app";
import { useHookstate } from "@hookstate/core";

export default function Ticket({ ticket }) {
    return (
        <Card>
            <Meta title={ticket.name} />

           
        </Card>
    );
};

export const getServerSideProps = async (context) => {
    const auth = useHookstate(authState).get();
    const res = await axios.get(
        "http://localhost:5000/orders/user/" + context.params.id,{ 
        headers: {
            "Authorization": auth.jwt
          }}
    );

    const order = await res.json();


    return {
        props: {
            order,
        },
    };
};
