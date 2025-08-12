import React from 'react';
import { FaLeaf, FaGem, FaStar, FaCartPlus } from 'react-icons/fa';
import { useCartContext } from './CartContext';
import './Products.css';

const productsData = [
  {
    icon: <FaLeaf className="product-icon" />,
    title: 'Pure Hing Powder',
    description: 'Finest quality powdered hing, perfect for daily cooking needs',
    price: '₹150',
    gradient: 'bg-gradient-yellow-orange'
  },
  {
    icon: <FaGem className="product-icon" />,
    title: 'Premium Hing Crystals',
    description: 'Pure crystalline form, ideal for authentic flavor',
    price: '₹300',
    gradient: 'bg-gradient-orange-red'
  },
  {
    icon: <FaStar className="product-icon" />,
    title: 'Organic Hing Block',
    description: 'Traditional block form, longest shelf life',
    price: '₹500',
    gradient: 'bg-gradient-green-blue'
  }
];

const Products = () => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-header">
          <h3 className="products-title">Our Premium Hing Products</h3>
          <p className="products-subtitle">Choose from our carefully curated selection</p>
        </div>
        <div className="products-grid">
          {productsData.map((product, index) => (
            <div className="product-card" key={index}>
              <div className={`product-image ${product.gradient}`}>
                {product.icon}
              </div>
              <div className="product-details">
                <h4 className="product-name">{product.title}</h4>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
