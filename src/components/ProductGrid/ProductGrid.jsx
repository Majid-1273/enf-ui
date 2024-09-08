
const ProductGrid = ({ products }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold text-green-600">More Products</h3>
      <h4 className="text-lg text-gray-600 mb-4">XHEJIANG ERA SOLAR TECHNOLOGY</h4>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="border p-2 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
          >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-36 object-cover rounded-md mb-2" 
            />
            <h5 className="text-md font-medium text-center">{product.name}</h5>
            <p className="text-sm text-gray-600 text-center">{product.powerRange}</p>
            <p className="text-sm text-green-600 text-center">{product.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
