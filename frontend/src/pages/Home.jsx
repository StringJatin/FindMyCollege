import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Colleges from '../components/Colleges';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <Featured/>
      <Colleges/>
      <Footer/>
    </div>
  );
}

export default Home;