import { updateStock } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CheckOutPage = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'zajbe',
        email: 'zajbe@gmial.com',
        phone: '01643817731',
        address: 'dhaka',
        paymentMethod: 'Cash on Delivery',
      });

      const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userInfo.paymentMethod === 'Cash on Delivery') {
      // Update stock
      cartItems.forEach((item) => {
        dispatch(updateStock({ _id: item.product._id, quantity: item.quantity }));
      });

      // Redirect to success page
      navigate('/success');
    }
  };
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Delivery Address</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <select
              name="paymentMethod"
              value={userInfo.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              {/* You can add more payment methods here */}
            </select>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white ${
              cartItems.length > 0 ? 'bg-blue-600' : 'bg-gray-400'
            } rounded-md`}
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </form>
      </div>
    );
};

export default CheckOutPage;