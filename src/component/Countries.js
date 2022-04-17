import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  const removeCountry = (ccn3) => {
    const newCountry = countries.filter((country) => country.ccn3 !== ccn3);
    setCountries(newCountry);
  };

  return (
    <>
      <Filter
        filtered={filtered}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className='countries'>
          {countries.map((country) => {
            const { ccn3, name, capital, population, region, flags } = country;

            return (
              <article key={ccn3}>
                <div>
                  <div className='flag'>
                    <img src={flags.png} alt='{name}' />
                  </div>
                  <div className='details'>
                    <h3>{name.common}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                    <div className='buttons'>
                      <Link to={`/countries/${name}`} className='btn'>
                        Learn More..
                      </Link>
                      <button
                        className='btn'
                        onClick={() => removeCountry(ccn3)}
                      >
                        Remove Country
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <section className='countries'>
          {countries.map((country) => {
            const { ccn3, name, capital, population, region, flags } = country;

            return (
              <article key={ccn3}>
                <div>
                  <div className='flag'>
                    <img src={flags.png} alt='{name}' />
                  </div>
                  <div className='details'>
                    <h3>{name.common}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                    <div className='buttons'>
                      <Link to={`/countries/${name.common}`} className='btn'>
                        Learn More..
                      </Link>
                      <button
                        className='btn'
                        onClick={() => removeCountry(ccn3)}
                      >
                        Remove Country
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Countries;
