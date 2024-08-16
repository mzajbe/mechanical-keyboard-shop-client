import { useGetProductsQuery } from "@/redux/api/baseApi";
import MechanicalKeyboardCard from "./MechanicalKeyboardCard";
import { TProduct } from "@/types";

const MechanicalKeyboard = () => {
  const { data: products, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-wrap -m-4">
        {products?.data.slice(0, 4).map((product: TProduct) => ( 
          <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
            <MechanicalKeyboardCard key={product?._id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MechanicalKeyboard;
