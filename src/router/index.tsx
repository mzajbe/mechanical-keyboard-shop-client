import MainLayouts from "@/components/Layouts/MainLayouts";
import BlogPage from "@/components/mechanicalKeyboard101/BlogPage";
import AboutUs from "@/pages/aboutUs/AboutUs";
import ProductsCart from "@/pages/cart/ProductsCart";
import CheckOutPage from "@/pages/checkOut/CheckOutPage";
import SuccessPage from "@/pages/checkOut/SuccessPage";
import ContactUs from "@/pages/contactUs/ContactUs";
import Dashboard from "@/pages/dashboardAndProductManagement/Dashboard";
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
        {
          path: "/cart", // Add this route
          element: <ProductsCart></ProductsCart>,
        },
        {
          path: "/checkout",
          element:<CheckOutPage></CheckOutPage>
        },
        {
          path:"/success",
          element:<SuccessPage></SuccessPage>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"/about",
          element:<AboutUs></AboutUs>
        },
        {
          path:"/contact",
          element:<ContactUs></ContactUs>
        },
        {
          path:"/blog/:id",
          element:<BlogPage></BlogPage>
        }

      ],
    },
  ]);

  export default router;