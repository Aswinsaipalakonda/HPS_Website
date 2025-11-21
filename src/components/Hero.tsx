import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette, Zap, Smartphone, BarChart3, Settings, Server, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const features = [
    { icon: Code, text: "Custom Software" },
    { icon: Palette, text: "UI/UX Design" },
    { icon: Zap, text: "Digital Marketing" },
  ];

  // Service icons for the rotating visual element
  const serviceIcons = [
    { icon: Code, label: "Development" },
    { icon: TrendingUp, label: "Digital Marketing" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: BarChart3, label: "Data Dashboards" },
    { icon: Server, label: "Web Hosting" },
    { icon: Smartphone, label: "App Development" },
    { icon: Settings, label: "Automation" },
  ];

  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % serviceIcons.length);
    }, 2000); // Change icon every 2 seconds

    return () => clearInterval(interval);
  }, [serviceIcons.length]);

  return (
    <section className="pt-20 pb-20 px-4 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="relative flex items-center min-h-[650px] p-8 md:p-16 lg:p-20">
            {/* Content */}
            <div className="text-background max-w-3xl relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-background">Complete Digital Solutions Provider</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s'}}>
                Transforming businesses with{' '}
                <span className="relative inline-block">
                  <span className="text-primary">comprehensive digital solutions</span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -z-10 transform -skew-x-12" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-xs md:text-base mb-8 text-background/90 leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
                Harsha Perfect Solutions offers end-to-end digital services including Web Design, Digital Marketing, UI/UX Design, Custom Software Development, ERP Solutions, App Development, Automation Services, and more to help your business thrive in the digital world.
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20 hover:bg-background/20 transition-all duration-300 group"
                  >
                    <feature.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-background">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-base font-semibold"
                >
                  Let's Build Your Future Together
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Side Visual Element */}
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64">
              <div className="relative w-full h-full">
                {/* Animated Circles */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-8 border-2 border-primary/40 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                
                {/* Rotating Service Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/30 relative">
                    {serviceIcons.map((service, index) => {
                      const IconComponent = service.icon;
                      const isActive = index === currentIconIndex;
                      return (
                        <div
                          key={index}
                          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}
                        >
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Floating Service Icons around the circle */}
                {serviceIcons.slice(0, 6).map((service, index) => {
                  const IconComponent = service.icon;
                  const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
                  
                  // Distribute icons across the three circular rings
                  // Outer ring (inset-0): radius ~120px, Middle ring (inset-4): radius ~104px, Inner ring (inset-8): radius ~88px
                  const ringRadii = [110, 110, 110]; // Centers of the three rings
                  const ringIndex = index % 3; // Distribute evenly: 0,1,2,0,1,2
                  const radius = ringRadii[ringIndex];
                  
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-background/40 hover:bg-background/30 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-background/90" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
