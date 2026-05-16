import { useState, useEffect } from "react";
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";

const testimonials = [
  {
    name: "Jitendra Kumar",
    role: "CEO, Beauty Centre",
    company: "Beauty Centre",
    image: "/testimonials/manmade.png",
    rating: 5,
    title: "Exceptional Digital Growth & Brand Elevation",
    text: "HPS transformed our online presence with a modern and professional website that perfectly showcases our salon furniture and beauty equipment. Their design and branding support helped us reach more customers and present our business with greater credibility.",
    category: "Website Design, Branding",
  },
  {
    name: "Trinadh",
    role: "CEO & Founder, OpenCT",
    company: "OpenCT",
    image: "/testimonials/openct.jpeg",
    rating: 5,
    title: "Complete Digital Transformation",
    text: "The OpenCT app beautifully blends technology with empathy. Your thoughtful design and seamless functionality created a platform where users truly feel supported and connected. The focus on user experience and accessibility made a meaningful impact on bringing our mental wellness vision to life.",
    category: "Website Design, Branding",
  },
  {
    name: "Marcus Obubonojo",
    role: "Founder & CEO, MotionShield",
    company: "MotionShield",
    image: "/testimonials/marcus.png",
    rating: 5,
    title: "Strategic Partnership Excellence",
    text: "From concept to completion, you showcased exceptional understanding and precision in bringing our vision to life. MotionShield now stands as a reliable bridge between motorists and service providers. The platform’s strong performance and clear, intuitive design have significantly elevated user satisfaction.",
    category: "Digital Marketing, Strategy",
  },
  {
    name: "Murali",
    role: "CEO & Founder, Zeengi",
    company: "Zeengi",
    image: "/testimonials/testimonials-2.png",
    rating: 5,
    title: "Complete Digital Transformation",
    text: "Zeengi’s multi-role ecosystem is a complete game changer. You delivered a powerful, scalable, and intuitive e-commerce platform that seamlessly connects users, vendors, franchises, and delivery partners. The workflow automation and smooth UI have greatly enhanced our operations and customer engagement.",
    category: "E-commerce, Web Development",
  },
  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentTestimonial = testimonials[currentIndex];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-16 pt-16 md:pt-20 bg-background text-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl text-left mb-12 md:mb-16">
          {/* Heading with Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
              What Our <span className="relative inline-block">
                <span className="text-primary">Clients Say</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl" style={{fontWeight: 300}}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Hps.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mx-auto">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
            
            {/* Left Side - Image & Client Info */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
                <div className="relative h-[450px]">
                  <LazyImage 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  
                  {/* Client Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-xl font-bold mb-1">{currentTestimonial.name}</h3>
                    <p className="text-background/80 text-sm mb-2">{currentTestimonial.role}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-background text-background" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center border-2 border-primary shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Content */}
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 flex flex-col space-y-4 min-h-0">
                {/* Category Badge */}
                <div className="inline-flex px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 w-fit">
                  <span className="text-xs font-medium text-primary">{currentTestimonial.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground" style={{fontWeight: 600}}>
                  {currentTestimonial.title}
                </h3>

                {/* Testimonial Text */}
                <div className="relative flex-1 min-h-0">
                  <div className="absolute -left-2 top-0 text-primary/20" style={{fontSize: '32px', lineHeight: '32px'}}>"</div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4" style={{fontWeight: 300}}>
                    {currentTestimonial.text}
                  </p>
                  <div className="absolute -right-2 bottom-0 text-primary/20" style={{fontSize: '32px', lineHeight: '32px'}}>"</div>
                </div>

                {/* Company Highlight */}
                <div className="flex-shrink-0">
                  <p className="text-xl text-primary mb-1" style={{fontFamily: '"Poppins", sans-serif'}}>
                    {currentTestimonial.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.category}
                  </p>
                </div>
              </div>

              {/* Navigation Controls - Fixed at bottom */}
              <div className="flex items-center gap-4 pt-6 mt-auto flex-shrink-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex items-center gap-2 flex-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 h-2 bg-primary rounded-full'
                          : 'w-2 h-2 bg-primary/30 rounded-full hover:bg-primary/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 md:mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <LazyImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{testimonial.category}</span>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;