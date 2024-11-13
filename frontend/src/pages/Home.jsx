import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='flex-col justify-between'>
      <Navbar/>
      <Card/>
    </div>
  );
}

export default Home;