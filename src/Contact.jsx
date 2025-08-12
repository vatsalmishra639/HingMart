import React, { useState } from 'react';
import './Contact.css';
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ name: '', phone: '', message: '' });

    // Auto-close popup after 3 seconds (optional)
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h3 className="contact-title">Get In Touch</h3>
      <div className="contact-grid">
        <div className="contact-info">
          <p><FaUser /> Vatsal Mishra</p>
          <p><FaMapMarkerAlt /> Eta 2, Greater Noida, UP, India</p>
          <p><FaPhone /> +91-8126801478</p>
          <p><FaEnvelope /> vatsal.mishra@gmail.com</p>
          <p><FaClock /> Mon-Sat: 9AM-7PM</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit"><FaPaperPlane /> Send Message</button>
        </form>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content">
            <p>Thanks for connecting! We will contact you shortly.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
