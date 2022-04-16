import React from 'react';

const Filter = () => {
  return (
    <>
      <form className='form' id='form'>
        <input
          type='search'
          name='search'
          placeholder='Search for a country...'
          id='search'
        />

        <div className='select'>
          <select id='select' name='select'>
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
