import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";
import ContactCard from "@/components/ContactCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Briefcase, Building, Calendar, Heart, Lightbulb, Sparkles, Users, Target, Rocket, Zap, ArrowRight, ChevronLeft, ChevronRight, Code, Palette, TrendingUp, Handshake, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";

const clients = [
    {
        name: "JNTUACEK",
        logo: "/client-logos/jntua-mainlogo.png",
        category: "Educational Institute"
    },
    {
        name: "JNTUKN",
        logo: "/client-logos/jntuk-logo.png",
        category: "Educational Institute"
    },
    {
        name: "Beauty Centre",
        logo: "/client-logos/beautycenter.jpeg",
        category: "Beauty & Wellness"
    },
    {
        name: "ManMade",
        logo: "/client-logos/Logo_ManMade png-Photoroom.png",
        category: "Salon Industry"
    },
    {
        name: "XPTL",
        logo: "/client-logos/xptl.png",
        category: "E-Commerce"
    },
    {
        name: "Mobile Fixer",
        logo: "/client-logos/mobilefixer.png",
        category: "Mobile Repair"
    },
    {
        name: "Tennis Theory",
        logo: "/client-logos/tennistheory.png",
        category: "Tennis Coaching"
    },
    {
        name: "Suryan Energy",
        logo: "/client-logos/Logo.png",
        category: "Renewable Energy"
    },
];

// MoU Partners Data
const mouPartners = [
    {
        name: "JNTUA University",
        logo: "/client-logos/jntua-mainlogo.png",
        type: "Academic Partnership",
        description: "Strategic collaboration for research and development in emerging technologies"
    },
    {
        name: "TechEduSpace",
        logo: "/client-logos/techeduspace.png",
        type: "Innovation Center",
        description: "Joint innovation lab for cutting-edge technology solutions"
    },
    {
        name: "Betatek",
        logo: "/client-logos/betatek.png",
        type: "Training Partner",
        description: "Skill development and training programs for digital transformation"
    },
    
];

// Updated realistic stats
const stats = [
    { number: "150+", label: "Successful Projects" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "99.9%", label: "Project Success Rate" },
    { number: "24/7", label: "Client Support" },
];

const expertiseAreas = [
    { icon: Zap, label: "Development" },
    { icon: Target, label: "Digital Marketing" },
    { icon: Sparkles, label: "UI/UX Design" },
    { icon: Rocket, label: "Strategy" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Users, label: "Collaboration" },
];

const eventGallery = [
    {
        id: 1,
        title: "EduSuite Pro Training",
        target: "Demo session for EduSuite Pro",
        image: "/event-images/jntuacekdemo.jpg",
    },
    {
        id: 2,
        title: "Career Guidance Summit 27 April 2025",
        target: "Career guidance summit for students",
        image: "/event-images/career_guidance.JPG",
    },
    
];

const PortfolioPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleCards, setVisibleCards] = useState(4);
    const [isMobile, setIsMobile] = useState(false);

    // Expertise rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % expertiseAreas.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Responsive cards and orbital logic
    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            
            if (width < 640) {
                setVisibleCards(1);
            } else if (width < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(4);
            }
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    // Event gallery carousel logic
    const maxEventIndex = Math.max(0, eventGallery.length - visibleCards);
    const totalEventDots = maxEventIndex + 1;

    const handleNextEvent = () => {
        if (isAnimating || currentEventIndex >= maxEventIndex) return;
        setIsAnimating(true);
        setCurrentEventIndex((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrevEvent = () => {
        if (isAnimating || currentEventIndex <= 0) return;
        setIsAnimating(true);
        setCurrentEventIndex((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToEventSlide = (index: number) => {
        if (isAnimating || index === currentEventIndex) return;
        setIsAnimating(true);
        setCurrentEventIndex(Math.min(index, maxEventIndex));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const translateValue = (currentEventIndex * 100) / visibleCards;

    return (
        <>
          <Helmet>
            <title>Portfolio - HPS</title>
            <meta name="description" content="Explore our portfolio of successful projects and see how we've helped our clients achieve their goals." />
            <link rel="canonical" href="https://www.thehps.in/portfolio" />
          </Helmet>
          <div className="min-h-screen bg-background">
            <Header />
            <SocialSidebar />
            <FloatingContact />

            {/* Hero Section with Background Image */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
                {/* Background Image with Overlay - Matching Hero Theme */}
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
                    </div>
                    
                    {/* Animated Background Shapes */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-2xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-background">OUR PORTFOLIO</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in text-background" style={{fontWeight: 500}}>
                            Crafting Digital <span className="relative inline-block">
                                <span className="text-primary">Excellence</span>
                                <span className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -z-10 transform -skew-x-12" />
                            </span>
                        </h2>
                        
                        <p className="text-xs md:text-base text-background/90 leading-relaxed max-w-2xl mx-auto mb-8" style={{fontWeight: 300}}>
                            Discover our journey of innovation, partnership, and success stories that define our commitment to delivering exceptional digital solutions.
                        </p>

                        {/* CTA Button */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <Button 
                                size="lg" 
                                className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-sm md:text-base font-semibold"
                            >
                                Let's Work together
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Stats Grid - Placed below CTA */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
                            {stats.map((stat, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                    <div className="text-center p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs md:text-sm text-background/90 font-medium" style={{fontWeight: 300}}>
                                            {stat.label}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Expertise Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                        
                        <div className="space-y-8">
                            <ScrollAnimation animation="slide-right" delay={0}>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 border border-primary/30">
                                        <Building className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-xs font-medium text-foreground">OUR STORY</span>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight" style={{fontWeight: 500}}>
                                        Our Design Journey
                                    </h3>
                                    
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6" style={{fontWeight: 300}}>
                                        HPS was founded with the vision of creating digital experiences that not only look beautiful but also drive results. Our design philosophy centers around user-centric approaches that transform complex problems into intuitive solutions.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Target className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1 text-sm">Our Mission</h4>
                                                <p className="text-xs text-muted-foreground" style={{fontWeight: 300}}>To provide innovative solutions that drive our clients' success through technology.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Rocket className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1 text-sm">Our Vision</h4>
                                                <p className="text-xs text-muted-foreground" style={{fontWeight: 300}}>To be a global leader in IT solutions, recognized for creativity and transformative impact.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <ScrollAnimation animation="slide-left" delay={200}>
                            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto aspect-square flex items-center justify-center">
                                {/* Animated Border Rings - Purple Theme */}
                                <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-spin" style={{ animationDuration: '40s' }} />
                                <div className="absolute inset-6 rounded-full border border-indigo-500/15 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                                <div className="absolute inset-12 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: '25s' }} />
                                
                                {/* Center Main Circle */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} rounded-full bg-indigo-500/10 backdrop-blur-sm flex items-center justify-center border-2 border-indigo-500/30 shadow-lg pointer-events-auto`}>
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
                                                    <IconComponent className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-indigo-600 mb-1 sm:mb-2`} strokeWidth={1.5} />
                                                    <span className="text-xs font-medium text-slate-800">
                                                        {area.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        
                                        {/* Pulsing Effect */}
                                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-0" style={{animationDuration: '3s'}} />
                                    </div>
                                </div>

                                {/* Orbiting Expertise Items */}
                                {expertiseAreas.map((area, index) => {
                                    const IconComponent = area.icon;
                                    const angle = (index * (360 / expertiseAreas.length)) * (Math.PI / 180);
                                    const radius = isMobile ? 110 : 180;
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
                                                        ? 'border-indigo-500 bg-indigo-500/20 scale-125 shadow-indigo-500/25' 
                                                        : 'border-slate-300 bg-white/80 scale-100 hover:scale-110'
                                                }`}
                                            >
                                                <IconComponent className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} transition-colors duration-500 ${
                                                    isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
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
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Strategic Collaborations Section */}
            <section className="py-16 md:py-20 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <Handshake className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="font-bold animate-fade-in" style={{fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}>
                                Strategic <span className="relative inline-block">
                                    <span className="text-primary">Collaborations</span>
                                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                                </span>
                            </h2>
                        </div>
                        
                        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl" style={{fontWeight: 300}}>
                            At HPS, we believe in the power of strategic partnerships to drive innovation and create lasting impact. Our Memorandum of Understanding (MoU) partnerships represent our commitment to collaborative growth, knowledge sharing, and pushing the boundaries of what's possible in the digital landscape.
                        </p>
                    </div>

                    {/* MoU Partners Grid - Matching Other Pages Style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {mouPartners.map((partner, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="group bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                                    
                                    {/* Logo Container */}
                                    <div className="p-6 pb-4 flex justify-center">
                                        <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-background border border-border/30 group-hover:border-primary/20 transition-all duration-300">
                                            {partner.logo ? (
                                                <LazyImage
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    className="max-w-[60px] max-h-[50px] w-auto h-auto object-contain transition-transform duration-300"
                                                />
                                            ) : (
                                                <FileText className="w-10 h-10 text-primary/60" />
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="p-4 pt-2 flex-1 flex flex-col text-center">
                                        
                                        {/* Partner Name */}
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                                            {partner.name}
                                        </h3>
                                        
                                        {/* Partner Type Badge */}
                                        <div className="mb-3">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                                {partner.type}
                                            </span>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Gallery Section - Matching Client Case Studies Style */}
            <section className="py-16 md:py-20 bg-background" style={{paddingBottom:'0'}}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="font-bold animate-fade-in" style={{fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}>
                                Event <span className="relative inline-block">
                                    <span className="text-primary">Gallery</span>
                                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                                </span>
                            </h2>
                        </div>
                        
                        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed" style={{fontWeight: 300}}>
                            Step into the world of HPS through our event gallery, where we capture the essence of our journey in transforming digital landscapes. From intimate workshops to grand industry events, each moment represents our commitment to excellence and innovation. Our events are more than just gatherings - they are platforms for knowledge sharing, networking, and building lasting relationships with our clients and the tech community. Witness the energy of our digital transformation workshops at prestigious institutions like JNTUA, where we empower the next generation of tech leaders. Experience the excitement of product launches and brand activations that have helped our clients establish market dominance. Each event in our portfolio tells a unique story of collaboration, learning, and growth, reflecting our core philosophy of creating meaningful digital experiences that drive real business impact.
                        </p>
                    </div>

                    {/* Event Gallery Carousel - Matching Client Case Studies */}
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
                                    {eventGallery.map((event) => (
                                        <div
                                            key={event.id}
                                            className="flex-shrink-0 px-3"
                                            style={{ width: `${100 / visibleCards}%` }}
                                        >
                                            <div className="group relative rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card hover:shadow-lg hover:shadow-primary/5 w-full flex flex-col" style={{ height: '100%' }}>
                                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                                    <LazyImage
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="p-4 flex-1 flex flex-col justify-between">
                                                    <h3 className="text-sm font-bold mb-2 leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground">
                                                        {event.target}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation */}
                            {totalEventDots > 1 && (
                                <>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handlePrevEvent}
                                        disabled={currentEventIndex <= 0 || isAnimating}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 bg-background/90 backdrop-blur-sm z-20 w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/90 disabled:hover:text-foreground"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleNextEvent}
                                        disabled={currentEventIndex >= maxEventIndex || isAnimating}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 bg-background/90 backdrop-blur-sm z-20 w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/90 disabled:hover:text-foreground"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </>
                            )}
                        </div>

                        {/* Dots */}
                        {totalEventDots > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-6">
                                {Array.from({ length: totalEventDots }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToEventSlide(index)}
                                        className={`transition-all duration-300 ${index === currentEventIndex
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

            {/* Client Showcase Section - Matching Client Logos Style (Grid Layout) */}
            <section className="py-16 md:py-20 bg-background" style={{paddingTop:'0',paddingBottom:'0'}}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="font-bold animate-fade-in" style={{fontWeight: 500, fontSize: '30px', lineHeight: '30px'}}>
                                Trusted by <span className="relative inline-block">
                                    <span className="text-primary">Industry Leaders</span>
                                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                                </span>
                            </h2>
                        </div>
                        
                        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed" style={{fontWeight: 300}}>
                            At HPS, we take immense pride in the trust placed in us by industry leaders across various sectors. Our client portfolio represents a diverse tapestry of organizations that have chosen us as their digital transformation partners. From prestigious educational institutions like JNTUACEK seeking to modernize their administrative systems, to innovative beauty and wellness brands revolutionizing customer experiences, to renewable energy pioneers shaping a sustainable future - each partnership has been a journey of mutual growth and success.
                        </p>
                    </div>

                    {/* Client Logos Grid - Reduced size and perfect alignment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {clients.map((client, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="group w-full h-32 flex items-center justify-center text-center p-4 rounded-xl transition-all duration-300 bg-card hover:shadow-lg hover:shadow-primary/5 border border-border/50">
                                    {client.logo ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <LazyImage
                                                src={client.logo}
                                                alt={`${client.name} logo`}
                                                className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain transition-all duration-300"
                                                style={{
                                                    filter: 'brightness(1.1) contrast(1.05)',
                                                    opacity: 1
                                                }}
                                                noWrapper={false}
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: '"Poppins", sans-serif' }}>
                                                {client.name}
                                            </h4>
                                            {client.category && (
                                                <p className="text-xs text-muted-foreground">
                                                    {client.category}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

              <ContactCard />
              <Footer />
            </div>
          </>
        );
      };

export default PortfolioPage;