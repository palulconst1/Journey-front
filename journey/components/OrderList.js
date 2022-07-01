import OrderItem from "./OrderItem";
import { Container, Row } from "react-bootstrap";
import { authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const auth = useHookstate(authState).get();

    useEffect(async () => {
        const who = "";

        if (auth.tip === "user") {
            who = "user";
        } else {
            who = "landmark";
        }

        const res = await axios.get(
            "http://localhost:5000/orders/" + who + "/",
            {
                headers: {
                    Authorization: auth.jwt,
                },
            }
        );

        const ordersRe = res.data;
        setOrders(ordersRe);
    }, []);

    return (
        <Container>
            <Row className="my-4">
                {orders.map((order) => (
                    <OrderItem order={order} className="" />
                ))}
            </Row>
        </Container>
    );
};

export default OrderList;
