import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductList from "./ProductList";
import { PacmanLoader } from "react-spinners";

const Dashboard = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader size={50} color={"#52796f"} loading={isLoading} />
      </div>
    );
  }

  const { data: products } = data;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Management Dashboard</h1>

      <ProductList products={products} />
    </div>
  );
};

export default Dashboard;
