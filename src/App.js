import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;