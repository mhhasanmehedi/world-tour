import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './component/Countries';
import Country from './component/Country';
import Header from './component/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Countries />
        </Route>
        <Route path='/countries/:countryName'>
          <Country />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
