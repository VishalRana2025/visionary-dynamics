import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Automation from "./pages/Automation";
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
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<OurLocation />} />
        <Route path="/industries" element={<IndustriesWeServes />} />
        <Route path="/Clients" element={<OurClients />} />
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
        <Route path="/automation" element={<Automation />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/datasecurity" element={<DataSecurityPolicy />} />
        <Route path="/intellectual" element={<IntellectualPolicy />} />
        <Route path="/complaint" element={<ComplaintPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/ms365" element={<MS365Management />} />
        <Route path="/mobile" element={<MobileDeviceManagement />} />
        <Route path="/network" element={<ManagedNetworkServices />} />
        {/* Fallback Route (Optional but recommended) */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
