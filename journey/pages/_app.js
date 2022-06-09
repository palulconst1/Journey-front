import Layout from '../components/Layout'
import '../styles/globals.css'
import axios from "axios";
// import { createState } from "@hookstate/core";
// import { Persistence } from "@hookstate/persistence";
import { useRouter } from "next/router";
import { useEffect } from "react";

// const globalState = createState([]);
// const authState = createState({
//     jwt: "",
//     user: {
//         id: -1,
//         username: "",
//         email: "",
//         confirmed: "",
//         createdAt: "",
//         updatedAt: "",
//         orders: []
//     },
// });

// const ticketState = createState([]);

// if (typeof window !== "undefined") {
//   globalState.attach(Persistence("cart"));
//   authState.attach(Persistence("auth"));
// }

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
