import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { useEffect, useState } from "react";


const Nav = () => {

  const auth = useHookstate(authState).get();
  const [user, setUser] = useState(false);
  const [landmark, setLandmark] = useState(false);

  useEffect(() => {
    if(auth.tip == "user") {
      setUser(true)
    }
    else if(auth.tip == "landmark") {
      setLandmark(true)
    }
  }, [auth.tip])

  

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/landmarks'>Landmarks</Link>
        </li>
        <li hidden = {!landmark}>
          <Link href='/landmarkProfile'>Profile</Link>
        </li>
        <li hidden = {!user}>
          <Link href='/userProfile'>Profile</Link>
        </li>
        <li>
          <Link href='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
