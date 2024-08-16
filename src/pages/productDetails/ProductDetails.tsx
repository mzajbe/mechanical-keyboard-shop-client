/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/cartSlice";
import { TProduct } from "@/types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductsQuery({});
  const dispatch = useDispatch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const products: TProduct[] = data?.data || [];
  const product = products.find((product: TProduct) => product._id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = (product: TProduct) => {
    if (product.availableQuantity > 0) {
      dispatch(addToCart(product));
    } else {
      alert("Sorry, this product is out of stock.");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <img
            className="w-full h-auto object-cover rounded-lg mb-4"
            src={product.image}
            alt={product.title}
          />
          <p className="text-gray-700">{product.description}</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h1 className="text-5xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-2xl font-bold">Price: ${product.price}</p>
            <div className="flex items-center mb-2">
              <p className="text-gray-600 mr-2">Availability: </p>
              <span
                className={
                  product.availableQuantity > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {product.availableQuantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
              <p> ({product.availableQuantity} Product left)</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviewsCount} reviews)
              </span>
            </div>
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-3 px-6 rounded-full w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
