import { useNavigate } from "react-router-dom";
import { startPayment } from "../utils/payment";

export default function MarketingPricingPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter Marketing",
      price: 499,
      features: [
        "Social Media Setup",
        "Basic SEO",
        "2 Campaigns / Month",
        "Email Support",
      ],
    },
    {
      name: "Growth Marketing",
      price: 999,
      popular: true,
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Paid Ads Setup",
        "Weekly Reports",
      ],
    },
    {
      name: "Advanced Marketing",
      price: 1999,
      features: [
        "Full Marketing Strategy",
        "Ads + Funnels",
        "Content Marketing",
        "Dedicated Manager",
      ],
    },
  ];

  const handleBuyNow = (plan) => {
    const token = localStorage.getItem("token");

    const item = {
      ...plan,
      service: "marketing",
      id: `marketing-${plan.name}-${Date.now()}`,
    };

    if (!token) {
      localStorage.setItem("selectedPlan", JSON.stringify(item));
      navigate("/login");
    } else {
      startPayment(item);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f")',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Grow Your Business with
            <span className="text-blue-400"> Smart Marketing</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Drive traffic, increase conversions, and scale your brand with our expert marketing solutions.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View Plans ↓
          </button>
        </div>
      </div>

      {/* 🔥 PRICING SECTION */}
      <div className="py-16 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            Marketing Pricing Plans
          </h2>
          <p className="text-gray-500 mt-3">
            Choose a plan that fits your growth goals
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h2 className="text-xl font-bold text-center text-slate-800">
                {plan.name}
              </h2>

              {/* Price */}
              <p className="text-4xl font-extrabold text-center mt-4 text-slate-900">
                ₹{plan.price}
              </p>
              <p className="text-center text-sm text-gray-500">per month</p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => handleBuyNow(plan)}
                className={`mt-8 w-full py-3 rounded-xl font-semibold text-white ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}