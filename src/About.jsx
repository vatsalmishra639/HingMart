// About.jsx
import React from 'react';
import './About.css';
import { FaAward, FaLeaf, FaShippingFast } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h3 className="about-title">About Vatsal Mishra</h3>
      <p className="about-description">With years of experience in the spice industry, Vatsal Mishra brings you the finest quality hing from Greater Noida.</p>
      <div className="about-grid">
        <div className="about-card">
          <FaAward className="about-icon" />
          <h4>Premium Quality</h4>
          <p>Pure hing with authentic aroma and taste.</p>
        </div>
        <div className="about-card">
          <FaLeaf className="about-icon" />
          <h4>100% Natural</h4>
          <p>Organic and natural hing without additives.</p>
        </div>
        <div className="about-card">
          <FaShippingFast className="about-icon" />
          <h4>Fast Delivery</h4>
          <p>Quick and reliable delivery service.</p>
        </div>
      </div>
    </section>
  );
};

export default About;