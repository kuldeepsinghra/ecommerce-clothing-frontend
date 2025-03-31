import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useCart from '../hooks/useCart';    //Importing new hook
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();   //Cart hook usage
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://ecommerce-clothing-backend.onrender.com/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-details">
      {product ? (
        <>
          <img src={product.imageURL} alt={product.name} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button className="btn" onClick={() => addToCart(product)}>  {/*Add to Cart */}
            Add to Cart
          </button>
        </>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductDetails;
