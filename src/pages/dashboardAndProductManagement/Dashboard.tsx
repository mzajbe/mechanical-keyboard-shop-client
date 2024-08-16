import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductList from "./ProductList";
import { PacmanLoader } from "react-spinners";

const Dashboard = () => {
  const { data: data, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader size={50} color={"#52796f"} loading={isLoading} />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Management Dashboard</h1>

      <ProductList products={data?.data} />
    </div>
  );
};

export default Dashboard;
