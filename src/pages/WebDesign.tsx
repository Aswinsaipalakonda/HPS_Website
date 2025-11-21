import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebProcess from "@/components/WebProcess";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";

const WebDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialSidebar />
      <FloatingContact />
      <WebProcess />
      
      <Footer />
    </div>
  );
};

export default WebDesign;

