
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Proposal from './components/Proposal';
import Rules from './components/Rules';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
//import ChiefGuest from './components/ChiefGuest';
import SponsorsPage from './components/SponsorsPage';

import SponsorsHome from './components/SponsorsHome';


function MainPage() {
  return (
    <>
  <Hero />
  <Proposal />
  <Rules />
  <SponsorsHome />
  <Register />
  <Contact />
  <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-graphite text-soft-white">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
