import { removeFromCart, updateQuantity } from "@/redux/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const ProductsCart = () => {
    const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  // Calculate total price
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.product.price * item.quantity,
  //   0
  // );

   // State to track if checkout is allowed
   const [checkoutEnabled, setCheckoutEnabled] = useState(true);

   useEffect(() => {
    const isOutOfStock = cartItems.some(
      (item) => item.quantity > item.product.availableQuantity
    );
    setCheckoutEnabled(!isOutOfStock);
  }, [cartItems]);



  const handleRemove = (_id: string) => {
    dispatch(removeFromCart(_id));
  };
  

  const handleQuantityChange = (_id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ _id, quantity }));
    }
  };
  const handleCheckout = () => {
    if (checkoutEnabled) {
      navigate("/checkout");
    }
  };
    return (
      <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product._id} className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="h-16 w-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.product.title}</h2>
                  <p className="text-lg text-gray-600">${item.product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  max={item.product.availableQuantity}
                  onChange={(e) => handleQuantityChange(item.product._id, parseInt(e.target.value))}
                  className="w-20 p-2 border border-gray-300 rounded-md text-center"
                />
                <button
                  onClick={() => handleRemove(item.product._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-bold">
              Total Price: ${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}
            </p>
            <button
              onClick={handleCheckout}
              disabled={!checkoutEnabled}
              className={`px-6 py-3 rounded-md text-white font-semibold ${checkoutEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
    );
};

export default ProductsCart;