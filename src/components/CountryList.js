import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryList = (props) => {
  return (
    <li>
      <Link to={props.code}>{props.name}</Link>
    </li>
  );
};
export default CountryList;
