import logo from "../../../assets/images/hero/logo.png";

const Navbar = () => {
  const cartItemCount = 5;
  return (
    <nav className="bg-customPrimary text-customPrimary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Adjusted height here */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-20" src={logo} alt="Logo" /> {/* Increased logo size */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">Home</a> {/* Increased text size */}
                <a href="#" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">Products</a> {/* Increased text size */}
                <a href="#" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">About Us</a> {/* Increased text size */}
                <a href="#" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">Contact Us</a> {/* Increased text size */}
                <a href="#" className="hover:bg-customAccent2 px-3 py-2 rounded-md text-lg font-medium">Product Management/Dashboard</a> {/* Increased text size */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-customAccent1 p-1 rounded-full text-customAccent1-foreground hover:text-customAccent2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customPrimary focus:ring-customAccent2">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18M15 3v18M9 15h6" />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  <button className="max-w-xs bg-customAccent1 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customPrimary focus:ring-customAccent2" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open cart</span>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18M15 3v18M9 15h6" />
                    </svg>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartItemCount}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-customAccent1-foreground hover:text-white hover:bg-customAccent2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customPrimary focus:ring-customAccent2">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">Home</a> {/* Increased text size */}
          <a href="#" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">Products</a> {/* Increased text size */}
          <a href="#" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">About Us</a> {/* Increased text size */}
          <a href="#" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">Contact Us</a> {/* Increased text size */}
          <a href="#" className="hover:bg-customAccent2 block px-3 py-2 rounded-md text-lg font-medium">Product Management/Dashboard</a> {/* Increased text size */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
