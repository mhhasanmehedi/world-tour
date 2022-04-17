import React from 'react';

const Header = () => {
  const toggleLightTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <>
      <header className='header'>
        <div>
          <h1>Where is the world?</h1>
        </div>
        <div>
          <i className='fas fa-moon' onClick={() => toggleLightTheme()}></i>
        </div>
      </header>
    </>
  );
};

export default Header;
