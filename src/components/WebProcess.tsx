import { Monitor, Smartphone, Search, Lock, Palette, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const processes = [
  {
    icon: Monitor,
    title: "Custom Website Design",
    description: "At Hps, we harness our expertise in custom web development to elevate your digital presence. By understanding your unique business goals, we craft innovative, visually compelling websites that align seamlessly with your brand identity.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description: "In today's digital world, responsiveness is essential. At Hps, we ensure your website looks and performs perfectly across all devices—driving better engagement and user satisfaction.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "At Hps, we build visually stunning, SEO-optimized websites that help your business rank higher, boost visibility, and attract organic traffic to stay ahead of the competition.",
  },
  {
    icon: Lock,
    title: "Secure (HTTPS) Integration",
    description: "In today's security-first web, we prioritize HTTPS to ensure secure connections, we instill trust and credibility in your online presence, fostering a positive user experience, and safeguard sensitive data.",
  },
  {
    icon: Palette,
    title: "Professional Website Styling",
    description: "With countless websites online, standing out is crucial. At Hps, a web design company in Hyderabad, we create professionally designed websites that capture attention and reflect your brand.",
  },
  {
    icon: Zap,
    title: "Advanced Functionality",
    description: "As a leading web development company in Hyderabad, we provide e-commerce integration with advanced solutions tailored to boost your website's performance and online impact.",
  },
];

const WebProcess = () => {
  return (
    <section className="py-16 pt-0 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-slate-800 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-medium text-slate-800">OUR PROCESS</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
            Our Web Development <span className="relative inline-block">
              <span className="text-indigo-600">Process</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500/20 -z-10 transform -skew-x-12" />
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed animate-fade-in max-w-2xl mx-auto" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            A systematic approach to delivering exceptional web solutions that drive results and exceed expectations
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {processes.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-2xl font-light text-indigo-500/20 font-mono" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 600}}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 600}}>
                  {process.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={{fontWeight: 300}}>
                  {process.description}
                </p>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-5 text-sm font-medium"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebProcess;
