import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const landmark = ({ landmark }) => {

  return (
    <>
      <Meta title={landmark.name}/>
      <h1>{landmark.name}</h1>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/landmark/${context.params.id}`)

  const landmark = await res.json()

  return {
    props: {
      landmark,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/landmarks`)

  const landmarks = await res.json()

  const ids = landmarks.map((landmark) => landmark.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default landmark
