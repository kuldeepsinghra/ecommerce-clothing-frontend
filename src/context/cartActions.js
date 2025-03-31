// Product ko cart mein add karne ka logic
export const addToCart = (cart, setCart, product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  //  Cart se product hatane ka logic
  export const removeFromCart = (cart, setCart, id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };
  
  //  Cart ko clear karne ka logic
  export const clearCart = (setCart) => {
    setCart([]);
  };
  