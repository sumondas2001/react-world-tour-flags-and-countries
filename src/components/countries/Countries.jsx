import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
     const [countries, setCountries] = useState([]);

     const [visitedCountries, setVisiyedCountrry] = useState([]);
     const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);

     const handelVisitedCountryFlags = (flags) => {
          const newVisitedCountryFlags = [...visitedCountriesFlags, flags]
          // console.log(flags)
          setVisitedCountriesFlags(newVisitedCountryFlags)

     }

     const handelVisitedCountry = (country) => {

          const newVisitedCountry = [...visitedCountries, country]
          setVisiyedCountrry(newVisitedCountry)

          // console.log(country)
          // console.log(newVisitedCountry)
          // setVisiyedCountrry(country)
     }
     useEffect(() => {
          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(data => setCountries(data))
     }, [])
     return (
          <div>
               <h2>Countries: {countries.length}</h2>
               <div>
                    <h4>Visited Countries</h4>
                    <ul>
                         {
                              visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                         }
                    </ul>
               </div>
               <div className="flag-container">
                    {
                         visitedCountriesFlags.map((flag, index) => <img key={index}
                              src={flag}></img>
                         )
                    }
               </div>
               <div className="country-grid">
                    {
                         countries.map(country => <Country handelVisitedCountry={handelVisitedCountry} handelVisitedCountryFlags={handelVisitedCountryFlags} key={countries.cca3} country={country}></Country>

                         )
                    }
               </div>
          </div>
     );
};

export default Countries;