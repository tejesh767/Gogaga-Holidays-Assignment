// Write your code here
import {Component} from 'react'
import './index.css'
import EachHotel from '../EachHotel'

const HotelsList = [
  {
    name: 'Manjunatha',
    Price: '1600 /- Night',
    Location: 'Chennai',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
  {
    name: 'Heavens Stay',
    Price: '1900 /- Night',
    Location: 'Banglore',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
  {
    name: 'Olivia',
    Price: '5600 /- Night',
    Location: 'Delhi',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
  {
    name: 'Angelic',
    Price: '6600 /- Night',
    Location: 'Chennai',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
  {
    name: 'Homelyy',
    Price: '3500 /- Night',
    Location: 'Mumbai',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
  {
    name: 'Srasta',
    Price: '1000 /- Night',
    Location: 'Hyderabad',
    url:
      'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
  },
]

class BookHotels extends Component {
  state = {updatedList: HotelsList}

  onHotelInput = event => {
    const inputText = event.target.value
    const newList = HotelsList.filter(each =>
      each.name.toLowerCase().includes(inputText.toLowerCase()),
    )
    console.log(newList)
    this.setState({updatedList: newList})
  }

  render() {
    const {updatedList} = this.state
    return (
      <div className="HotelsContainer">
        <h1 className="HotelsName">Hotel Bookings</h1>
        <div className="HotelsHeader">
          <p className="HotelsPara">Book Your Flight</p>
          <input
            type="search"
            placeholder="Enter Your Hotel Name"
            className="HotelsSearch"
            onChange={this.onHotelInput}
          />
        </div>
        <ul className="Hotels-list">
          {updatedList.map(hotel => (
            <EachHotel hotelData={hotel} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BookHotels
