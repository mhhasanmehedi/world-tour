import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import '../country.css';

const Country = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const country = await response.json();
      setCountry(country);
    };
    fetchCountryData();
  }, [countryName]);

  return (
    <>
      <>
        <Helmet>
          <title>World Tour || Details page</title>
        </Helmet>
        <section className='country'>
          <Link to='/' className='btn btn-light'>
            <i className='fas fa-arrow-left'></i>Back Home
          </Link>
          {country.map((c) => {
            const {
              name,
              ccn3,
              population,
              flags,
              region,
              subregion,
              capital,
              tld,
              borders,
            } = c;
            return (
              <article key={ccn3}>
                <div className='flag'>
                  {flags ? (
                    <img src={flags.png} alt={name.common} />
                  ) : (
                    'No image'
                  )}
                </div>

                <div className='country-details'>
                  <h2>{name.common}</h2>
                  <div className='country-details-top'>
                    <div>
                      <h5>{/* Native Name: <span>{nativeName}</span> */}</h5>
                      <h5>
                        Population: <span>{population.toLocaleString()}</span>
                      </h5>
                      <h5>
                        Region: <span>{region}</span>
                      </h5>
                      <h5>
                        Sub Region: <span>{subregion}</span>
                      </h5>
                      <h5>
                        Capital: <span>{capital}</span>
                      </h5>
                    </div>

                    <div>
                      <h5>
                        Top Level Domain: <span>{tld}</span>
                      </h5>
                      <h5>
                        {/* Languages: <span>{languages[0].name}</span> */}
                      </h5>
                      <h5>{/* Currencies: <span>{currencies}</span> */}</h5>
                    </div>
                  </div>

                  <div className='country-details-bottom'>
                    <h3>Border Countries:</h3>
                    {borders ? (
                      <ul>
                        {borders.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      'no border area'
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </>
    </>
  );
};

export default Country;
