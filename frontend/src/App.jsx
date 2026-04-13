import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurLocation from "./pages/OurLocation";
import IndustriesWeServes from "./pages/IndustriesWeServes";
import OurClients from "./pages/OurClients";
import Accounting from "./pages/Accounting";
import BookKeeping from "./pages/BookKeeping";
import Payroll from "./pages/Payroll";
import FinancialAnalysics from "./pages/FinancialAnalysics";
import SoftwareMigration from "./pages/SoftwareMigration";
import Taxation from "./pages/Taxation";
import CooperativeTax from "./pages/CooperativeTax";
import IndividualTax from "./pages/IndividualTax";
import BusinessAnalytics from "./pages/BusinessAnalytics";
import WebDesign from "./pages/WebDesign";
import Seo from "./pages/Seo";
import Social from "./pages/Social";
import Email from "./pages/Email";
import LinkedIn from "./pages/LinkedIn";
import AI from "./pages/AI";
import ContactUs from "./pages/ContactUs";
import AccountingPricing from "./pages/AccountingPricing";
import CartPage from "./pages/CartPage";
import DevelopmentPricing from "./pages/DevelopmentPricing";
import MarketingPricing from "./pages/MarketingPricing";
import BlogPage from "./pages/BlogPage";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import ProcessPage from "./pages/ProcessPage";
import VirtualAssistance from "./pages/VirtualAssistance";
import RPO from "./pages/RPO";
import ScrollToTop from "./ScrollToTop";


// Policies
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsCondition";
import CookiePolicy from "./pages/CookiePolicy";
import DataSecurityPolicy from "./pages/DataSecurityPolicy";
import IntellectualPolicy from "./pages/IntellectualPolicy";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import Disclaimer from "./pages/Disclaimer";

// Services
import MS365Management from "./pages/MS365Management";
import MobileDeviceManagement from "./pages/MobileDeviceManagement";
import ManagedNetworkServices from "./pages/ManagedNetworkServices";
import Automation from "./pages/Automation";
import Cloud from "./pages/Cloud";

// Auth
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";

// Dashboards
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {

  // ✅ Get user safely
  const storedUser = localStorage.getItem("user");
  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

 

return (
  <div className="flex flex-col min-h-screen">
     <ScrollToTop />
    <Toaster position="top-right" />

    
    {/* ✅ MAIN CONTENT */}
    <main className="flex-grow">
      <Routes>

        {/* 🌐 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<OurLocation />} />
        <Route path="/industries" element={<IndustriesWeServes />} />
        <Route path="/clients" element={<OurClients />} />

        {/* 🔐 AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />

        {/* 💰 PRICING */}
        <Route path="/pricing" element={<Navigate to="/pricing/development" />} />
        <Route path="/pricing/development" element={<DevelopmentPricing />} />
        <Route path="/pricing/marketing" element={<MarketingPricing />} />
        <Route path="/pricing/accounting" element={<AccountingPricing />} />

        {/* 👤 USER */}
        <Route
          path="/dashboard"
          element={user ? <UserDashboard /> : <Navigate to="/login" />}
        />

        {/* 📝 BLOG */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditBlog />} />

        {/* 👑 ADMIN */}
        <Route
          path="/admin"
          element={
            user?.role === "admin"
              ? <AdminDashboard />
              : <Navigate to="/" />
          }
        />

        {/* 📄 OTHER */}
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/bookkeeping" element={<BookKeeping />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/financial" element={<FinancialAnalysics />} />
        <Route path="/software" element={<SoftwareMigration />} />
        <Route path="/taxation" element={<Taxation />} />
        <Route path="/cooperative" element={<CooperativeTax />} />
        <Route path="/individual" element={<IndividualTax />} />
        <Route path="/business" element={<BusinessAnalytics />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/social" element={<Social />} />
        <Route path="/email" element={<Email />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/process" element={<ProcessPage />} /> 
        <Route path="/virtualassistance" element={<VirtualAssistance />} />
        <Route path="/rpo" element={<RPO />} />

        {/* 📜 POLICIES */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/datasecurity" element={<DataSecurityPolicy />} />
        <Route path="/intellectual" element={<IntellectualPolicy />} />
        <Route path="/complaint" element={<ComplaintPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* ⚙️ SERVICES */}
        <Route path="/ms365" element={<MS365Management />} />
        <Route path="/mobile" element={<MobileDeviceManagement />} />
        <Route path="/network" element={<ManagedNetworkServices />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/cloud" element={<Cloud />} />

        {/* ❌ 404 */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center">
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />

      </Routes>
    </main>

  

  </div>
);
}