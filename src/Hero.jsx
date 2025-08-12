import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleOrderClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918126801478';  // Replace with your phone number
  };

  return (
    <section id="home" className="hero-section">
  <div className="particles-bg"></div> {/* Add this line */}

      <h2 className="hero-title">
        
        Premium Quality <span className="highlight">Hing</span>
      </h2>
      <p className="hero-subtitle">
        Authentic Asafoetida from Greater Noida — Pure, Organic, and Fresh.
      </p>
      <div className="hero-buttons">
        <button className="order-btn" onClick={handleOrderClick}>Order Now</button>
        <button className="call-btn" onClick={handleCallClick}>Call Us</button>
      </div>
    </section>
  );
};

export default Hero;
