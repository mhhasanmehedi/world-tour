import React, { useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState([false]);
  const toggleLightTheme = () => {
    document.body.classList.toggle('light-theme');
    setTheme(!theme);
  };

  return (
    <>
      <header className='header'>
        <div>
          <h1>Where is the world?</h1>
        </div>
        <div className='header-right' onClick={() => toggleLightTheme()}>
          {
            document.body.className === "light-theme" ? 
              <>
                <i className='fas fa-moon'></i>
                <span>Dark Mode</span>
              </>
              :
              <>
                <i class="fa-solid fa-sun"></i>
                <span>Light Mode</span>
              </>
          }
        </div>
      </header>
    </>
  );
};

export default Header;
