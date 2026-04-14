import { useEffect, useState } from "react";
import { getCart } from "../utils/cart";
import { startPayment } from "../utils/payment";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = getCart();

    const updatedCart = storedCart.map((item, index) => ({
      ...item,
      id: item.id || `${item.name}-${item.service}-${index}-${Date.now()}`
    }));

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, []);

  const handleCheckout = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("selectedCart", JSON.stringify(cart));
      alert("Please login to continue");
      navigate("/login");
    } else {
      startPayment(cart);
    }
  };

  // ✅ REMOVE (STATE-BASED FIX)
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
   <div className="min-h-screen bg-gray-50 py-10 px-4">
  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">

    <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

    {cart.length === 0 ? (
      <p className="text-gray-500">No items in cart</p>
    ) : (
      <>
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex justify-between items-center border-b py-3"
          >
            <span className="font-medium text-gray-700">
              {item.name} ({item.service})
            </span>

            <span className="font-semibold text-gray-900">
              ₹{item.price}
            </span>

            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-lg font-bold">Total:</h3>
          <span className="text-xl font-bold text-blue-600">
            ₹{total}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Checkout
        </button>
      </>
    )}

  </div>
</div>
  );
}