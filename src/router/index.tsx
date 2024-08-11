import MainLayouts from "@/components/Layouts/MainLayouts";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import ProductsPage from "@/pages/productsPages/ProductsPage";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <ProductsPage></ProductsPage>,
        },
        {
          // Add a route for product details using the slug
          path: "/product/:id",
          element: <ProductDetails></ProductDetails>,
        },
      ],
    },
  ]);

  export default router;