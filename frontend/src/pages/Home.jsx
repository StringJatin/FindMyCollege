import React from 'react';
import Navbar from '../components/Navbar';
import Colleges from '../components/Colleges';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedColleges from '../components/FeaturedColleges';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero/>
      <FeaturedColleges/>
      <Colleges/>
      <Footer/>
    </div>
  );
}

export default Home;