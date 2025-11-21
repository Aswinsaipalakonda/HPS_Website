import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import contactCharacter from "@/assets/contact_card_image.png";
import careersImage from "@/assets/careers.png";
import LazyImage from "@/components/LazyImage";

const ContactCard = () => {
  const location = useLocation();
  
  // Dynamic content based on current page
  const getContent = () => {
    switch (location.pathname) {
      case "/services":
        return {
          heading: "Ready to Transform Your Business with Our Services?",
          description: "Explore our comprehensive range of digital solutions. From web development to digital marketing, app development to educational management systems, we have the expertise to help your business thrive.",
          buttonText: "Get Started Today",
          buttonLink: "/contact"
        };
      case "/portfolio":
        return {
          heading: "Want to See Your Project Featured Here?",
          description: "Let's create something amazing together. Our portfolio showcases the quality and innovation we bring to every project. Ready to start your next success story?",
          buttonText: "Start Your Project",
          buttonLink: "/contact"
        };
      case "/testimonials":
        return {
          heading: "Join Our Growing List of Satisfied Clients",
          description: "See what our clients say about working with us. Ready to become our next success story? Let's discuss how we can help transform your business.",
          buttonText: "Get Started Today",
          buttonLink: "/contact"
        };
      case "/web-design":
        return {
          heading: "Ready to Launch Your Perfect Website?",
          description: "Transform your online presence with our expert web design services. From concept to launch, we'll create a website that drives results and engages your audience.",
          buttonText: "Start Your Project",
          buttonLink: "/contact"
        };
      case "/careers":
        return {
          heading: "Don't See Your Role?",
          description: "We're always looking for talented individuals to join our team. Even if you don't see a position that matches your skills, we'd love to hear from you.",
          buttonText: "Send Us Your Resume",
          buttonLink: "/contact",
          image: careersImage
        };
      default:
        return {
          heading: "Ready to Transform Your Digital Presence?",
          description: "Let's discuss how our comprehensive digital solutions can help your business grow. From web design to custom software, we're here to turn your vision into reality.",
          buttonText: "Get Started Today",
          buttonLink: "/contact"
        };
    }
  };

  const content = getContent();

  return (
    // Added lg:mt-24 to create space at the top for the character's head to pop out without overlapping previous sections
    // Negative margin-bottom pulls the card into the footer for perfect overlap
    <section className="relative py-12 md:py-16 lg:mt-24 -mb-20 md:-mb-24 lg:-mb-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          
          {/* Main Card Container */}
          {/* overflow-visible is CRITICAL: It allows the head to stick out of the top of the gradient box */}
          <div className="relative bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 rounded-[2rem] overflow-visible shadow-2xl">
            
            <div className="flex flex-col lg:flex-row items-stretch relative">
              
              {/* Left Side - Content Panel */}
              {/* This div dictates the height of the gray card */}
              <div className="relative z-10 text-white p-8 md:p-12 lg:p-16 w-full lg:w-7/12 flex flex-col justify-center">
                
                {/* Main Heading */}
                <h2 
                  className="font-bold mb-4 leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  {content.heading}
                </h2>
                
                {/* Description */}
                <p 
                  className="text-xs md:text-sm text-white/90 mb-8 leading-relaxed max-w-xl" 
                  style={{fontWeight: 300}}
                >
                  {content.description}
                </p>

                {/* CTA Button */}
                <Link to={content.buttonLink}>
                  <Button 
                    className="bg-white text-gray-800 hover:bg-white/90 transition-all duration-300 rounded-full px-8 py-6 text-sm font-semibold group shadow-xl hover:shadow-2xl hover:scale-105 w-fit"
                  >
                    {content.buttonText}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>

              {/* Right Side - Character Image Wrapper */}
              {/* LAYOUT FIX: */}
              {/* On Desktop (lg): The image is absolute, pinned to the bottom right. */}
              {/* height-[145%] makes it taller than the card, forcing the head to pop out the top. */}
              <div className="relative w-full lg:w-5/12 flex items-end justify-center pointer-events-none">
                <LazyImage 
                  src={content.image || contactCharacter} 
                  alt={location.pathname === "/careers" ? "Careers" : "Contact Character"} 
                  noWrapper={true}
                  className="
                    w-auto 
                    object-contain 
                    
                    /* Mobile Styles: Sits normally inside the box */
                    h-64 
                    mx-auto
                    
                    /* Desktop Styles (The Pop-out Effect) */
                    lg:absolute 
                    lg:bottom-0 
                    lg:right-8 
                    lg:h-[145%] /* Taller than container = Pops out top */
                    lg:max-w-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;