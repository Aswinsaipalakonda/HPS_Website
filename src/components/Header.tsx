import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Monitor, GraduationCap, TrendingUp, Smartphone, Palette, Code, Zap, Database } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import hpsLogo from "@/assets/hps_new_logo.png";
import LazyImage from "@/components/LazyImage";

// Services dropdown data
const servicesDropdown = [
  {
    icon: Monitor,
    title: "Website Design",
    path: "/web-design",
    description: "Modern, user-first websites"
  },
  {
    icon: GraduationCap,
    title: "EduSuite Pro",
    path: "/edusuite-pro",
    description: "All-in-one educational solution"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    path: "/digital-marketing",
    description: "Boost visibility and presence"
  },
  {
    icon: Smartphone,
    title: "App Development",
    path: "/app-development",
    description: "iOS and Android applications"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    path: "/ui-ux-design",
    description: "Intuitive interfaces"
  },
  {
    icon: Code,
    title: "Custom Software",
    path: "/custom-software",
    description: "Scalable solutions"
  },
  {
    icon: Zap,
    title: "Automation",
    path: "/automation",
    description: "Boost productivity"
  },
  {
    icon: Database,
    title: "ERP Solutions",
    path: "/erp-solutions",
    description: "Integrate business processes"
  },
];

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services", hasDropdown: true },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact Us" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | HTMLButtonElement | null }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const previousActiveIndexRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Only hide/show navbar if scrolled past a threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show navbar immediately
          setIsVisible(true);
        }
      } else {
        // Always show navbar when near top
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const getActiveIndex = () => {
      return navLinks.findIndex(link => {
        if (link.path === "#") return false;
        if (link.path === "/") return location.pathname === "/";
        return location.pathname.startsWith(link.path);
      });
    };

    const getElementPosition = (index: number) => {
      const link = navLinks[index];
      if (!link) return null;
      
      const element = navRefs.current[link.label];
      if (!element) return null;
      
      const nav = element.closest("nav");
      if (!nav) return null;
      
      const navRect = nav.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      return {
        left: elementRect.left - navRect.left,
        width: elementRect.width,
      };
    };

    const animateThroughTabs = (fromIndex: number, toIndex: number) => {
      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
        const position = getElementPosition(toIndex);
        if (position) {
          setUnderlineStyle(position);
        }
        previousActiveIndexRef.current = toIndex;
        return;
      }

      const startIndex = Math.min(fromIndex, toIndex);
      const endIndex = Math.max(fromIndex, toIndex);
      const indices = [];
      for (let i = startIndex; i <= endIndex; i++) {
        indices.push(i);
      }

      if (toIndex < fromIndex) {
        indices.reverse();
      }

      const durationPerTab = 400;
      let currentStep = 0;

      const animate = () => {
        if (currentStep < indices.length) {
          const targetIndex = indices[currentStep];
          const position = getElementPosition(targetIndex);
          
          if (position) {
            setUnderlineStyle(position);
          }
          
          currentStep++;
          
          if (currentStep < indices.length) {
            animationFrameRef.current = setTimeout(animate, durationPerTab) as unknown as number;
          } else {
            previousActiveIndexRef.current = toIndex;
            animationFrameRef.current = null;
          }
        }
      };

      animate();
    };

    const updateUnderline = () => {
      const currentActiveIndex = getActiveIndex();
      const previousIndex = previousActiveIndexRef.current;

      if (currentActiveIndex !== -1) {
        if (previousIndex !== null && previousIndex !== currentActiveIndex) {
          animateThroughTabs(previousIndex, currentActiveIndex);
        } else {
          const position = getElementPosition(currentActiveIndex);
          if (position) {
            setUnderlineStyle(position);
          }
          previousActiveIndexRef.current = currentActiveIndex;
        }
      }
    };

    const timeoutId = setTimeout(updateUnderline, 0);
    window.addEventListener("resize", updateUnderline);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateUnderline);
    };
  }, [location.pathname]);

  const renderServicesDropdown = () => {
    if (activeDropdown !== "Services") return null;

    return (
      <div 
        ref={dropdownRef}
        className="absolute top-full left-0 mt-2 w-64 bg-white border border-border/50 rounded-lg shadow-lg py-2 animate-in fade-in-0 zoom-in-95 duration-200"
        onMouseEnter={() => handleDropdownEnter("Services")}
        onMouseLeave={handleDropdownLeave}
      >
        {servicesDropdown.map((service) => {
          const IconComponent = service.icon;
  return (
            <Link
              key={service.title}
              to={service.path}
              className="group flex items-center gap-3 px-4 py-2.5 text-xs text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              onClick={() => setActiveDropdown(null)}
            >
              <IconComponent className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
              <span className="font-medium">{service.title}</span>
            </Link>
          );
        })}
          </div>
    );
  };

  const isHomePage = location.pathname === "/";
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHomePage || isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border/50 shadow-sm" 
          : ""
      } ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={hpsLogo} 
              alt="HPS Logo" 
              className="h-14 sm:h-14 lg:h-14 w-auto transition-all duration-300 group-hover:opacity-90" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navLinks.map((link) => {
              let isActive = false;
              if (link.path !== "#") {
                if (link.path === "/") {
                  isActive = location.pathname === "/";
                } else {
                  isActive = location.pathname.startsWith(link.path);
                }
              }
              const NavComponent = link.path === "#" ? "button" : Link;
              
              return (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
                >
                  <NavComponent
                    to={link.path !== "#" ? link.path : undefined}
                    ref={(el) => {
                      if (el) {
                        navRefs.current[link.label] = el;
                      }
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group flex items-center gap-1 ${
                      isActive 
                        ? "text-primary" 
                        : "text-foreground/80"
                    } ${!isActive ? "hover:text-primary" : ""}`}
                    onClick={() => link.hasDropdown && handleDropdownClick(link.label)}
                  >
                    <span className="relative z-10">
                      {link.label}
                    </span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === link.label ? "rotate-180" : "group-hover:rotate-180"
                      }`} />
                    )}
                  </NavComponent>

                  {/* Services Dropdown */}
                  {link.label === "Services" && renderServicesDropdown()}
                </div>
              );
            })}
            
            {/* Sliding underline */}
            {underlineStyle.width > 0 && (
              <span 
                className="absolute bottom-0 h-0.5 bg-primary transition-all duration-[400ms] ease-in-out"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                }}
              />
            )}
        </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden relative w-10 h-10 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className={`h-5 w-5 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              let isActive = false;
              if (link.path !== "#") {
                if (link.path === "/") {
                  isActive = location.pathname === "/";
                } else {
                  isActive = location.pathname.startsWith(link.path);
                }
              }
              const NavComponent = link.path === "#" ? "button" : Link;
              const isDropdownOpen = activeDropdown === link.label;
              
              return (
                <div key={link.label}>
                  <NavComponent
                    to={link.path !== "#" ? link.path : undefined}
                    onClick={() => {
                      if (link.hasDropdown) {
                        handleDropdownClick(link.label);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                      flex items-center justify-between
                      ${isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground/80"
                      }
                      ${!isActive ? "hover:text-primary hover:bg-primary/5" : ""}
                    `}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    )}
                  </NavComponent>

                  {/* Mobile Services Dropdown */}
                  {link.label === "Services" && isDropdownOpen && (
                    <div className="ml-4 mt-1 bg-background/50 rounded-lg p-2 space-y-1">
                      {servicesDropdown.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.title}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-xs text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                          >
                            <IconComponent className="w-3.5 h-3.5 text-primary/70" />
                            <span className="font-medium">{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;