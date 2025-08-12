// CartPopup.jsx
import React from 'react';
import { useCart } from './CartContext';
import './CartPopup.css';

const CartPopup = ({ onClose }) => {
  const { cartItems, totalAmount, removeFromCart } = useCart();

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="item-info">
                    <span>{item.title}</span>
                    <span>₹{item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>Total: ₹{totalAmount}</strong>
            </div>
            <button className="checkout-btn" onClick={onClose}>Checkout</button>
          </>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
