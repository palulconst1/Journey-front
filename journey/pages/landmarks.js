import { server } from '../config'
import LandmarkList from '../components/LandmarkList'

export default function Landmarks({ landmarks }) {
  return (
    <div>
        <LandmarkList landmarks={landmarks} />
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/landmarks`)
    const landmarks = await res.json()
  
    return {
      props: {
        landmarks,
      },
    }
  }