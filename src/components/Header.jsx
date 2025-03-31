import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GraticsShop</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="search-cart">
        <input type="text" placeholder="Search products..." />
        <Link to="/cart" className="cart-icon">🛒</Link>
      </div>
    </header>
  );
};

export default Header;
