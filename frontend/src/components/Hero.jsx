import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="bg-color custom-primary py-16 px-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Find your next college</h1>
        <p className="text-xl text-center mb-8">Search top colleges and universities across India</p>
        
        <SearchBar/>
        
      </div>
  )
}

export default Hero