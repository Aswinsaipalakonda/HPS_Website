import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import webDevelopmentImage from "@/assets/web_developement_services.png";
import appDevelopmentImage from "@/assets/app_development_services.png";
import digitalMarketingImage from "@/assets/digital_marketing.png";
import eduSuiteImage from "@/assets/edusuitepro.png";
import LazyImage from "@/components/LazyImage";
import {
  Monitor, 
  ShoppingCart, 
  Users, 
  Settings,
  TrendingUp,
  DollarSign,
  MessageCircle,
  MapPin,
  ArrowRight,
  Smartphone,
  Palette,
  Code,
  GraduationCap,
  Zap,
  Database,
  Home,
  Truck
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

// Web Services
const webServices = [
  {
    icon: Monitor,
    number: "01",
    title: "Website Design",
    description: "Transform your online presence with stunning, modern website designs. We craft visually appealing and functional websites that capture your brand essence and engage your visitors effectively.",
    path: "/web-design"
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "E-Commerce Solutions",
    description: "Build powerful online stores that drive sales and provide seamless shopping experiences. Our e-commerce platforms are designed to handle everything from product management to secure payment processing.",
    path: "#"
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description: "Create exceptional user experiences with our intuitive interface designs. We focus on making digital interactions smooth, engaging, and conversion-focused for your target audience.",
    path: "#"
  },
  {
    icon: Code,
    number: "04",
    title: "Custom Web Development",
    description: "Get tailored web applications that align perfectly with your business processes. We build robust, scalable solutions that automate workflows and boost your operational efficiency.",
    path: "#"
  },
];

// App Development Services
const appServices = [
  {
    icon: Smartphone,
    number: "01",
    title: "Mobile App Development",
    description: "Powerful mobile applications for iOS and Android platforms. We build native and cross-platform apps that deliver exceptional user experiences and drive business growth.",
    path: "#"
  },
  {
    icon: Palette,
    number: "02",
    title: "App UI/UX Design",
    description: "Mobile-first design that captivates users. Our app design services focus on creating intuitive, beautiful interfaces that enhance user engagement and retention.",
    path: "#"
  },
  {
    icon: Code,
    number: "03",
    title: "Custom App Solutions",
    description: "Tailored mobile applications designed to solve your specific business challenges. From concept to deployment, we handle every aspect of app development.",
    path: "#"
  },
];

// Digital Marketing Services
const digitalMarketingServices = [
  {
    icon: TrendingUp,
    number: "01",
    title: "SEO Services",
    description: "In the modern era of digitalization, SEO is the key to opening doors for companies willing to increase their online presence. Our professionals design personalized SEO strategies to increase your business rankings.",
    path: "#"
  },
  {
    icon: DollarSign,
    number: "02",
    title: "Pay-Per-Click Advertising",
    description: "Pay-per-click (PPC) advertising is difficult to implement, but HPS makes it easy and profitable. We oversee keyword research to ad copy, so your PPC campaign is ROI-driven. With HPS, each dollar spent on PPC yields tangible business results.",
    path: "#"
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Social Media Marketing",
    description: "Social media is crucial in contemporary marketing, allowing companies to connect with customers. HPS offers tailored services to make your social media campaign easier and increase ROI. We work together with you on creating engaging content.",
    path: "#"
  },
  {
    icon: MapPin,
    number: "04",
    title: "Local Listing Services",
    description: "Local directories are indispensable to get noticed in local search. HPS provides services to increase your online exposure and local traffic. Our experts implement sophisticated strategies for top Google local search rankings to get your business noticed.",
    path: "#"
  },
];

// EduSuite Pro Services
const edusuiteServices = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Student Information System",
    description: "Comprehensive student management system that tracks enrollment, attendance, grades, and academic progress. Streamline administrative tasks and enhance student engagement.",
    path: "/edusuite-pro"
  },
  {
    icon: Users,
    number: "02",
    title: "Faculty Management",
    description: "Efficient faculty management tools for scheduling, performance tracking, and communication. Includes payroll systems, workwallets, and comprehensive staff management. Manage staff records, assignments, and evaluations seamlessly.",
    path: "/edusuite-pro"
  },
  {
    icon: Database,
    number: "03",
    title: "Academic Management",
    description: "Complete academic management solution covering course planning, curriculum management, exam scheduling, and result processing. Includes T&P (Training & Placement) for students to track career opportunities and placements. Keep all academic data organized and accessible.",
    path: "/edusuite-pro"
  },
  {
    icon: Settings,
    number: "04",
    title: "Fee Management System",
    description: "Automated fee collection and management system. Track payments, generate invoices, send reminders, and maintain financial records with ease.",
    path: "/edusuite-pro"
  },
  {
    icon: Home,
    number: "05",
    title: "Hostel Management",
    description: "Centralize hostel operations, from room allocations to maintenance, meal planning, and student safety through a single, user-friendly platform.",
    path: "/edusuite-pro"
  },
  {
    icon: Zap,
    number: "06",
    title: "Library Management",
    description: "Digital library management system for cataloging books, managing checkouts, tracking inventory, and facilitating easy book discovery for students and staff.",
    path: "/edusuite-pro"
  },
  {
    icon: Monitor,
    number: "07",
    title: "Online Learning Platform",
    description: "Integrated e-learning platform with course materials, assignments, quizzes, and virtual classrooms. Enable remote learning and enhance educational delivery.",
    path: "/edusuite-pro"
  },
  {
    icon: Truck,
    number: "08",
    title: "Transport Management System",
    description: "Comprehensive transport management solution for tracking vehicles, routes, and student transportation. Manage bus schedules, driver assignments, and ensure safe and efficient transportation services.",
    path: "/edusuite-pro"
  },
];

