import './App.css';
import Contact from './Contact';
import Formule from './Formule';
import Home from './Home';
import Presence from './Presence';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Formule />
     <Presence /> 
     <Contact />
     <Footer />  
    </div>
  );
}

export default App;
