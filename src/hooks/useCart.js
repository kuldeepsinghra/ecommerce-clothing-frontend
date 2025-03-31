import { useContext } from 'react';
import CartContext from '../context/CartContext';   //Importing CartContext

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
