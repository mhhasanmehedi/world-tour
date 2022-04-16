import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${countryName}`
      );
      const country = await response.json();
      setCountry(country);
    };
    fetchCountryData();
  }, [countryName]);

  return (
    <>
      <Link to='/' className='btn btn-light'>
        <i className='fas fa-arrow-left'></i>Back Home
      </Link>
      <section className='country'>
        {country.map((c) => {
          const {
            name,
            nemericCode,
            nativeName,
            population,
            flag,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c;
          return (
            <article key={nemericCode}>
              <div className='flag'>
                <img src={flag} alt={name} />
              </div>

              <div className='country-details'>
                <h2>{name}</h2>
                <div>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
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
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies[0].name}</span>
                  </h5>
                </div>
              </div>

              <div>
                <h3>
                  Border Countries:
                  {borders.map((b) => (
                    <button>{b}</button>
                  ))}
                </h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
