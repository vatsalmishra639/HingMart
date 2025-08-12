import React from 'react';
import Header from './header';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Cart from './Cart';
import { CartProvider } from './CartContext';





const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
        <ScrollTop />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;

