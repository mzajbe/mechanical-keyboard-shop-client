import { useGetProductsQuery } from "@/redux/api/baseApi";
import MechanicalKeyboardCard from "./MechanicalKeyboardCard";

import { TProduct } from "@/types";

const MechanicalKeyboard = () => {
  const { data, isLoading } = useGetProductsQuery({});
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const { data: products } = data;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-wrap -m-4">
        {products.map((product: TProduct) => (
          <div key={product?._id} className="p-4 w-full sm:w-1/2 lg:w-1/4">
            <MechanicalKeyboardCard product={product}></MechanicalKeyboardCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MechanicalKeyboard;
