import React from 'react';
import Header from './Header';
import PerfProfiler from './PerfProfiler'

const Home = ({ children }) => {
  return (
    <div className="container">
      <PerfProfiler />
      <Header />
      {children}
    </div>
  );
};

export default Home;
