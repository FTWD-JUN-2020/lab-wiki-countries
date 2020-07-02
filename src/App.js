import React, { Component } from 'react'
import countries from "./countries.json"
import CountryList from './components/CountryList'

class App extends Component {
  state = {
    countriesList: countries 
  }

  displayCountries = () => {
    return this.state.countriesList.map((country) => {
      return <CountryList  name={country.name.common} />
    })
  }

  render() {
    return (
      <div> {this.displayCountries()} </div>
    )
  }
}

export default App
