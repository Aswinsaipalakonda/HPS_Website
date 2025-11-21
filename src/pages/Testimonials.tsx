import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles } from "lucide-react";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
    text: "Hps transformed our online presence completely. The team was professional, responsive, and delivered beyond our expectations. Our conversion rate has increased by 150%!",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5,
    text: "Working with Hps was a game-changer for our business. They understood our vision and created a stunning website that perfectly represents our brand.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
    text: "The attention to detail and creative approach Hps brought to our project was outstanding. They're not just developers, they're strategic partners.",
  },
  {
    name: "David Thompson",
    role: "Owner, Foodie's Delight",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    text: "Our new website looks amazing and has brought in 3x more online orders. The team at Hps made the entire process smooth and enjoyable.",
  },
  {
    name: "Lisa Wang",
    role: "VP Operations, HealthPlus",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    rating: 5,
    text: "Hps delivered a complex healthcare portal on time and within budget. Their technical expertise and customer service are unmatched.",
  },
  {
    name: "James Anderson",
    role: "Director, Creative Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
    text: "As a creative myself, I'm very particular about design. Hps exceeded my expectations with a portfolio site that truly showcases my work beautifully.",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialSidebar />
      <FloatingContact />
      <div className="pt-32 pb-20 bg-background text-foreground relative overflow-hidden">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s'}}>
              What Our <span className="relative inline-block">
                <span className="text-primary">Clients Say</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Hps.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 border-border/50 overflow-hidden animate-fade-in"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <CardContent className="p-6 lg:p-8 relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
