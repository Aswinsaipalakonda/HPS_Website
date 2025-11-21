import React from "react";
import { Link } from "react-router-dom";
import { 
  Monitor,
  TrendingUp,
  Palette,
  Code,
  Database,
  Smartphone,
  Zap,
  GraduationCap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Website Design",
    description: "Modern, user-first websites that reflect brand and drive results.",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "EduSuite Pro",
    description: "All-in-one integrated solution for educational institutions.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Digital Marketing",
    description: "Targeted campaigns to boost visibility and online presence.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "App Development",
    description: "Powerful mobile applications for iOS and Android platforms.",
  },
  {
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    description: "Intuitive interfaces that keep customers engaged and satisfied.",
  },
  {
    icon: Code,
    number: "06",
    title: "Custom Software",
    description: "Scalable solutions built precisely for your business needs.",
  },
  {
    icon: Zap,
    number: "07",
    title: "Automation",
    description: "Eliminate repetitive tasks and boost team productivity.",
  },
  {
    icon: Database,
    number: "08",
    title: "ERP Solutions",
    description: "Integrate business processes with efficiency and insights.",
  },
];

const Services = () => {
  return (
    <section className="pb-16 md:pb-20 bg-background text-foreground relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Left Aligned (matching Hero) */}
        <div className="max-w-3xl mb-8 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in border border-primary/30">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground">OUR SERVICES</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
            Expert Digital Services to{' '}
            <span className="relative inline-block">
              <span className="text-primary">Grow your Brand</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            From strategy to execution, we offer a full range of digital marketing and web development services tailored to help your brand thrive online.
          </p>
        </div>

         {/* Services Grid - Responsive Columns */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
           {services.map((service, index) => {
             // Make Website Design (index 0) clickable to navigate to web-design page
             const isWebsiteDesign = index === 0;
             const cardContent = (
               <>
               {/* Hover Background Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
               
               {/* Number - Top Right */}
               <div className="absolute top-4 right-4">
                 <span className="text-md font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                   {service.number}
                 </span>
               </div>
               
               {/* Icon */}
               <div className="mb-4">
                 <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 inline-flex group-hover:scale-110 group-hover:rotate-3">
                   <service.icon className="w-5 h-5" strokeWidth={1.5} />
                 </div>
               </div>

               {/* Content */}
               <div className="space-y-3">
                 <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                   {service.title}
                 </h3>
                 <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                   {service.description}
                 </p>
               </div>

               {/* Hover Arrow */}
               <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                 <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                   <ArrowUpRight className="w-4 h-4" />
                 </div>
               </div>
               </>
             );
             
             return isWebsiteDesign ? (
               <Link
                 key={index}
                 to="/web-design"
                 className="group relative p-5 sm:p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer overflow-hidden block"
               >
                 {cardContent}
               </Link>
             ) : (
               <div
                 key={index}
                 className="group relative p-5 sm:p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer overflow-hidden"
               >
                 {cardContent}
               </div>
             );
           })}
         </div>

         {/* CTA Section */}
        <div className="text-center mt-10 md:mt-12">
          <Link to="/services">
            <Button 
              variant="outline"
              className="rounded-full px-6 py-5 text-sm border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
            >
              View All Services
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;