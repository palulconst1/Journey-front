import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from "react-bootstrap";

const Nav = () => {

  const auth = useHookstate(authState);
  const [user, setUser] = useState(false);
  const [landmark, setLandmark] = useState(false);

  useEffect(() => {
    if(auth.get().tip == "user") {
      setUser(true)
    }
    else if(auth.get().tip == "landmark") {
      setLandmark(true)
    }
  }, [auth.get().tip])

  

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
        <li hidden = {!user && !landmark}>
          <Link href='/orders'>Comenzi</Link>
        </li>
        <li hidden = {!user} className="" >
          <Link href='/cart'>Cos</Link>
        </li>
        <li hidden = {!user && !landmark} style={{
          float: "right"
        }}  >
          <Button onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
    
            try {
                auth.set({
                    jwt: "",
                    loggedIn: false,
                    tip: "",
                });
    
                window.location.href = "/";
            } catch (error) {
                console.error(error)
            }
          }}>Logout</Button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
