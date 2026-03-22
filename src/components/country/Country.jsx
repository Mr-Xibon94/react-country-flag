import React from 'react';

const Country = ({country}) => {

    // console.log(country.flags.flags); 
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>NAME: {country.name.common} </h3>
            <h4>Population: {country.population.population } </h4>
        </div>
    );
};

export default Country;