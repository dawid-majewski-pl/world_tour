import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecomendedCards from './components/RecomendedCards';
import Travels from './components/Travels';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <RecomendedCards />
     <Travels />
     <Footer />
    </div>
  );
}

export default App;
