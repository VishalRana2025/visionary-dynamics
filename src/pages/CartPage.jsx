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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {item.name} ({item.service})
              </span>

              <span>₹{item.price}</span>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="mt-4 font-bold text-lg">Total: ₹{total}</h3>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}