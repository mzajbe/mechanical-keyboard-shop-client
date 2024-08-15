import { TProduct } from "@/types";
import { Link } from "react-router-dom";

const ProductsPagesCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col justify-between">
      
      <div className="p-4 bg-customAccent1 text-center">
        <h2 className="text-xl font-bold text-white">{product.title}</h2>
        <p className="text-white mt-1">{product.brand}</p>
      </div>
      
      
      <div className="relative">
        <img
          className="w-full h-56 object-cover object-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      
      <div className="p-4 flex flex-col items-center bg-gray-100">
        <div className="text-yellow-500 mb-2">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>
        <p className="text-gray-800 text-lg font-semibold mb-2">${product.price}</p>
        
        <Link to={`/product/${product._id}`}>
        <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          See Details
        </button>
      </Link>
      </div>
    </div>
    );
};

export default ProductsPagesCard;