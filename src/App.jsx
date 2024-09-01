import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Top from './components/Top';
import QuickContact from './components/QuickContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routers from './components/Routers';

function App() {
  return (
    <Router>
      <Top />
      <Navbar />
      <Routers />
      <QuickContact />
      <Footer />
    </Router>
  );
}

export default App;
