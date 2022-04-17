import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Country from './component/Country';
import Header from './component/Header';
import Home from './component/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/countries/:countryName'>
        <Country />
      </Route>
    </Router>
  );
};

export default App;
