import { v4 as uuidv4 } from 'uuid'

function Recommendation({ recommendation }) {
  return (
    <div key="cxxx">
      <div>{recommendation.title}</div>
      <div>{recommendation.description}</div>
      <div>{recommendation.link}</div>
    </div>
  )
}

export default Recommendation
