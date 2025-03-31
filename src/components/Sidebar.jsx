import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';  // Styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li><Link to="/products?category=men">Men</Link></li>
        <li><Link to="/products?category=women">Women</Link></li>
        <li><Link to="/products?category=kids">Kids</Link></li>
        <li><Link to="/products?category=accessories">Accessories</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
