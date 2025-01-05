import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FindRank from './pages/FindRank';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import CollegeInfo from './pages/CollegeInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college" element={<CollegeInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
