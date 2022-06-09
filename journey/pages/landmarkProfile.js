import { server } from '../config'
import LandmarkProfile from '../components/LandmarkProfile'

export default function Landmarks({ landmark }) {
  return (
    <div>
        <LandmarkProfile landmark={landmark} />
    </div>
  )
}

// export const getStaticProps = async () => {
//     try {
//       const res = await axios.get(
//         `${server}/landmark/status`,
//           {
//               headers: {
//                   Authorization: `${req.headers.authorization}`,
//               },
//           }
//       );
//       const landmark = await res.json()
//       return {
//         props: {
//           landmark
//         },
//       }
//   } catch (error) {
//       return error;
//   }
  
// }