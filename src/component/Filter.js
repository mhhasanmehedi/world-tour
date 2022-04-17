import React, { useEffect } from 'react';

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    { name: 'Filter by region', desc: 'All' },
    { name: 'Africa', desc: 'Africa' },
    { name: 'Americas', desc: 'Americas' },
    { name: 'Asia', desc: 'Asia' },
    { name: 'Europe', desc: 'Europe' },
    { name: 'Oceania', desc: 'Oceania' },
  ];

  // prevent page reload when submitting the from
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  // filter by region
  const filterRegions = async (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);
    const data = await res.json();
    setCountries(data);
  };

  // useEffect(() => {
  //   filterRegions();
  // }, []);
  return (
    <>
      <form className='form' id='form' onSubmit={handleSubmit}>
        <input
          type='search'
          name='search'
          placeholder='Search for a country...'
          id='search'
          onChange={(e) => searchCountries(e.target.value)}
        />

        <div className='select'>
          <select
            id='select'
            name='select'
            value={regions.name}
            onChange={(e) => filterRegions(e.target.value)}
          >
            <option value='Filter by regoin'>Filter by region</option>
            <option value='Americas'>Americas</option>
            <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
