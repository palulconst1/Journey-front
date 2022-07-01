import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Image, Card, Row } from "react-bootstrap";
import { authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";
import ListaBilete from "./ListaBilete";

const OrderItem = ({ order }) => {
    const [nume, setNume] = useState("");
    const auth = useHookstate(authState).get();


    useEffect(async () => {
        if (auth.tip === "user") {
            try {
                const res = await axios.get(
                    "http://localhost:5000/landmark/" + order.landmark
                );
                const n = res.data.name;
                setNume(n)
                // window.location.href = "/";
            } catch (error) {
                console.log(error)
            }
        }
    }, []);

    return (
        <Col xl="4" className=" my-2">
            <Link href={`/orderu/${order.id}`} className="">
                <Card className="">
                    <Card.Body>
                        <Row>
                            <Col>
                                <h5>Total: {order.total} Ron</h5>
                                <h6> {nume}</h6>
                            </Col>
                            <Col>
                                <ListaBilete bilete={order.cart} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default OrderItem;
