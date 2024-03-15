import './index.css'

const Packages = props => {
  const onBookingFlights = () => {
    console.log('clicked')
    const {history} = props
    history.push('/bookFlights')
  }

  const onBookingHotels = () => {
    console.log('clicked')
    const {history} = props
    history.push('/bookHotels')
  }

  return (
    <div className="container">
      <h1 className="header">HappyHolidays</h1>
      <div className="packagesContainer">
        <div className="packagesFirst">
          <div className="card">
            <div className="text">
              <p className="para">Paris Package</p>
              <p className="price">
                <span className="priceSpan">Price </span> : Rs 80000
              </p>
              <p className="persons">4 Persons</p>
              <button type="button" className="bookNowButton">
                Book Now
              </button>
            </div>
            <img
              src="https://cdn.tourradar.com/s3/serp/original/6263_TYfcq2l8.jpg"
              className="Photo"
              alt=""
            />
          </div>
          <div className="card">
            <div className="text">
              <p className="para">Italy Package</p>
              <p className="price">
                <span className="priceSpan">Price </span> : Rs 90000
              </p>
              <p className="persons">5 Persons</p>
              <button type="button" className="bookNowButton">
                Book Now
              </button>
            </div>
            <img
              src="https://i.ytimg.com/vi/6uJuDoKq5dc/maxresdefault.jpg"
              className="Photo"
              alt=""
            />
          </div>
        </div>
        <div className="packagesFirst">
          <div className="card">
            <div className="text">
              <p className="para">Chile Package</p>
              <p className="price">
                <span className="priceSpan">Price </span> : Rs 30000
              </p>
              <p className="persons">4 Persons</p>
              <button type="button" className="bookNowButton">
                Book Now
              </button>
            </div>
            <img
              src="  https://i.ytimg.com/vi/6uJuDoKq5dc/maxresdefault.jpg"
              className="Photo"
              alt=""
            />
          </div>
          <div className="card">
            <div className="text">
              <p className="para">Japan Package</p>
              <p className="price">
                <span className="priceSpan">Price </span> : Rs 60000
              </p>
              <p className="persons">1 Persons</p>
              <button type="button" className="bookNowButton">
                Book Now
              </button>
            </div>
            <img
              src="https://cdn.tourradar.com/s3/serp/original/6263_TYfcq2l8.jpg"
              className="Photo"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="bookingButton"
          onClick={onBookingFlights}
        >
          Book Flights
        </button>
        <button
          type="button"
          className="bookingButton"
          onClick={onBookingHotels}
        >
          Book Hotels
        </button>
      </div>
    </div>
  )
}
export default Packages
