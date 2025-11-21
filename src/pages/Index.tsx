import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WebDesignFeatures from "@/components/WebDesignFeatures";
import Testimonials from "@/components/Testimonials";
import OurClients from "@/components/OurClients";
import ContactCard from "@/components/ContactCard";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialSidebar />
      <FloatingContact />
      <Hero />
      <ScrollAnimation animation="fade-up" delay={0}>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={100}>
        <Process />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={200}>
        <WebDesignFeatures />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={100}>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={200}>
        <OurClients />
      </ScrollAnimation>
        <ContactCard />
      <Footer />
    </div>
  );
};

export default Index;
