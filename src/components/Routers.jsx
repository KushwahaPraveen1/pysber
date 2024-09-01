import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
};

export default Routers;
