import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductsPagesCard from "./ProductsPagesCard";
import { TProduct } from "@/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchBar from "@/components/searchBar/SearchBar";
import FilterWithPrice from "@/components/searchBar/FilterWithPrice";
import Sorting from "@/components/searchBar/Sorting";
import ClearFilter from "@/components/searchBar/ClearFilter";
import { PacmanLoader } from "react-spinners";

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { searchTerm, priceRange, sortOrder } = useSelector(
    (state: RootState) => state.filters
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader size={50} color={"#52796f"} loading={isLoading} />
      </div>
    );
  }

  if (isError) {
    return <p>Failed to load products. Please try again later.</p>;
  }

  const products: TProduct[] = data?.data || []; 
  const filteredProducts = products.filter(
      (product: TProduct) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product: TProduct) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )
    .sort((a: TProduct, b: TProduct) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-full">
     
      <div className=" w-1/4   ">
      <div className="mb-4   mt-4">
            <SearchBar/>
          </div>
      </div>

      <div className="flex flex-col md:flex-row space-x-4">
        <div className="md:w-1/4 space-y-4  mb-4 md:mb-0">
          <FilterWithPrice />
          <Sorting />
          <ClearFilter />
        </div>

        {/* Product List */}
        <div className="md:w-3/4 -mt-14">
          
          {filteredProducts.length > 0 ? (
            <div className="flex flex-wrap -m-4">
              {currentProducts.map((product: TProduct) => (
                <div key={product._id} className="p-4 w-full sm:w-1/2 lg:w-1/4">
                  <ProductsPagesCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-700">
              No products found matching your criteria.
            </p>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
