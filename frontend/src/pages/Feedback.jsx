import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare, Star, CheckCircle, AlertCircle, Briefcase } from "lucide-react";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    message: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: "", message: "" }), 3000);
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      showNotification("error", "Please enter your name");
      return false;
    }
    if (!form.position.trim()) {
      showNotification("error", "Please enter your position");
      return false;
    }
    if (!form.message.trim()) {
      showNotification("error", "Please write your feedback");
      return false;
    }
    if (form.message.length < 10) {
      showNotification("error", "Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/testimonials", form);
      showNotification("success", "Thank you for your feedback! 🎉");
      setForm({ name: "", position: "", message: "", rating: 5 });
    } catch (err) {
      showNotification("error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const StarRating = () => {
    const [hoverRating, setHoverRating] = useState(0);
    
    return (
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          Rating
        </label>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setForm({ ...form, rating: star })}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 transition-all duration-200 ${
                  star <= (hoverRating || form.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </motion.button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-1">
          {form.rating === 5 && "🌟 Excellent!"}
          {form.rating === 4 && "👍 Very Good"}
          {form.rating === 3 && "😐 Good"}
          {form.rating === 2 && "😕 Below Average"}
          {form.rating === 1 && "😞 Poor"}
        </p>
      </div>
    );
  };

  // Position suggestions for quick selection
  const positionSuggestions = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Student",
    "Business Owner",
    "Marketing Specialist",
    "Data Scientist",
    "Other"
  ];

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg ${
              notification.type === "success" 
                ? "bg-green-500 text-white" 
                : "bg-red-500 text-white"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="font-medium">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-2xl mx-auto px-4">
        
        {/* Header */}
         {/* Header with Logo */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12 flex flex-col items-center"
>
  {/* Logo from public */}
  <img
    src="/VD-Logo.png"
    alt="Logo"
    className="w-60 h-60 object-contain mb-4 drop-shadow-lg"
  />

  <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
    Share Your Experience
  </h2>

  <div className="flex items-center justify-center gap-2 text-gray-500">
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-300"></div>
    <p className="text-lg">Your feedback helps us improve and grow 🚀</p>
    <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-300"></div>
  </div>
</motion.div>
        {/* Form Card */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8 space-y-6"
        >
          
          {/* Name Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <User className="w-4 h-4" />
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 outline-none
                ${focusedField === "name" 
                  ? "border-blue-500 shadow-lg ring-2 ring-blue-200" 
                  : "border-gray-200 hover:border-gray-300"
                }`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Position Input with Suggestions */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Briefcase className="w-4 h-4" />
              Position / Role
            </label>
            <input
              type="text"
              placeholder="e.g., Software Engineer, Student, Product Manager..."
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 outline-none
                ${focusedField === "position" 
                  ? "border-blue-500 shadow-lg ring-2 ring-blue-200" 
                  : "border-gray-200 hover:border-gray-300"
                }`}
              value={form.position}
              onChange={(e) => setForm({ ...form, position: e.target.value })}
              onFocus={() => setFocusedField("position")}
              onBlur={() => setFocusedField(null)}
            />
           
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <MessageSquare className="w-4 h-4" />
              Your Message
            </label>
            <textarea
              placeholder="Share your experience with us..."
              rows="4"
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 outline-none resize-none
                ${focusedField === "message" 
                  ? "border-blue-500 shadow-lg ring-2 ring-blue-200" 
                  : "border-gray-200 hover:border-gray-300"
                }`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
            <div className="text-right text-xs text-gray-400">
              {form.message.length}/500 characters
            </div>
          </div>

          {/* Star Rating */}
          <StarRating />

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
              shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group
              ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Feedback
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>

          {/* Trust Badge */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
              <CheckCircle className="w-3 h-3" />
              We value your privacy
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              No spam ever
            </p>
          </div>

        </motion.form>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}