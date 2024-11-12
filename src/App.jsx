import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Features />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
