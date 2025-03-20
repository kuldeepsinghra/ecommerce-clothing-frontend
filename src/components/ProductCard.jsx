const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img src={product.imageURL} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-500 font-bold mt-2">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  