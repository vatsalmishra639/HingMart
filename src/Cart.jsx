import React, { useState } from 'react';
import { useCartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    getTotalAmount,
    isCartOpen,
    toggleCartPopup,
    clearCart,
    removeFromCart,
  } = useCartContext();

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0); // ✅ New state

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setShowPaymentOptions(true); // ✅ Show payment options
  };

  const handlePaymentConfirm = () => {
    const finalAmount = getTotalAmount(); // ✅ Save amount before clearing
    setPaidAmount(finalAmount); // ✅ Store paid amount
    setOrderPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    setOrderPlaced(false);
    setFormData({ name: '', phone: '', address: '' });
    setShowCheckout(false);
    setShowPaymentOptions(false);
    setPaymentMethod('');
    toggleCartPopup();
  };

  if (!isCartOpen) return null;

  const totalAmount = getTotalAmount(); // Called here for live total display

  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={toggleCartPopup}>X</button>

        {orderPlaced ? (
          <div className="payment-success">
            <h4>Order Confirmed!</h4>
            <p>Thank you, {formData.name}! Your order of ₹{paidAmount} has been placed.</p>
            <p>Payment Method: <strong>{paymentMethod}</strong></p>
            <button onClick={handleClose} className="submit-btn">Close</button>
          </div>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  {item.title} x {item.quantity} = ₹
                  {parseInt(item.price.replace(/[₹\/a-zA-Z]/g, '')) * item.quantity}
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.title)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ₹{totalAmount}</p>

            {!showCheckout ? (
              <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
                Proceed to Checkout
              </button>
            ) : !showPaymentOptions ? (
              <form className="checkout-form" onSubmit={handleCheckout}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">Submit Order</button>
              </form>
            ) : (
              <div className="payment-options">
                <h4>Select Payment Method:</h4>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  /> Cash on Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  /> UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  /> Card
                </label>
                <button
                  className="submit-btn"
                  onClick={handlePaymentConfirm}
                  disabled={!paymentMethod}
                >
                  Confirm Payment
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
