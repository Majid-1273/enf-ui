
export default function DirectoryProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex space-x-4">
      <div className="w-1/4 bg-gray-200 rounded-md flex items-center justify-center">
        <span className="text-gray-500">Image</span>
      </div>

      <div className="w-3/4 flex flex-col justify-between">
        <div>
          <h5 className="text-green-600 font-bold">{product.company}</h5>
          <h4 className="text-gray-900 font-bold text-lg">{product.title}</h4>
          <div className="grid grid-cols-2 gap-y-1 mt-2 text-sm text-gray-600">
            <div className="font-medium">Type:</div>
            <div>{product.type}</div>

            <div className="font-medium">Power Range:</div>
            <div className="text-blue-600">{product.powerRange}</div>

            <div className="font-medium">Region:</div>
            <div>{product.region}</div>

            <div className="font-medium">Panel Efficiency:</div>
            <div>{product.panelEfficiency}</div>

            <div className="font-medium">Weight:</div>
            <div>{product.weight}</div>

            <div className="font-medium">Panel Dimension (H/W/D):</div>
            <div>{product.dimensions}</div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-900 font-semibold">
            From <span className="text-green-600">{product.price}</span>
          </div>
          <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
