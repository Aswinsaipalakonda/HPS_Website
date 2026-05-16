import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, User } from "lucide-react";
import SocialSidebar from "@/components/SocialSidebar";
import ContactCard from "@/components/ContactCard";
import FloatingContact from "@/components/FloatingContact";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. R. Ramana Reddy",
    role: "OIH, JNTUACEK",
    image: "/testimonials/rama.jpeg",
    rating: 5,
    title: "End-to-End Campus Automation",
    text: "HPS delivered a seamless and integrated College Suite Software that enhanced our hostel automation, fee management, and student information processes. Their work greatly improved our administrative efficiency and overall campus management.",
  },
  {
    name: "Jitendra Kumar",
    role: "CEO, Beauty Centre",
    image: "/testimonials/manmade.png",
    rating: 5,
    title: "Exceptional Digital Growth & Brand Elevation",
    text: "HPS transformed our online presence with a modern and professional website that perfectly showcases our salon furniture and beauty equipment. Their design and branding support helped us reach more customers and present our business with greater credibility.",
  },
  {
    name: "Trinadh",
    role: "CEO & Founder, OpenCT",
    company: "OpenCT",
    image: "/testimonials/openct.jpeg",
    rating: 5,
    title: "Complete Digital Transformation",
    text: "The OpenCT app beautifully blends technology with empathy. Your thoughtful design and seamless functionality created a platform where users truly feel supported and connected. The focus on user experience and accessibility made a meaningful impact on bringing our mental wellness vision to life.",
  },
  {
    name: "Dr.Sarat Kumar Sahu",
    role: "",
    company: "Suryan Energy Systems",
    image: "/testimonials/Suryan Energy System.jpeg",
    rating: 5,
    title: "Enhanced Digital Presence",
    text: "HPS transformed our digital presence with a modern, professional website that clearly showcases our solar installation services and sustainable energy solutions. Their clean design, smooth user experience, and attention to detail have strengthened our credibility and helped customers understand our offerings more effectively.",
  },
  {
    name: "Marcus Obubonojo",
    role: "Founder & CEO, MotionShield",
    company: "MotionShield",
    image: "/testimonials/marcus.png",
    rating: 5,
    title: "Strategic Partnership Excellence",
    text: "From concept to completion, you showcased exceptional understanding and precision in bringing our vision to life. MotionShield now stands as a reliable bridge between motorists and service providers. The platform's strong performance and clear, intuitive design have significantly elevated user satisfaction.",
  },
  {
    name: "Murali",
    role: "CEO & Founder, Zeengi",
    company: "Zeengi",
    image: "/testimonials/testimonials-2.png",
    rating: 5,
    title: "Complete Digital Transformation",
    text: "Zeengi's multi-role ecosystem is a complete game changer. You delivered a powerful, scalable, and intuitive e-commerce platform that seamlessly connects users, vendors, franchises, and delivery partners. The workflow automation and smooth UI have greatly enhanced our operations and customer engagement.",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 border-border/50 overflow-hidden animate-fade-in h-full flex flex-col"
      style={{animationDelay: `${0.3 + index * 0.1}s`}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      <CardContent className="p-6 lg:p-8 relative flex-1 flex flex-col">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        {/* Testimonial Title */}
        <h3 className="font-semibold text-foreground mb-3 text-sm">
          {testimonial.title}
        </h3>
        
        {/* Testimonial Text - This section will grow/shrink */}
        <div className="flex-1 mb-6">
          <p className="text-muted-foreground italic leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300 line-clamp-5">
            "{testimonial.text}"
          </p>
        </div>
        
        {/* Author Info - Fixed height section */}
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            {/* Image with Fallback */}
            <div className="flex-shrink-0">
              {!imageLoaded || imageError ? (
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center ring-2 ring-border/50 group-hover:ring-primary/30 transition-all duration-300">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
              ) : null}
              
              {!imageError && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  onError={() => setImageError(true)}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 ${
                    imageLoaded ? 'block' : 'hidden'
                  }`}
                />
              )}
            </div>
            
            {/* Text content - fixed layout */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 truncate">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {testimonial.role}
              </p>
              <p className="text-xs text-muted-foreground/70 truncate mt-1">
                {testimonial.company || "\u00A0"} {/* Non-breaking space if no company */}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - HPS</title>
        <meta name="description" content="Read what our clients have to say about us. We're proud of the work we do and the relationships we build." />
        <link rel="canonical" href="https://www.thehps.in/testimonials" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <SocialSidebar />
        <FloatingContact />
      <div className="pt-32 pb-8 bg-background text-foreground relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in border border-primary/30">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">CLIENT TESTIMONIALS</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
              What Our <span className="relative inline-block">
                <span className="text-primary">Clients Say</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl" style={{animationDelay: '0.2s'}}>
              Don't just take our word for it. Here's what our satisfied clients have to say about working with HPS.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <ContactCard />
        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;