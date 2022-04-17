import React from 'react';
import Countries from './Countries';
import Filter from './Filter';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>World Tour || Home page</title>
      </Helmet>
      <>
        <Filter />
        <Countries />
      </>
    </>
  );
};

export default Home;
