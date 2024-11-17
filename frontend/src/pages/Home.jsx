import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Colleges from '../components/Colleges';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex-col justify-between'>
      <Navbar/>
      <Featured/>
      <Colleges/>
      <Footer/>
    </div>
  );
}

export default Home;