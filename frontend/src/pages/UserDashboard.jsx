import { Navigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  User,
  Gift,
  History,
  LogOut,
  Menu,
  X,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Shield,
  CheckCircle,
  Clock,
  XCircle,
  Copy,
  Download,
  Eye,
  CreditCard,
  Award,
  Edit2,
  Save,
  X as XIcon,
} from "lucide-react";
import Header from "../components/Header"; // adjust path if needed

const UserPanel = () => {
  const [activePage, setActivePage] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [offers, setOffers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  
  // Image upload states
  const [coverImage, setCoverImage] = useState(() => {
    return localStorage.getItem("coverImage") || null;
  });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const API = import.meta.env.VITE_API_URL;
  // Edit form states
  const [editForm, setEditForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "+1",
  address: "",
  dob: "",
  state: "",
  country: "",
  postalCode: "",
  companyName: "",
  industry: "",
  designation: "",
  website: "",
  timezone: "",
  instagram: "",
  facebook: "",
  linkedin: "",
  twitter: "",
});

  // Default avatar options
const avatarLetter = `${(
  user?.firstName ||
  user?.name ||
  "U"
)
  .charAt(0)
  .toUpperCase()}${(user?.lastName || "")
  .charAt(0)
  .toUpperCase()}`;

const defaultAvatars = [
  `https://ui-avatars.com/api/?name=${avatarLetter}&background=8b5cf6&color=fff&size=120`,
  `https://ui-avatars.com/api/?name=${avatarLetter}&background=ec4899&color=fff&size=120`,
  `https://ui-avatars.com/api/?name=${avatarLetter}&background=06b6d4&color=fff&size=120`,
  `https://ui-avatars.com/api/?name=${avatarLetter}&background=f59e0b&color=fff&size=120`,
  `https://ui-avatars.com/api/?name=${avatarLetter}&background=10b981&color=fff&size=120`,
];

  // Get user from localStorage
 useEffect(() => {
  let loggedInUser = null;

try {
  const storedUser = localStorage.getItem("user");
  loggedInUser = storedUser ? JSON.parse(storedUser) : null;
} catch {
  loggedInUser = null;
}

  if (loggedInUser) {
    setUser(loggedInUser);
  }

  // ✅ Offers
const fetchOffers = async () => {
  try {
    const res = await axios.get(`${API}/api/offers`);
    console.log("OFFERS:", res.data);

    // FIX HERE 👇
    setOffers(Array.isArray(res.data) ? res.data : res.data.offers || []);
  } catch (error) {
    console.log("Error fetching offers", error);
    setOffers([]); // safety
  }
};

  
 // ✅ Payments
const fetchPayments = async () => {
  try {
    if (loggedInUser?._id) {
      const res = await axios.get(
        `${API}/api/payment/history/${loggedInUser._id}`
      );
      console.log("PAYMENTS:", res.data);

      // FIX HERE 👇
      setPayments(Array.isArray(res.data) ? res.data : res.data.payments || []);
    }
  } catch (error) {
    console.log("Error fetching payments", error);
    setPayments([]); // safety
  }
};

  fetchOffers();
  fetchPayments();
}, [API]);

  // Image upload handlers
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("❌ File size too large! Please upload an image less than 5MB.");
        return;
      }
      
      if (!file.type.startsWith("image/")) {
        alert("❌ Please upload an image file (JPEG, PNG, etc.)");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
        localStorage.setItem("coverImage", reader.result);
        alert("✅ Cover image updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("❌ File size too large! Please upload an image less than 2MB.");
        return;
      }
      
      if (!file.type.startsWith("image/")) {
        alert("❌ Please upload an image file (JPEG, PNG, etc.)");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("✅ Profile picture updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle default avatar selection
  const handleDefaultAvatar = (avatarUrl) => {
    setProfileImage(avatarUrl);
    const updatedUser = { ...user, avatar: avatarUrl };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("✅ Default avatar applied successfully!");
  };

  // Handle edit form changes
  const handleEditChange = (e) => {
  setEditForm({
    ...editForm,
    [e.target.name]: e.target.value,
  });
};

  const handleSaveProfile = () => {
  if (!editForm.companyName.trim()) {
    alert("❌ Company Name is required");
    return;
  }

  const updatedUser = {
    ...user,
    ...editForm,
  };

  setUser(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));
  setIsEditing(false);

  alert("✅ Profile updated successfully!");
};

  // Protect route
  if (user === null) {
  return <p className="text-white text-center mt-20">Loading...</p>;
}
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("coverImage");
    window.location.href = "/login";
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code ${code} copied to clipboard!`);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "text-green-400 bg-green-500/10";
      case "pending": return "text-yellow-400 bg-yellow-500/10";
      case "failed": return "text-red-400 bg-red-500/10";
      default: return "text-gray-400 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "completed": return <CheckCircle className="w-4 h-4" />;
      case "pending": return <Clock className="w-4 h-4" />;
      case "failed": return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  // Calculate totals
 // ✅ SAFE VERSION
const safePayments = Array.isArray(payments) ? payments : [];
const safeOffers = Array.isArray(offers) ? offers : [];

const totalSpent = safePayments.reduce(
  (sum, p) => sum + (p.status === "completed" ? p.amount : 0),
  0
);

const activeOffers = safeOffers.filter(o => o.status === "active").length;

const successfulPayments = safePayments.filter(
  p => p.status === "completed"
).length;

  return (
    <>

      <Header />

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex pt-16">
      {/* Sidebar */}
      {/* Sidebar */}
<div
  className={`${sidebarOpen ? "w-72" : "w-20"} bg-gray-900/95 backdrop-blur-sm border-r border-gray-700 transition-all duration-300 fixed top-16 h-[calc(100%-4rem)] z-20`}
>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-3 ${!sidebarOpen && "justify-center w-full"}`}>
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="text-white font-bold text-xl">User Portal</h1>
                  <p className="text-gray-400 text-xs">Member Dashboard</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white transition"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* User Info - Sidebar */}
          {sidebarOpen && (
            <div className="mb-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3">
                {profileImage || user.avatar ? (
  <img
    src={profileImage || user.avatar}
    alt="Avatar"
    className="w-12 h-12 rounded-full object-cover"
  />
) : (
  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
    {avatarLetter}
  </div>
)}
                <div>
                  <p className="text-white font-medium">{user.firstName || user.name || "User"} {user.lastName || ""}</p>
                  
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2">
            <button
              onClick={() => setActivePage("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activePage === "profile"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <User className="w-5 h-5" />
              {sidebarOpen && <span>My Profile</span>}
            </button>

            <button
              onClick={() => setActivePage("offers")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activePage === "offers"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Gift className="w-5 h-5" />
              {sidebarOpen && <span>Offers</span>}
            </button>

            <button
  onClick={() => setActivePage("support")}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
    activePage === "support"
      ? "bg-purple-600 text-white"
      : "text-gray-400 hover:bg-gray-800 hover:text-white"
  }`}
>
  <Shield className="w-5 h-5" />
  {sidebarOpen && <span>Help & Support</span>}
</button>

            <button
              onClick={() => setActivePage("payments")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activePage === "payments"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <History className="w-5 h-5" />
              {sidebarOpen && <span>Payment History</span>}
            </button>
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-0 right-0 px-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
  className={`
    ${sidebarOpen ? "ml-64" : "ml-20"}
    flex-1
    transition-all
    duration-300
    pl-4 md:pl-8
  `}
>
        {/* Top Bar */}
        <div className="bg-gray-900/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {activePage === "profile" && "My Profile"}
                  {activePage === "offers" && "Offers & Rewards"}
                  {activePage === "payments" && "Payment History"}
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  {activePage === "profile" && "Manage your personal information"}
                  {activePage === "offers" && "Exclusive offers just for you"}
                  {activePage === "payments" && "Track all your transactions"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-white text-sm font-medium">{user.firstName || user.name || "User"} {user.lastName || ""}</p>
                  
                </div>
                {profileImage || user.avatar ? (
  <img
    src={profileImage || user.avatar}
    alt="Profile"
    className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-800 object-cover"
  />
) : (
  <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-purple-600 flex items-center justify-center text-white text-sm font-bold">
    {avatarLetter}
  </div>
)}
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-6 md:px-10 py-6">
          
          {/* MY PROFILE PAGE */}
          {activePage === "profile" && (
  <div className="w-full px-2 md:px-4">
              <div className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                {/* Cover Image */}
                <div 
                  className="h-32 bg-gradient-to-r from-purple-600 to-pink-600 relative"
                  style={{
                    backgroundImage: coverImage ? `url(${coverImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <input
                    type="file"
                    ref={coverInputRef}
                    onChange={handleCoverChange}
                    accept="image/jpeg,image/png,image/jpg,image/webp"
                    className="hidden"
                  />
                 
                </div>
                
                {/* Profile Info */}
                <div className="px-8 pb-8 relative">
                  <div className="flex flex-col md:flex-row gap-6 -mt-16 mb-6">
                    <div className="relative">
{profileImage || user.avatar ? (
  <img
    src={profileImage || user.avatar}
    alt="Profile"
    className="w-32 h-32 rounded-full border-4 border-gray-800 bg-gray-800 object-cover"
  />
) : (
  <div className="w-32 h-32 rounded-full border-4 border-gray-800 bg-purple-600 flex items-center justify-center text-white text-5xl font-bold">
    {avatarLetter}
  </div>
)}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleProfileChange}
                        accept="image/jpeg,image/png,image/jpg,image/webp"
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current.click()}
                        className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/70 transition"
                      >
                        <Camera className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div className="flex-1 mt-12 md:mt-0">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white">
  {user.firstName || user.name || "User"} {user.lastName || ""}
</h2>
                        </div>
                        <button
                           onClick={() => {
  if (!isEditing) {
   setEditForm({
  firstName: user.firstName || "",
  lastName: user.lastName || "",
  email: user.email || "",
  phone: user.phone || "",
  countryCode: user.countryCode || "+1",
  address: user.address || "",
  dob: user.dob || "",
  state: user.state || "",
  country: user.country || "",
  postalCode: user.postalCode || "",
  companyName: user.companyName || "",
  industry: user.industry || "",
  designation: user.designation || "",
  website: user.website || "",
  timezone: user.timezone || "",
  instagram: user.instagram || "",
  facebook: user.facebook || "",
  linkedin: user.linkedin || "",
  twitter: user.twitter || "",
});
  }
  setIsEditing(!isEditing);
}}
                          className="-mt-16 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition"
                          >
                             {isEditing ? "Cancel" : "Edit Profile"}
                         </button>
                      </div>
                    </div>
                  </div>

                  {/* Default Avatar Selection */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-3">Choose default avatar:</p>
                    <div className="flex gap-3 flex-wrap">
                      {defaultAvatars.map((avatar, index) => (
                        <button
                          key={index}
                          onClick={() => handleDefaultAvatar(avatar)}
                          className={`w-12 h-12 rounded-full border-2 transition ${
                            profileImage === avatar || (!profileImage && user.avatar === avatar)
                              ? "border-purple-500 ring-2 ring-purple-500/50"
                              : "border-gray-600 hover:border-purple-400"
                          }`}
                        >
                          <img
                            src={avatar}
                            alt={`Default avatar ${index + 1}`}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                 
                 {/* Profile Details */}
{/* PROFILE INFORMATION SECTIONS */}
<div className="grid md:grid-cols-2 gap-6">

  {/* PRIMARY DETAILS */}
  <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 shadow-lg">
    
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-white">
        Primary Details
      </h3>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>

    <div className="grid grid-cols-2 gap-8">

      {/* First Name */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          First Name
        </p>

        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={editForm.firstName}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.firstName || "-"}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Last Name
        </p>

        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={editForm.lastName}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.lastName || "-"}
          </p>
        )}
      </div>

      {/* Gender */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Gender
        </p>

        {isEditing ? (
          <select
            name="gender"
            value={editForm.gender}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <p className="text-white text-lg font-medium">
            {user.gender || "-"}
          </p>
        )}
      </div>

      {/* DOB */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          DOB
        </p>

        {isEditing ? (
          <input
            type="date"
            name="dob"
            value={editForm.dob}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.dob || "-"}
          </p>
        )}
      </div>

    </div>
  </div>

  {/* CONTACT DETAILS */}
  <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 shadow-lg">

    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-white">
        Contact Details
      </h3>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>

    <div className="grid grid-cols-2 gap-8">

      {/* Email */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Work Email
        </p>

        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editForm.email}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium break-all">
            {user.email || "-"}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Mobile
        </p>

        {isEditing ? (
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={editForm.countryCode}
              onChange={handleEditChange}
              className="bg-gray-700 text-white rounded-lg px-3 h-11"
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={editForm.phone}
              onChange={handleEditChange}
              className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
            />
          </div>
        ) : (
          <p className="text-white text-lg font-medium">
            {user.phone || "-"}
          </p>
        )}
      </div>

    </div>
  </div>

  {/* COMPANY DETAILS */}
  <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 shadow-lg">

    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-white">
        Company Details
      </h3>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>

    <div className="grid grid-cols-2 gap-8">

      {/* Company Name */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Company Name
        </p>

        {isEditing ? (
          <input
            type="text"
            name="companyName"
            value={editForm.companyName}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.companyName || "-"}
          </p>
        )}
      </div>

      {/* Designation */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Designation
        </p>

        {isEditing ? (
          <input
            type="text"
            name="designation"
            value={editForm.designation}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.designation || "-"}
          </p>
        )}
      </div>

      {/* Industry */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Industry
        </p>

        {isEditing ? (
          <input
            type="text"
            name="industry"
            value={editForm.industry}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.industry || "-"}
          </p>
        )}
      </div>

      {/* Website */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Website
        </p>

        {isEditing ? (
          <input
            type="url"
            name="website"
            value={editForm.website}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <a
            href={user.website}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:underline text-lg font-medium break-all"
          >
            {user.website || "-"}
          </a>
        )}
      </div>

    </div>
  </div>

  {/* ADDRESS DETAILS */}
  <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 shadow-lg">

    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-white">
        Address Details
      </h3>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>

    <div className="grid grid-cols-2 gap-8">

      {/* Address */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Address
        </p>

        {isEditing ? (
          <input
            type="text"
            name="address"
            value={editForm.address}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.address || "-"}
          </p>
        )}
      </div>

      {/* State */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          State
        </p>

        {isEditing ? (
          <input
            type="text"
            name="state"
            value={editForm.state}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.state || "-"}
          </p>
        )}
      </div>

      {/* Country */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Country
        </p>

        {isEditing ? (
          <input
            type="text"
            name="country"
            value={editForm.country}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.country || "-"}
          </p>
        )}
      </div>

      {/* Postal Code */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Postal Code
        </p>

        {isEditing ? (
          <input
            type="text"
            name="postalCode"
            value={editForm.postalCode}
            onChange={handleEditChange}
            className="bg-gray-700 text-white rounded-lg px-3 h-11 w-full"
          />
        ) : (
          <p className="text-white text-lg font-medium">
            {user.postalCode || "-"}
          </p>
        )}
      </div>

    </div>
  </div>

</div>
                  {isEditing && (
                    <div className="mt-6 flex justify-end gap-3">
                      <button
                        onClick={handleSaveProfile}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Cards */}
              
            </div>
          )}

          {/* OFFERS PAGE */}
          {activePage === "offers" && (
            <div>
              {/* Stats Summary */}
              <div className="grid md:grid-cols-3 gap-5 mb-6">
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-5 border border-yellow-500/20">
                  <p className="text-gray-400 text-sm">Active Offers</p>
                  <p className="text-2xl font-bold text-white">{activeOffers}</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/20">
                  <p className="text-gray-400 text-sm">Total Savings</p>
                  
                </div>
               
              </div>

              {/* Offers Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
               {safeOffers.map((offer) => (
                  <div key={offer._id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                          <p className="text-gray-400 text-sm mt-1">{offer.description}</p>
                        </div>
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                          {offer.discount}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                        <div>
                          <p className="text-xs text-gray-400">Valid Until</p>
                          <p className="text-sm text-white">{new Date(offer.validUntil).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <div className="bg-gray-700 px-3 py-1.5 rounded-lg">
                            <code className="text-sm text-yellow-400">{offer.code}</code>
                          </div>
                          <button
                            onClick={() => copyToClipboard(offer.code)}
                            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                          >
                            <Copy className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAYMENT HISTORY PAGE */}
          {activePage === "payments" && (
            <div>
            
             {/* Subscription & Payment Method */}
<div className="grid md:grid-cols-2 gap-6 mb-6">

  {/* Active Subscription */}
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
    <div className="flex items-center gap-3 mb-4">
      <CreditCard className="w-6 h-6 text-purple-400" />
      <h3 className="text-xl font-semibold text-white">
        Active Subscription
      </h3>
    </div>

    <div className="space-y-3">
      <div>
        <p className="text-sm text-gray-400">Current Plan</p>
        <p className="text-white font-medium">
          {user?.subscriptionPlan || "No Active Plan"}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">Billing Status</p>
        <p className="text-green-400 font-medium">
          {user?.subscriptionPlan ? "Active" : "Inactive"}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">Renewal Date</p>
        <p className="text-white">
          {user?.renewalDate
            ? new Date(user.renewalDate).toLocaleDateString()
            : "N/A"}
        </p>
      </div>
    </div>
  </div>

  {/* Saved Payment Method */}
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
    <div className="flex items-center gap-3 mb-4">
      <Shield className="w-6 h-6 text-purple-400" />
      <h3 className="text-xl font-semibold text-white">
        Saved Payment Method
      </h3>
    </div>

    {user?.savedCard ? (
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-400">Card</p>
          <p className="text-white font-medium">
            **** **** **** {user.savedCard.last4}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Card Holder</p>
          <p className="text-white">
            {user.savedCard.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Expiry</p>
          <p className="text-white">
            {user.savedCard.expiry}
          </p>
        </div>
      </div>
    ) : (
      <div className="text-gray-400">
        No saved payment method
      </div>
    )}

    <button className="mt-5 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition">
      Save Payment Method
    </button>
  </div>

</div>

    

              {/* Transactions Table */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900/50 border-b border-gray-700">
                      <tr>
                        <th className="text-left p-4 text-gray-400 font-medium">Transaction ID</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Date</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Service</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Amount</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Method</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     {safePayments.map((payment) => (
                        <tr key={payment._id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition">
                          <td className="p-4">
                            <span className="text-sm font-mono text-gray-300">{payment._id}</span>
                          </td>
                          <td className="p-4 text-sm text-gray-300">
                            {new Date(payment.date).toLocaleDateString()}
                          </td>
                          <td className="p-4 text-sm text-white">{payment.description}</td>
                          <td className="p-4">
                            <span className="font-semibold text-white">${payment.amount.toLocaleString()}</span>
                          </td>
                          <td className="p-4 text-sm text-gray-300">{payment.method}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded ${getStatusColor(payment.status)}`}>
                              {getStatusIcon(payment.status)}
                              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                          </td>
                          <td className="p-4">
                            <button className="text-purple-400 hover:text-purple-300 transition">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Download Button */}
              
            </div>
          )}
        </div>



        {/* HELP & SUPPORT PAGE */}
{activePage === "support" && (
  <div className="max-w-4xl mx-auto">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Help & Support
      </h2>

      <div className="space-y-6">

        <div className="bg-gray-700/30 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-white mb-2">
            Email Support
          </h3>

          <p className="text-gray-400 mb-3">
            Reach out to our support team anytime.
          </p>

          <a
            href="mailto:connect@visionarydynamicsas.com"
            className="text-purple-400 hover:underline"
          >
            connect@visionarydynamicsas.com
          </a>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-white mb-2">
            Contact Number
          </h3>

          <p className="text-gray-400 mb-3">
            Available Monday - Friday
          </p>

          <p className="text-white">
          <li className="flex items-center gap-3">
  <Phone size={16} className="text-sky-400" />
  <a href="tel:+17275649476" className="hover:text-white">
   +1(727) 564-9476
  </a>
</li>
          </p>
        </div>

        {/* <div className="bg-gray-700/30 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-white mb-2">
            FAQ
          </h3>

          <p className="text-gray-400">
            Visit our FAQ section for quick answers to common questions.
          </p>
        </div> */}

      </div>
    </div>
  </div>
)}
      </div>
    </div>
    </>
  );
};

export default UserPanel;