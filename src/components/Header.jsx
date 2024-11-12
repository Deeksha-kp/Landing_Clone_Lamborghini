// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust path as needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Lamborghini Logo" className="logo-image" />
        <h1 className="logo">Lamborghini</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