// Business Solutions
const businessSolutions = [
  {
    icon: Users,
    number: "01",
    title: "CRM Solutions",
    description: "Your customers are your biggest asset. With HPS's CRM features, you can keep them interested with ease. From managing interactions to tracking leads, our solutions make it easy to build and maintain long-term relationships with your audience.",
    path: "#"
  },
  {
    icon: Database,
    number: "02",
    title: "ERP Solutions",
    description: "Integrate business processes with efficiency and insights. Our ERP solutions streamline operations, improve decision-making, and drive organizational growth.",
    path: "#"
  },
  {
    icon: Zap,
    number: "03",
    title: "Business Automation",
    description: "Eliminate repetitive tasks and boost team productivity. Automate workflows, reduce manual errors, and free up your team to focus on strategic initiatives.",
    path: "#"
  },
  {
    icon: Settings,
    number: "04",
    title: "Lead Management Services",
    description: "Lead generation is the lifeblood of every business. With HPS, you can tap into the cutting-edge lead management solutions that capture, teach, and convert leads into loyal clients. We can help you drive your growth and take your business to new heights.",
    path: "#"
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />
      <FloatingContact />
      <div className="pt-32 pb-8">
        {/* Web Services Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <ScrollAnimation animation="slide-right" delay={0}>
              <div className="space-y-6 flex flex-col h-full">
                <h1 
                  className="font-bold text-foreground leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  Web Development Services
                </h1>
                <p 
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6" 
                  style={{fontWeight: 300}}
                >
                  We create powerful, responsive websites and web applications that drive results. From design to development, we deliver web solutions that enhance your online presence and boost your business growth.
                </p>
                <div className="mt-6">
                  <LazyImage 
                    src={webDevelopmentImage} 
                    alt="Web Development Services" 
                    className="w-full max-w-md h-auto mx-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Section - Web Services */}
            <ScrollAnimation animation="slide-left" delay={100}>
              <div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {webServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Number */}
                        <div className="absolute top-4 right-4">
                          <span className="text-lg font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                            {service.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 space-y-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                          <Link 
                            to={service.path}
                            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 mt-auto"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="border-t border-border/50"></div>
        </div>

        {/* App Development Services Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <ScrollAnimation animation="slide-right" delay={0}>
              <div className="space-y-6">
                <h1 
                  className="font-bold text-foreground leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  Mobile App Development Services
                </h1>
                <p 
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6" 
                  style={{fontWeight: 300}}
                >
                  Transform your business with powerful mobile applications. We develop native and cross-platform apps that deliver exceptional user experiences and drive business growth across iOS and Android platforms.
                </p>
                <div className="mt-6">
                  <LazyImage 
                    src={appDevelopmentImage} 
                    alt="App Development Services" 
                    className="w-full max-w-md h-auto mx-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Section - App Services */}
            <ScrollAnimation animation="slide-left" delay={100}>
              <div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {appServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Number */}
                        <div className="absolute top-4 right-4">
                          <span className="text-lg font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                            {service.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 space-y-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                          <Link 
                            to={service.path}
                            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 mt-auto"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="border-t border-border/50"></div>
        </div>

        {/* Digital Marketing Services Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <ScrollAnimation animation="slide-right" delay={0}>
              <div className="space-y-6">
                <h1 
                  className="font-bold text-foreground leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  Our Digital Marketing Services
                </h1>
                <p 
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6" 
                  style={{fontWeight: 300}}
                >
                  We assist you in attaining your digital growth, to develop responsive websites and effective strategies that promote brand visibility and ROI.
                </p>
                <div className="mt-6">
                  <LazyImage 
                    src={digitalMarketingImage} 
                    alt="Digital Marketing Services" 
                    className="w-full max-w-lg h-auto mx-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Section - Digital Marketing */}
            <ScrollAnimation animation="slide-left" delay={100}>
              <div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {digitalMarketingServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Number */}
                        <div className="absolute top-4 right-4">
                          <span className="text-lg font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                            {service.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 space-y-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                          <Link 
                            to={service.path}
                            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 mt-auto"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="border-t border-border/50"></div>
        </div>

        {/* EduSuite Pro Services Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <ScrollAnimation animation="slide-right" delay={0}>
              <div className="space-y-6">
                <h1 
                  className="font-bold text-foreground leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  EduSuite Pro - Complete Educational Management Solution
                </h1>
                <p 
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6" 
                  style={{fontWeight: 300}}
                >
                  All-in-one integrated solution for educational institutions. Streamline operations, enhance learning experiences, and manage your entire educational ecosystem with our comprehensive platform.
                </p>
                <div className="mt-6 flex-1 flex items-center justify-center w-full">
                  <LazyImage 
                    src={eduSuiteImage} 
                    alt="EduSuite Pro Platform" 
                    className="w-full max-w-2xl h-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Section - EduSuite Services */}
            <ScrollAnimation animation="slide-left" delay={100}>
              <div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {edusuiteServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Number */}
                        <div className="absolute top-4 right-4">
                          <span className="text-lg font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                            {service.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 space-y-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                          <Link 
                            to={service.path}
                            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 mt-auto"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="border-t border-border/50"></div>
        </div>

        {/* Business Solutions Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <ScrollAnimation animation="slide-right" delay={0}>
              <div className="space-y-6">
                <h1 
                  className="font-bold text-foreground leading-tight" 
                  style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}
                >
                  Business Solutions & Enterprise Software
                </h1>
                <p 
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed" 
                  style={{fontWeight: 300}}
                >
                  Streamline your business operations with our comprehensive enterprise solutions. From CRM to ERP, automation to lead management, we provide tools that drive efficiency and growth.
                </p>
               
              </div>
            </ScrollAnimation>

            {/* Right Section - Business Solutions */}
            <ScrollAnimation animation="slide-left" delay={100}>
              <div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {businessSolutions.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Number */}
                        <div className="absolute top-4 right-4">
                          <span className="text-lg font-light text-muted-foreground/15 select-none group-hover:text-muted-foreground/25 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                            {service.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
      </div>
      
                        {/* Content */}
                        <div className="flex flex-col flex-1 space-y-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                          <Link 
                            to={service.path}
                            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 mt-auto"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
            </ScrollAnimation>
          </div>
        </section>

        </div>

        {/* Contact Card */}
        <ContactCard />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
