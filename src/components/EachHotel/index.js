import {withRouter} from 'react-router-dom'
import './index.css'

const EachHotel = props => {
  const {hotelData} = props
  const {name, Price, Location, url} = hotelData
  const bookFlightButton = () => {
    const {history} = props
    history.push('/confirmed')
  }
  return (
    <li className="eachItem">
      <div className="sideText">
        <p className="hotelName">Hotel : {name}</p>
        <p>location : {Location}</p>
        <p>price : {Price}</p>
        <button
          type="button"
          className="flightButton"
          onClick={bookFlightButton}
        >
          Book Now
        </button>
      </div>
      <img src={url} alt="" className="flightImg" />
    </li>
  )
}
export default withRouter(EachHotel)
