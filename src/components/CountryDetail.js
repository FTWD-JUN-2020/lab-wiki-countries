import React from 'react'
import countries from "../countries.json"




function CountryDetail(props) {

  let country = countries.find((eachCountry)=>{
    return eachCountry.cca3==props.match.params.id

  })
  
   console.log(props)
    return (
      <div>

      <h1>{country.name.common}</h1>

      </div>
    )
  
}

export default CountryDetail
