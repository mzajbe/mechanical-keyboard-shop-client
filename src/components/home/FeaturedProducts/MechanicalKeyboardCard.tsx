import { TProduct } from "@/types";
import { Link } from "react-router-dom";

const MechanicalKeyboardCard = ({ product }: { product: TProduct }) => {
  

  return (
    <div className="relative bg-customAccent1 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <img
          className="w-full h-64 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
          <div>
            <h2 className="text-white text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-300">Brand: {product.brand}</p>
            <p className="text-gray-300">Available Quantity: {product.availableQuantity}</p>
            <p className="text-gray-300">Price: ${product.price}</p>
            <div className="text-yellow-400 mt-2">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
          </div>
          
          <Link to="/products">
          <button className="mt-4 bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            See More
          </button>
          
          </Link>
        </div>
      </div>
  );
};

export default MechanicalKeyboardCard;
