import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries=countriesData.countries;
    // console.log(countries); 

    const visitedCountryHandler = (country) =>{
        console.log(country);
    }
    return (
        <div >
            <h1>Total Countries: {countries.length}</h1>
            <h4>Visited Countr: </h4>

            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} visitedCountryHandler ={visitedCountryHandler}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;