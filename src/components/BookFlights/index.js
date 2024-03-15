// Write your code here
import {Component} from 'react'
import './index.css'
import EachFlight from '../EachFlight'

const flightsList = [
  {
    name: 'Vistara',
    departure: '5:30 PM',
    From: 'Chennai',
    price: '20000',
    To: 'Banglore',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
  {
    name: 'KingFisher',
    departure: '6:30 PM',
    price: '30000',
    From: 'Banglore',
    To: 'Chennai',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
  {
    name: 'Olivia',
    departure: '7:30 PM',
    From: 'Pune',
    price: '25000',
    To: 'Chennai',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
  {
    name: 'Angel',
    departure: '7:30 PM',
    From: 'Chennai',
    price: '80000',
    To: 'Mumbai',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
  {
    name: 'Indigo',
    departure: '9:30 PM',
    From: 'Mumbai',
    price: '20000',
    To: 'Chennai',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
  {
    name: 'Srasta',
    departure: '1:30 AM',
    From: 'Gujarat',
    price: '70000',
    To: 'Chennai',
    url: 'https://wallpaperaccess.com/full/1264507.jpg',
  },
]

class BookFlights extends Component {
  state = {updatedList: flightsList}

  onInput = event => {
    const inputText = event.target.value
    const newList = flightsList.filter(each =>
      each.name.toLowerCase().includes(inputText.toLowerCase()),
    )
    console.log(newList)
    this.setState({updatedList: newList})
  }

  render() {
    const {updatedList} = this.state
    return (
      <div className="flightsContainer">
        <h1 className="flightsName">Flight Bookings</h1>
        <div className="flightsHeader">
          <p className="flightsPara">Book Your Flight</p>
          <input
            type="search"
            placeholder="Enter Your Flight Name"
            className="flightSearch"
            onChange={this.onInput}
          />
        </div>
        <ul className="flights-list">
          {updatedList.map(flight => (
            <EachFlight flightData={flight} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BookFlights
