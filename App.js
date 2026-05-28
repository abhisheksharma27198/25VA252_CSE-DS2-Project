import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [cartCount, setCartCount] = useState(0); // Cart ka number (Exp 8 Concept)
  const [searchTerm, setSearchTerm] = useState(''); // Search box ka text (Exp 9 Concept)

  const products = [
    { id: 1, title: "Gaming Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" },
    { id: 2, title: "Smart Watch", price: 4500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
    { id: 3, title: "Running Shoes", price: 1800, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" },
    { id: 4, title: "Wireless Mouse", price: 1200, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=200" },
    { id: 5, title: "DSLR Camera", price: 42000, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200" }
  ];

  
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="amazon-clone">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🛒 amazon.in</div>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Typing filter (Exp 9)
          />
        </div>
        <div className="cart">
          <span>🛒 Cart: <b>{cartCount}</b></span>
        </div>
      </nav>

      
      <div className="banner">
        <h1>Great Indian Festival 🌟</h1>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">₹{product.price}</p>
            <button className="add-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
