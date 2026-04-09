import Layout from "../components/Layout";
import ServicesOverview from "../components/ServicesOverview";
import QuickBooksAnnouncement from "../components/QuickBooksAnnouncement";
import ServicesShowcase from "../components/ServicesShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";


function Home() {
  return (
    <Layout>
      <ServicesOverview />
      <QuickBooksAnnouncement />
      <ServicesShowcase />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
}

export default Home;