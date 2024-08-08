import { TProduct } from "@/types";

const MechanicalKeyboardCard = ({ product }: { product: TProduct }) => {
  // console.log(Product);

  return (
    <div className="bg-customAccent1 flex items-center justify-center">
      <div className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-95">
        <img className="w-full" src={product.image} alt="Card Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">Brand: {product.brand}</p>
          <p className="text-gray-700 text-base">
            Available Quantity: {product.availableQuantity}
          </p>
          <p className="text-gray-700 text-base">Price: ${product.price}</p>
          <div className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* {product.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))} */}
        </div>
        <div className="px-6 pb-4">
          <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MechanicalKeyboardCard;
