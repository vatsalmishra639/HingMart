import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <h5>Vatsal's Premium Hing</h5>
      <p>Premium Quality Asafoetida from Greater Noida</p>
      <div className="footer-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <p>&copy; 2024 Vatsal's Premium Hing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;