
import React from 'react';
import { FaShoppingCart, FaLeaf } from 'react-icons/fa';
import { useCartContext } from './CartContext';
import './Header.css';

const Header = () => {
  const { cartItems, getTotalAmount, toggleCartPopup } = useCartContext();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = getTotalAmount();

  return (
    <header className="header">
      <div className="header-logo">
        <FaLeaf size={28} color="#d97706" />
        <span className="header-title">Hing Store</span>
      </div>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="cart-icon" onClick={toggleCartPopup}>
        <FaShoppingCart size={24} />
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        {itemCount > 0 && <span className="cart-total">₹{totalAmount}</span>}
      </div>
    </header>
  );
};

export default Header;
