import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebProcess from "@/components/WebProcess";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";

const WebDesign = () => {
  return (
    <>
      <Helmet>
        <title>Web Design - HPS</title>
        <meta name="description" content="HPS offers expert web design services to help you create a stunning and effective online presence. Learn more about our web design process and how we can help you." />
        <link rel="canonical" href="https://www.thehps.in/web-design" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <SocialSidebar />
        <FloatingContact />
        <WebProcess />
        
        <Footer />
      </div>
    </>
  );
};

export default WebDesign;

