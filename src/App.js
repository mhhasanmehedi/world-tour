import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Countries from './component/Countries';
import Country from './component/Country';
import Header from './component/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Countries />}/>          
        <Route path='/countries/:countryName' element={<Country />}/>          
      </Routes>
    </Router>
  );
};

export default App;
