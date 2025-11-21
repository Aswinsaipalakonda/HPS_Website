import { MessageCircle, FileText, Code2, TrendingUp, Sparkles, Route } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Consultation",
    description: "We begin by understanding your unique needs and goals through thorough consultations.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Planning",
    description: "We create detailed plans to guide our projects and ensure a smooth process.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Implementation",
    description: "We execute with efficiency and precision, using best-in-class technologies.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimization",
    description: "We continuously refine our services to optimize for performance and results.",
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cycleSteps = () => {
      setIsAnimating(true);
      
      // Animation duration (flip/rotate animation)
      setTimeout(() => {
        setIsAnimating(false);
        
        // Wait a bit before moving to next step
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 500);
      }, 1500);
    };

    const interval = setInterval(cycleSteps, 3000); // Total cycle: 3 seconds (1.5s animation + 0.5s pause + 1s before next)

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 pt-0 md:py-20 bg-background text-foreground relative overflow-hidden" style={{paddingTop: '0px'}}>
      
      {/* Background Elements - Matching Hero & Services */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Left Aligned (matching Hero & Services) */}
        <div className="max-w-3xl mb-8 md:mb-12">
          {/* Heading with Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Route className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
              Our <span className="relative inline-block">
                <span className="text-primary">Approach</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            A systematic methodology that ensures every project is delivered with precision, quality, and measurable results.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index === activeIndex;
            const isAnimatingNow = isActive && isAnimating;
            
            return (
              <div
                key={index}
                className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent transition-opacity duration-300 -z-10 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                
                {/* Number - Top Right */}
                <div className="absolute top-4 right-4">
                  <span className={`text-lg font-light select-none transition-colors duration-300 ${
                    isActive ? 'text-primary/40' : 'text-muted-foreground/15 group-hover:text-muted-foreground/25'
                  }`} style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                    {step.number}
                  </span>
                </div>
                
                {/* Animated Icon with Flip/Rotate/Split-Merge */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    {/* Main Icon Container */}
                    <div className={`p-3 rounded-xl transition-all duration-500 inline-flex ${
                      isActive 
                        ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6'
                    }`}>
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        {/* Icon with flip and rotate animation */}
                        <IconComponent 
                          className={`w-6 h-6 transition-all duration-500 ${
                            isAnimatingNow 
                              ? 'animate-[flip_1.5s_ease-in-out]' 
                              : isActive 
                              ? 'scale-110' 
                              : ''
                          }`}
                          strokeWidth={1.5}
                          style={{
                            transformStyle: 'preserve-3d',
                          }}
                        />
                        
                        {/* Split particles effect when animating */}
                        {isAnimatingNow && (
                          <>
                            <div 
                              className="absolute w-2 h-2 bg-white rounded-full animate-[split-top-left_1.5s_ease-in-out_forwards]" 
                              style={{
                                left: '50%',
                                top: '50%',
                                animationDelay: '0.3s'
                              }}
                            />
                            <div 
                              className="absolute w-2 h-2 bg-white rounded-full animate-[split-top-right_1.5s_ease-in-out_forwards]" 
                              style={{
                                left: '50%',
                                top: '50%',
                                animationDelay: '0.4s'
                              }}
                            />
                            <div 
                              className="absolute w-2 h-2 bg-white rounded-full animate-[split-bottom-left_1.5s_ease-in-out_forwards]" 
                              style={{
                                left: '50%',
                                top: '50%',
                                animationDelay: '0.5s'
                              }}
                            />
                            <div 
                              className="absolute w-2 h-2 bg-white rounded-full animate-[split-bottom-right_1.5s_ease-in-out_forwards]" 
                              style={{
                                left: '50%',
                                top: '50%',
                                animationDelay: '0.6s'
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Pulsing Ring Effect */}
                    <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                      isActive ? 'bg-primary/30 animate-ping opacity-75' : 'bg-primary/20 opacity-0 group-hover:opacity-100'
                    }`} style={{animationDuration: isActive ? '1.5s' : '2s'}} />
                    
                    {/* Glow effect when active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl animate-pulse" style={{animationDuration: '2s'}} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 text-center">
                  <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                    isActive ? 'text-primary scale-105' : 'group-hover:text-primary'
                  }`} style={{fontFamily: '"Poppins", sans-serif', transform: isActive ? 'scale(1.05)' : undefined}}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-foreground/90' : 'text-muted-foreground group-hover:text-foreground/80'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border/50 group-hover:bg-primary/30 transition-colors duration-300 z-20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
