import axios from "axios";

const PaymentButton = () => {

  const handlePayment = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        productName: "Premium Plan",
        amount: 999,
      }
    );

    window.location.href = res.data.url;
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-2 bg-green-500 text-white rounded"
    >
      Pay ₹999
    </button>
  );
};

export default PaymentButton;