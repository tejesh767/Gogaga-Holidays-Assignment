import {withRouter} from 'react-router-dom'
import './index.css'

const EachFlight = props => {
  const {flightData} = props
  const {name, departure, From, To, url, price} = flightData
  const bookHotelButton = () => {
    const {history} = props
    history.push('/confirmed')
  }
  return (
    <li className="eachItem">
      <div className="sideText">
        <p className="flightName">Flight : {name}</p>
        <p className="">
          {From} - {To}
        </p>
        <p>departure : {departure}</p>
        <p>price : {price}</p>
        <button
          type="button"
          className="flightButton"
          onClick={bookHotelButton}
        >
          Book Now
        </button>
      </div>
      <img src={url} alt="" className="flightImg" />
    </li>
  )
}
export default withRouter(EachFlight)
