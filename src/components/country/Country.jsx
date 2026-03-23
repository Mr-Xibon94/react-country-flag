import React, { useState } from 'react';
import './Country.css'

const Country = ({country, visitedCountryHandler}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        visitedCountryHandler(country);
    }

    // console.log(country.flags.flags); 
    return (
        <div className={`country ${visited && 'countryVisited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>NAME: {country.name.common} </h3>
            <h4>Population: {country.population.population } </h4>
            <h4>Area: {country.area.area} ({country.area.area > 300000? "Big Country":"Small Country"}) </h4>

            <button onClick={handleVisited}  className='countryBtn'>{visited ? 'Visited':'Not Visited' }</button>
        </div>
        
    );
};

export default Country;