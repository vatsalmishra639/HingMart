import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.title === product.title);
      if (existingItem) {
        return prevItems.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productTitle) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item =>
          item.title === productTitle
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); // remove if quantity becomes 0
    });
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from "₹150/50g" -> 150
      const priceMatch = item.price.match(/₹(\d+)/);
      const price = priceMatch ? parseInt(priceMatch[1], 10) : 0;
      return total + price * item.quantity;
    }, 0);
  };

  const toggleCartPopup = () => {
    setIsCartOpen(prev => !prev);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,  // ✅ Added here
      getTotalAmount,
      isCartOpen,
      toggleCartPopup,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
