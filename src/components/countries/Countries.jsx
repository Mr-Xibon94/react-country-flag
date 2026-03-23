import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries); 

    const [visitedCountries, setVisitedCountry] = useState([]);
    const [countryFlags, setCountryFlags] = useState ([])

    const visitedCountryHandler = (country) => {
        const visitedCountry = [...visitedCountries, country];
        setVisitedCountry(visitedCountry);
    }

    const countryFlagsHandler = (flags) => {
        // console.log('add flag button is clicked', flags);
        const totalVisitedFlags = [...countryFlags,flags];
        setCountryFlags(totalVisitedFlags);
    }
    return (
        <div >
            <h1>Total Countries: {countries.length}</h1>
            <h4>Visited Country: {visitedCountries.length} </h4>
            <h3>Total country flags added: {countryFlags.length} </h3>
            <ol>
                {
                    visitedCountries.map(eachVisitedCountry => <li key={eachVisitedCountry.cca3.cca3}>{eachVisitedCountry.name.common} </li>)
                }

            </ol>

            <div className='visitedFlags'>
                {
                    countryFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} visitedCountryHandler={visitedCountryHandler} countryFlagsHandler={countryFlagsHandler}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;