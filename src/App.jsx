import { Routes, Route } from "react-router-dom";

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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsCondition";
import CookiePolicy from "./pages/CookiePolicy";
import DataSecurityPolicy from "./pages/DataSecurityPolicy";
import IntellectualPolicy from "./pages/IntellectualPolicy";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import Disclaimer from "./pages/Disclaimer";
import MS365Management from "./pages/MS365Management";
import MobileDeviceManagement from "./pages/MobileDeviceManagement";
import ManagedNetworkServices from "./pages/ManagedNetworkServices";
import Automation from "./pages/Automation";
import Cloud from "./pages/Cloud";
import AdminPage from "./pages/AdminPage";

// Auth Pages
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";


// Protected
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location" element={<OurLocation />} />
      <Route path="/industries" element={<IndustriesWeServes />} />
      <Route path="/clients" element={<OurClients />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔐 Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 🔐 Admin */}
      <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminPage />
    </AdminRoute>
  }
/>

      {/* Other Pages */}
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

      {/* Policies */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/datasecurity" element={<DataSecurityPolicy />} />
      <Route path="/intellectual" element={<IntellectualPolicy />} />
      <Route path="/complaint" element={<ComplaintPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />

      {/* Services */}
      <Route path="/ms365" element={<MS365Management />} />
      <Route path="/mobile" element={<MobileDeviceManagement />} />
      <Route path="/network" element={<ManagedNetworkServices />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/cloud" element={<Cloud />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>404 - Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}