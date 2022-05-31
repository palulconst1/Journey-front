import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import TicketList from '../../../components/TicketList'

const landmark = ({ landmark, tickets }) => {

  return (
    <>
      <Meta title={landmark.name}/>
      <h1 className="mb-2">{landmark.name}</h1>
      <h5 className="mb-5">Program: {landmark.openHour} - {landmark.closeHour} </h5>
      <div className="card mx-5">
  <div className="card-body">
    <p className="card-text">{landmark.description}</p>
  </div>
</div>
      <TicketList tickets={tickets} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/landmark/${context.params.id}`)

  const landmark = await res.json()

  const res2 = await fetch(`${server}/tickets/${context.params.id}`)

  const tickets = await res2.json()

  return {
    props: {
      landmark,
      tickets,
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
