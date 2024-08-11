/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductsQuery({});
  const product: TProduct = data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { data: products } = data;
  // Find the product using the MongoDB _id
  const Product = products.find((product: TProduct) => product._id === id);

  if (!Product) {
    return <p>Product not found.</p>;
  }

  //   const product: TProduct = data;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
  <div className="flex flex-col md:flex-row gap-8">
    {/* Left Section: Image and Description */}
    <div className="w-full md:w-2/3">
      <img className="w-full h-auto object-cover rounded-lg mb-4" src={Product.image} alt={Product.title} />
      <h2 className="text-2xl font-semibold mb-2">{Product.title}</h2>
      <p className="text-gray-700">{Product.description}</p>
      {/* Add sections for product features, specifications, etc. */}
    </div>

    {/* Right Section: Product Details */}
    <div className="w-full md:w-1/3">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h1 className="text-5xl font-bold mb-2">{Product.title}</h1>
        <p className="text-gray-600">Brand: {Product.brand}</p>
        <p className="text-2xl font-bold">Price: ${Product.price}</p>
        <div className="flex items-center mb-2">
          <p className="text-gray-600 mr-2">Availability: </p>
          <span className={Product.availableQuantity > 0 ? 'text-green-500' : 'text-red-500'}>
            {Product.availableQuantity > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
          
        </div>
        <div className="flex items-center mb-4">
          <div className="text-yellow-500">
            {"★".repeat(Product.rating)}
            {"☆".repeat(5 - Product.rating)}
          </div>
          <span className="ml-2 text-gray-600">({Product.reviewsCount} reviews)</span>
        </div>
      </div>

      <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-3 px-6 rounded-full w-full">
        Add to Cart
      </button>
      {/* Add sections for other actions like "Buy Now", "Wish List", etc. */}
      
    
    </div>
    
  </div>
</div>


  );
};

export default ProductDetails;

// function useGetProductByIdQuery(id: string | undefined): { data: any; isLoading: any; } {
//     throw new Error("Function not implemented.");
// }
