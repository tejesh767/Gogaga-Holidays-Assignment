import {Route, Switch} from 'react-router-dom'

import Packages from './components/Packages'
import BookFlights from './components/BookFlights'
import BookHotels from './components/BookHotels'
import BookingSuccess from './components/BookingSuccess'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Packages} />
    <Route exact path="/bookFlights" component={BookFlights} />
    <Route exact path="/bookHotels" component={BookHotels} />
    <Route exact path="/confirmed" component={BookingSuccess} />
  </Switch>
)

export default App
