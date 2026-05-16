import { useState, useEffect } from "react";
import { Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";

// --- CONFIGURATION ---
const CARD_WIDTH_CLASS = "w-72"; // Increased width (18rem = 288px)
const CARD_HEIGHT_CLASS = "h-40"; // Increased height
const GAP_CLASS = "gap-8"; // Increased gap
const PIXEL_WIDTH = 288; // Must match w-72 (18rem * 16px)
const PIXEL_GAP = 32; // Must match gap-8 (2rem * 16px)
// ---------------------

const clientCaseStudies = [
  {
    id: 1,
    title: "JNTUACEK",
    target: "Complete College Suite Software with Hostel Automation, Fee Management System, Student Information System, and more",
    image: "/client_case_study/jntuacek.jpeg",
  },
  {
    id: 2,
    title: "JNTUKN",
    target: "Under implementation of College Suite Software with Hostel Automation, Fee Management System, Student Information System, and more",
    image: "/client_case_study/jntun.webp",
  },
  {
    id: 3,
    title: "ManMade",
    target: "Online Salon Furniture display and SEO optimized website",
    image: "/client_case_study/manmade.jpg",
  },
  {
    id: 4,
    title: "Beauty Centre",
    target: "Full developed ecommerce website and Native Andriod, IOS App",
    image: "/client_case_study/beautycentre.jpeg",
  },
  
];

const clientLogos = [
  {
    name: "JNTUA",
    category: "EduSuite Pro",
    logo: "/client-logos/jntua-mainlogo.png",
    hasLogo: true
  },
  {
    name: "JNTUN",
    category: "EduSuite Pro",
    logo: "/client-logos/jntuk-logo.png",
    hasLogo: true
  },
  {
    name: "ManMade",
    category: "",
    logo: "/client-logos/Logo_ManMade png-Photoroom.png",
    hasLogo: true
  },
  {
    name: "Suryan Energy",
    category: "",
    logo: "/client-logos/Logo.png",
    hasLogo: true
  },
  {
    name: "Beauty Center",
    category: "",
    logo: "/client-logos/beautycenter.jpeg",
    hasLogo: true
  },
  {
    name: "XTPL",
    category: "",
    logo: "/client-logos/xptl.png",
    hasLogo: true
  },
  {
    name: "Mobile Fixer",
    category: "",
    logo: "/client-logos/mobilefixer.png",
    hasLogo: true
  },
  {
    name: "Tennis Theory",
    category: "",
    logo: "/client-logos/tennistheory.png",
    hasLogo: true
  },
  {
    name: "Grace News",
    category: "",
    logo: "/client-logos/gracenews.png",
    hasLogo: true
  },
  {
    name: "Ginzer",
    category: "",
    logo: "/client-logos/ginzer.png",
    hasLogo: true
  },
];

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoScrollPosition, setLogoScrollPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // --- RESIZE LOGIC ---
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // --- CASE STUDY CAROUSEL LOGIC ---
  const maxIndex = Math.max(0, clientCaseStudies.length - visibleCards);
  const totalDots = maxIndex + 1;

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(Math.min(index, maxIndex));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const translateValue = (currentIndex * 100) / visibleCards;

  // --- INFINITE LOGO SCROLL LOGIC ---
  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 1.0; // Adjusted speed for larger items
    
    // Calculate width of ONE single set of logos (width + gap)
    const singleItemWidth = PIXEL_WIDTH + PIXEL_GAP;
    const totalSetWidth = clientLogos.length * singleItemWidth;

    const animate = () => {
      setLogoScrollPosition((prev) => {
        let newPosition = prev + scrollSpeed;

        // Reset position when we have scrolled past the first complete set
        // This creates the seamless loop effect
        if (newPosition >= totalSetWidth) {
          newPosition = 0;
        }

        return newPosition;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Helper to render a logo card to ensure consistency across duplicates
  const renderLogoCard = (client: typeof clientLogos[0], keyPrefix: string, index: number) => (
    <div
      key={`${keyPrefix}-${index}`}
      className={`flex-shrink-0 ${CARD_WIDTH_CLASS} ${CARD_HEIGHT_CLASS} flex items-center justify-center group`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 py-4 rounded-xl transition-all duration-300 bg-card">
        {client.hasLogo && client.logo ? (
          <LazyImage
            src={client.logo}
            alt={`${client.name} logo`}
            className="w-full h-full object-contain p-2 transition-all duration-300"
            style={{
              filter: 'brightness(1.1) contrast(1.05)',
              opacity: 1
            }}
            noWrapper={false}
          />
        ) : (
          <>
            <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors whitespace-nowrap" style={{ fontFamily: '"Poppins", sans-serif' }}>
              {client.name}
            </h4>
            {client.category && (
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                {client.category}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <section className="py-16 pt-0 pb-0 md:py-20 bg-background text-foreground relative overflow-hidden" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-bold animate-fade-in" style={{ fontWeight: 500, fontSize: '30px', lineHeight: '30px' }}>
                Our <span className="relative inline-block">
                  <span className="text-primary">Clients</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                </span>
              </h2>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl" style={{ fontWeight: 300 }}>
              Our success lies in the results we deliver. From real estate to e-commerce, we've helped brands grow through smart digital strategies. Explore how we turn ideas into impact.
            </p>
          </div>

          {/* Case Studies Carousel */}
          <div className="mb-16 md:mb-20">
            <div className="relative">
              {/* Gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              {/* Carousel */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${translateValue}%)`
                  }}
                >
                  {clientCaseStudies.map((client) => (
                    <div
                      key={client.id}
                      className="flex-shrink-0 px-3"
                      style={{ width: `${100 / visibleCards}%` }}
                    >
                      <div className="group relative rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card hover:shadow-lg hover:shadow-primary/5 w-full flex flex-col" style={{ height: '100%' }}>
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <LazyImage
                            src={client.image}
                            alt={client.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <h3 className="text-sm font-bold mb-2 leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                            {client.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Target - {client.target}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              {totalDots > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    disabled={currentIndex <= 0 || isAnimating}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 bg-background/90 backdrop-blur-sm z-20 w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/90 disabled:hover:text-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex || isAnimating}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 bg-background/90 backdrop-blur-sm z-20 w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/90 disabled:hover:text-foreground"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Dots */}
            {totalDots > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {Array.from({ length: totalDots }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${index === currentIndex
                        ? 'w-6 h-2 bg-primary rounded-full'
                        : 'w-2 h-2 bg-primary/30 rounded-full hover:bg-primary/50'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- FIXED CLIENT LOGOS CAROUSEL --- */}
      <section className="lg:py-0 lg:pb-0 bg-background text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-4"> 
              <div
                className={`flex ${GAP_CLASS}`}
                style={{
                  transform: `translateX(-${logoScrollPosition}px)`,
                  width: 'max-content',
                  willChange: 'transform'
                }}
              >
                {/* RENDER 1: The Original Set 
                   This is the set that measures the width for the reset logic
                */}
                {clientLogos.map((client, index) => renderLogoCard(client, "original", index))}

                {/* RENDER 2: First Duplicate
                   Necessary for the loop to look continuous
                */}
                {clientLogos.map((client, index) => renderLogoCard(client, "dup-1", index))}

                {/* RENDER 3: Second Duplicate
                   CRITICAL: Since you only have 4 logos, on wide screens (1920px), 
                   8 logos might not be enough to fill the buffer. This ensures 
                   the screen is fully filled before the reset happens.
                */}
                {clientLogos.map((client, index) => renderLogoCard(client, "dup-2", index))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;