import { Sparkles, Target, Rocket, Users, Zap, TrendingUp, Award, Lightbulb, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const expertiseAreas = [
  { icon: Target, label: "Strategy" },
  { icon: Rocket, label: "Innovation" },
  { icon: Users, label: "Collaboration" },
  { icon: Zap, label: "Efficiency" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Award, label: "Excellence" },
  { icon: Lightbulb, label: "Creativity" },
];

const WebDesignFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 640);
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertiseAreas.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 pt-0 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 relative overflow-hidden">
      
      {/* Background Elements - Matching Hero & Services */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Matching Services */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Main Heading */}
          <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
            Design <span className="relative inline-block">
              <span className="text-primary">Excellence</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
            </span> & Innovation
          </h2>
          
          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl mx-auto" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            What drives our design philosophy and makes us the preferred choice for exceptional user experiences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            {/* Our Story Section */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 border border-primary/30">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">OUR STORY</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight" style={{fontWeight: 500}}>
                Our Design Journey
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={{fontWeight: 300}}>
                HPS was founded with the vision of creating digital experiences that not only look beautiful but also drive results. Our design philosophy centers around user-centric approaches that transform complex problems into intuitive solutions.
              </p>
            </div>

            {/* Our Mission Section */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 border border-primary/30">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">OUR MISSION</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight" style={{fontWeight: 500}}>
                Design with Purpose
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={{fontWeight: 300}}>
                Our mission is to craft interfaces that users love and businesses benefit from. We believe in the power of thoughtful design to create meaningful connections between brands and their audiences.
              </p>
            </div>

            {/* Key Players Section */}
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 border border-primary/30">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">KEY PLAYERS</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight" style={{fontWeight: 500}}>
                UX/UI Design Experts
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4" style={{fontWeight: 300}}>
                What drives our excellence in creating exceptional digital experiences
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-3">
                {expertiseAreas.slice(0, 4).map((area, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
                    <area.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Animated Circular Display */}
          <div className="relative w-full max-w-[300px] sm:max-w-md mx-auto aspect-square flex items-center justify-center pt-8 sm:pt-0">
            <div className={`absolute inset-0 rounded-full border border-emerald-500/20 animate-spin flex items-center justify-center`} style={{ animationDuration: '40s' }} />
            <div className="absolute inset-8 rounded-full border border-emerald-500/15 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            <div className="absolute inset-16 rounded-full border border-emerald-500/10 animate-spin" style={{ animationDuration: '25s' }} />
            
            {/* Center Main Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} rounded-full bg-emerald-500/10 backdrop-blur-sm flex items-center justify-center border-2 border-emerald-500/30 shadow-lg pointer-events-auto`}>
                {/* Active Icon Display */}
                {expertiseAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                        isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                      }`}
                    >
                      <IconComponent className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-emerald-600 mb-1 sm:mb-2`} strokeWidth={1.5} />
                      <span className="text-xs font-medium text-slate-800">
                        {area.label}
                      </span>
                    </div>
                  );
                })}
                
                {/* Pulsing Effect */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-0" style={{animationDuration: '3s'}} />
              </div>
            </div>

            {/* Orbiting Expertise Items */}
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              const angle = (index * (360 / expertiseAreas.length)) * (Math.PI / 180);
              const radius = isMobile ? 120 : 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div 
                    className={`rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-lg ${
                      isMobile ? 'w-10 h-10' : 'w-14 h-14'
                    } ${
                      isActive 
                        ? 'border-emerald-500 bg-emerald-500/20 scale-125 shadow-emerald-500/25' 
                        : 'border-slate-300 bg-white/80 scale-100 hover:scale-110'
                    }`}
                  >
                    <IconComponent className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} transition-colors duration-500 ${
                      isActive ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-600'
                    }`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Label Tooltip */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <span 
                      className="text-xs font-medium text-slate-800 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200 shadow-lg"
                    >
                      {area.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 md:mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground" style={{fontWeight: 500}}>
            Let's Create Something Amazing Together
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto mb-6" style={{fontWeight: 300}}>
            Get in touch with us to discuss how we can help transform your digital presence with our expert design and development services.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-5 text-sm font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            Ready to Start?
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDesignFeatures;