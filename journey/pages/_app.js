import Layout from '../components/Layout'
import '../styles/globals.css'
import axios from "axios";
import { createState } from "@hookstate/core";
import { Persistence } from "@hookstate/persistence";
import { useRouter } from "next/router";
import { useEffect } from "react";

const globalState = createState([]);
const authState = createState({
    jwt: "",
    loggedIn: false,
    tip: "",
});

const userState  = createState({
  _id: "",
  firstName: "",
  lastName: "",
  verified: false,
  verifyCode: "",
  orders: [],
})

const landmarkState  = createState({
  _id: "",
  name: "",
  description: "",
  openHour: "",
  closeHour: "",
  tickets: [],
  orders: [],
  picture: [],
  city: "",
})

if (typeof window !== "undefined") {
  globalState.attach(Persistence("cart"));
  authState.attach(Persistence("auth"));
  userState.attach(Persistence("user"));
  landmarkState.attach(Persistence("landmark"));
}

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/status", {
        headers: {
          "Authorization": authState.get().jwt
        }
      });

      const user = response.data

      userState.set({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        verified: user.verified,
        verifyCode: user.verifyCode,
        orders: user.orders,
      })

    } catch (error) {
      console.warn("Not logged in");
    }

    try {
      const response = await axios.get("http://localhost:5000/landmark/status", {
        headers: {
          "Authorization": authState.get().jwt
        }
      });

      const landmark = response.data

      landmarkState.set({
        _id: landmark._id,
        name: landmark.name,
        description: landmark.description,
        openHour: landmark.openHour,
        closeHour: landmark.closeHour,
        tickets: landmark.tickets,
        orders: landmark.orders,
        picture: landmark.picture,
        city:landmark.city,
      })

    } catch (error) {
      console.warn("Not logged in");
    }
   
  }, []);

  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
export {authState, userState, landmarkState};
