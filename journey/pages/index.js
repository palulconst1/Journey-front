import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { server } from '../config'
import { authState } from './_app';

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
    <div>
        Hi!
    </div>
  )
}

