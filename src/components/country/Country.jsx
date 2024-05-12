import { useState } from 'react';
import './Country.css'

const Country = ({ country, handelVisitedCountry, handelVisitedCountryFlags }) => {
     // console.log(handelVisitedCountry)
     const { name, flags, capital, region } = country;
     const [visited, setVisiyed] = useState(false);
     function handelCountry() {
          setVisiyed(!visited)
     }

     return (
          <div className={`box ${visited ? 'visited' : 'notVisited'}`}>
               <h2>Country Name : {name.common}</h2>
               <h3>capital: {capital}</h3>
               <h3>region: {region}</h3>
               <h3>official Name: {name.official}</h3>
               <img style={{ marginBottom: '15px' }} src={flags.png} alt="" />
               <button onClick={() => handelVisitedCountry(country)}>Mark Visited </button>
               <button style={{ margin: '10px' }} onClick={() => handelVisitedCountryFlags(country.flags.png)}>Visied Flag</button>
               <button onClick={handelCountry}>{visited ? 'Visited' : 'Go'}</button> <br /><br />
               {visited ? "is visit" : "I want to go "}

          </div>
     );
};


export default Country;