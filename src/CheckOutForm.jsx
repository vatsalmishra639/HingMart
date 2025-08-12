import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ totalAmount, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.address) {
      setSubmitted(true);
      // In real app, send order data to backend here.
    }
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-form-container">
        <button className="close-btn" onClick={onClose}>×</button>
        {!submitted ? (
          <>
            <h3 className="checkout-title">Checkout</h3>
            <p className="checkout-total">Total: ₹{totalAmount}</p>
            <form onSubmit={handleSubmit} className="checkout-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
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
                name="address"
                placeholder="Delivery Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-order-btn">Place Order</button>
            </form>
          </>
        ) : (
          <div className="thank-you">
            <h3>Thank You!</h3>
            <p>Your order has been received. We will contact you shortly.</p>
            <button onClick={onClose} className="submit-order-btn">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
