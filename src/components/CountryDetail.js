import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


function CountryDetail(props) {
  let country = countries.find((eachCountry) => {
    return eachCountry.cca3 === props.match.params.id;
  });

  function countryBorders() {
    let borders = country.borders.map((eachBorder) => {
      return <li><Link to={eachBorder}> {countryCode(eachBorder)}</Link></li>;
    });

    return borders;
  }

  function countryCode(border) {
    let borderName = countries.find((eachCountry) => {
      return eachCountry.cca3 === border;
    });

    return borderName.name.common;
  }

  console.log(props);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <li>Capital: {country.capital}</li>
        <li>
          Area: {country.area} km <sup>2</sup>{' '}
        </li>
        <li>Borders:{countryBorders()}</li>
      </div>
    </div>
  );
}

export default CountryDetail;
