import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';  // Import Products page
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />  {/*Products route */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
