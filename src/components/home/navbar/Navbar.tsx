import { Link } from "react-router-dom";
import logo from "../../../assets/images/hero/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  
  const cartItemCount = useSelector((state: RootState) =>
    
  state.cart.items.reduce((count, item) => count + item.quantity, 0)
  );
  return (
    <nav className="bg-customPrimary text-customPrimary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* logo  */}
            <div className="flex-shrink-0">
              <Link to="/">
              <img className="h-16 w-20" src={logo} alt="Logo" />
              </Link>
              
            </div>
            {/* logo end  */}
            {/* navbar items  */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">
                  Home
                </Link>
                <Link to="/products" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">
                  Products
                </Link>
                <Link to="/about" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">
                About Us
                </Link>
                <Link to="/contact" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">
                Contact Us
                </Link>
                <Link to="/dashboard" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">
                Dashboard
                </Link>
              </div>
            </div>
            {/* navbar items end  */}
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              
              <div className="relative ml-3">
                <Link
                  to="/cart"
                  className="max-w-xs  rounded-full flex items-center text-sm  "
                  id="user-menu"
                  aria-haspopup="true"
                >
                  
                  <FaCartArrowDown className="h-12 w-12 text-customAccent1">
                  <span className="sr-only">Open cart</span>
                  </FaCartArrowDown>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-customAccent1-foreground hover:text-white hover:bg-customAccent2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customPrimary focus:ring-customAccent2">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">
            Home
          </Link>
          <Link to="/products" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">
            Products
          </Link>
          <a href="/about" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">
            About Us
          </a>
          <a href="/contact" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">
            Contact Us
          </a>
          <a href="/dashboard" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
