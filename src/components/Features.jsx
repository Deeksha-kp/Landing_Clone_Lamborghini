import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h3>Key Features</h3>
      <div className="feature-card">
        <h4>Powerful Engine</h4>
        <p>Our cars are equipped with a V12 engine for an unmatched driving experience.</p>
      </div>
      <div className="feature-card">
        <h4>Exquisite Design</h4>
        <p>Designed with precision, every model exudes luxury and performance.</p>
      </div>
      <div className="feature-card">
        <h4>Advanced Technology</h4>
        <p>Enhanced with the latest automotive technology for seamless control.</p>
      </div>
    </section>
  );
};

export default Features;
