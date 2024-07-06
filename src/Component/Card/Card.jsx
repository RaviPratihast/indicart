const Card = () => {
  const product = {
    title: "Sample Product",
    price: "999",
    brand: "Sample Brand",
    product_details: "This is a sample product description.",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">₹{product.price}</p>
        <p className="text-gray-600 text-base">Brand: {product.brand}</p>
        <p className="text-gray-600 text-base mb-4">
          {product.product_details}
        </p>
        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
