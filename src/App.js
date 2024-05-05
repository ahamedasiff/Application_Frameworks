import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Screens/Home';
import AstronomyPOD from './Screens/AstronomyPOD';
import MarsRoverImages from './Screens/MarsRoverImages';
import NasaImages from './Screens/NasaImages';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/apod" element={<AstronomyPOD />} />
        <Route path="/mars" element={<MarsRoverImages />} />
        <Route path="/nasa" element={<NasaImages />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
