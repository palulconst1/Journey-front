import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { server } from '../config'
import { authState } from './_app';
import { Card, Col, Row } from "react-bootstrap";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const loginState = useHookstate(authState);

  // useEffect(async () => {
  //   	const response = await axios.post("http://localhost:5000/user/login", {
  //       email: "prezentare@gmail.com",
  //       password: "test1234"
  //     });

  //     console.warn(response.data);

  //     loginState.set({
  //       jwt: response.data.token,
  //       loggedIn: true
  //     });
  // }, []);

  return (
    <Row>
    <Col  />
    <Col xl = "4" >
   <Card className = "mt-4" >
    <h1 className='text-center my-4' >Welcome to Journey!</h1>
    <h5 className='text-center mb-4' >Secure, Fast and all you need</h5>
   </Card>
   </Col>
   <Col  />
   </Row>
  )
}

