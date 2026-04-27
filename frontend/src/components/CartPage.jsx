import { useEffect, useState } from "react";
import { getCart } from "../utils/cart";
import { startPayment } from "../utils/payment";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, CreditCard, User, ArrowLeft, Shield, Truck, Clock } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
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

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("selectedCart", JSON.stringify(cart));
      alert("Please login to continue");
      navigate("/login");
    } else {
      setIsProcessing(true);
      try {
        await startPayment(cart);
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = total > 500 ? 0 : 40;
  const grandTotal = total + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100">
      {/* Hero Section */}
    <div className="relative overflow-hidden text-white">

  {/* 🔥 Background Image (URL) */}
  <div className="absolute inset-0">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/029/749/672/small_2x/illustration-of-shopping-cart-and-laptop-online-stores-concept-background-generative-ai-photo.jpeg"
      alt="background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* 🌑 Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

 

  {/* ✨ Content */}
  <div className="relative max-w-5xl mx-auto px-4 pt-24 pb-12">
    <div className="text-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
        <ShoppingBag className="w-4 h-4" />
        <span className="text-sm font-medium">Secure Checkout</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Complete Your <span className="text-yellow-300">Booking</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Review your services and proceed to secure payment. 
        Get instant confirmation and service guarantees.
      </p>

    </div>
  </div>

</div>

      {/* Cart Content */}
      <div className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Cart Header */}
                <div className="bg-white rounded-xl shadow-md p-4 mb-2">
                  <div className="grid grid-cols-3 text-sm font-semibold text-gray-600">
                    <span>Service Details</span>
                    <span className="text-center">Price</span>
                    <span className="text-right">Action</span>
                  </div>
                </div>
                
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-5 flex items-center gap-4">
                      {/* Item Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">✨</span>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.service}</p>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right">
                        <div className="font-bold text-gray-900 text-xl">
                          ${item.price}
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors mt-1 flex items-center gap-1 text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-xl p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    Order Summary
                  </h3>

                  <div className="space-y-3 border-b pb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${total}</span>
                    </div>
                   
                    {deliveryFee > 0 && total < 500 && (
                      <div className="text-xs text-orange-500 bg-orange-50 p-2 rounded-lg">
                        🚚 Add ${500 - total} more for free delivery
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-4 pb-4 border-b">
                    <span className="font-bold text-gray-800 text-lg">Total</span>
                    <span className="font-bold text-gray-900 text-2xl">${grandTotal}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <User className="w-5 h-5" />
                        Proceed to Checkout
                      </>
                    )}
                  </button>

                  
                  
                  {/* Trust Badges */}
                  <div className="mt-4 pt-4 border-t text-center">
                    <div className="flex justify-center gap-3 text-xs text-gray-500">
                      <span>✓ Money-back guarantee</span>
                      <span>✓ 24/7 support</span>
                      <span>✓ Instant booking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}