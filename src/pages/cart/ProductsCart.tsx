import { removeFromCart, updateQuantity } from "@/redux/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


const ProductsCart = () => {
    const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart(_id));
  };

  const handleQuantityChange = (_id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ _id, quantity }));
    }
  };
    return (
      <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map(({ product, quantity }) => (
          <div key={product._id} className="flex items-center justify-between border-b border-gray-200 py-4">
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-16 w-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-lg text-gray-600">${product.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-md text-center"
              />
              <button
                onClick={() => handleRemove(product._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    );
};

export default ProductsCart;