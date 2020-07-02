import React, { Component } from 'react';
import countries from './countries.json';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    countriesList: countries,
  };

  displayCountries = () => {
    return this.state.countriesList.map((country) => {
      return <CountryList code={country.cca3} name={country.name.common} />;
    });
  };

  render() {
    return (
      <div>
        {this.displayCountries()}
        <Switch>
          <Route path="/:id" render={(props) => <CountryDetail {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
