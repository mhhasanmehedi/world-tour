import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './component/Countries';
import Country from './component/Country';
import Filter from './component/Filter';
import Header from './component/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/'>
        <Filter />
        <Countries />
      </Route>
      <Route path='/countries/:countryName'>
        <Country />
      </Route>
    </Router>
  );
};

export default App;
