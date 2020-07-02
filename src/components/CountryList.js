import React from 'react'
import {Link} from 'react-router-dom'

const CountryList = (props) => {
    return (
        <li><Link to='/'>{props.name}</Link></li>
    )
}
export default CountryList