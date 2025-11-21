import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Briefcase, 
  Users, 
  Zap, 
  Heart, 
  TrendingUp, 
  Code, 
  Palette, 
  Smartphone,
  GraduationCap,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Coffee,
  FileText,
  Smile
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "We offer competitive compensation packages that reflect your skills and experience."
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance and wellness programs for you and your family."
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career progression paths."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options to maintain a healthy balance."
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with talented, passionate professionals in a collaborative environment."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Be part of cutting-edge projects using the latest technologies and methodologies."
  },
];

// Empty positions array for testing - replace with actual data
const openPositions = [
  // Uncomment the positions below when you have open roles
  /*
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Development",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    icon: Code,
    description: "We're looking for an experienced full-stack developer to join our team. You'll work on exciting projects using modern technologies like React, Node.js, and cloud platforms."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    icon: Palette,
    description: "Join our creative team as a UI/UX Designer. Create beautiful, intuitive interfaces that users love. Experience with Figma, Adobe XD, and design systems required."
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Development",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    icon: Smartphone,
    description: "Develop native and cross-platform mobile applications for iOS and Android. Experience with React Native, Flutter, or native development required."
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    icon: TrendingUp,
    description: "Drive our digital marketing efforts with SEO, SEM, social media, and content marketing strategies. Help our clients grow their online presence."
  },
  {
    id: 5,
    title: "EduSuite Pro Developer",
    department: "Development",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    icon: GraduationCap,
    description: "Work on our comprehensive educational management system. Experience with educational software or ERP systems is a plus."
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Sales",
    location: "Visakhapatnam",
    type: "Full-time",
    icon: Briefcase,
    description: "Build relationships with clients and drive business growth. Strong communication skills and experience in IT services sales required."
  },
  */
];

const cultureValues = [
  {
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems. Our team is empowered to experiment, take calculated risks, and push boundaries. We celebrate innovative solutions that drive real value for our clients and create meaningful impact in the digital landscape."
  },
  {
    title: "Collaborative Spirit",
    description: "Teamwork is at the heart of everything we do. We believe in working together to achieve greatness. Our open communication culture ensures every voice is heard, ideas are shared freely, and knowledge flows seamlessly across teams. We build stronger solutions when we build together."
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth through training, conferences, and skill development programs. Technology evolves rapidly, and so do we. From internal workshops to industry certifications, we provide resources and opportunities for professional development that keep our team at the forefront of innovation."
  },
  {
    title: "Work-Life Balance",
    description: "We understand the importance of maintaining a healthy balance between work and personal life. Flexible schedules, remote work options, and respect for personal time ensure our team members can thrive both professionally and personally. Happy, well-rested team members deliver their best work."
  },
];

const Careers = () => {
  const hasOpenPositions = openPositions.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />
      <FloatingContact />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 relative overflow-hidden" style={{paddingBottom: '0px'}}>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-slow delay-500" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in border border-primary/30">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">JOIN OUR TEAM</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
            Build Your Legacy with{' '}
              <span className="relative inline-block">
                <span className="text-primary">HPS</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            Join a dynamic collective of visionaries, innovators, and creators who are reshaping the digital landscape. 
              At HPS, we're not just building software we're crafting solutions that transform businesses, empower communities, 
              and drive meaningful change. If you're passionate about pushing technological boundaries and creating impact at scale, 
              you've found your home.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{fontWeight: 300, animationDelay: '0.2s'}}>
            We're constantly seeking exceptional talent creative problem-solvers, technical virtuosos, and forward-thinking leaders 
              who thrive in collaborative environments and aren't afraid to challenge conventions. Your journey here will be more than 
              a career; it will be an opportunity to grow, innovate, and leave your mark on the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 pt-0 md:py-20 bg-background relative overflow-hidden" style={{paddingTop: '0px',paddingBottom: '0px'}}>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={0}>
            <div className="mb-8 md:mb-12">
              <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
                Open <span className="relative inline-block">
                  <span className="text-primary">Positions</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                </span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed animate-fade-in" style={{fontWeight: 300, animationDelay: '0.2s'}}>
                {hasOpenPositions 
                  ? "We're constantly seeking exceptional talent—creative problem-solvers, technical virtuosos, and forward-thinking leaders who thrive in collaborative environments and aren't afraid to challenge conventions. Your journey here will be more than a career; it will be an opportunity to grow, innovate, and leave your mark on the future of technology."
                  : "While we're currently between hiring cycles and don't have immediate openings, our doors are always open to exceptional talent. The technology landscape evolves rapidly, and so do our team needs. Great candidates rarely fit into predefined boxes, and we believe in creating roles for the right people rather than waiting for perfect timing."
                }
              </p>
            </div>
          </ScrollAnimation>

          {hasOpenPositions ? (
            <div className="grid md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => {
                const IconComponent = position.icon;
                return (
                  <ScrollAnimation key={position.id} animation="fade-up" delay={index * 100}>
                    <div className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {position.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1" style={{fontWeight: 300}}>
                        {position.description}
                      </p>
                      <Link to="/contact">
                        <Button 
                          variant="outline"
                          className="w-full rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                          style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}
                        >
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          ) : (
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="max-w-2xl mx-auto text-center py-12">
                {/* No Positions Illustration */}
                <div className="mb-8">
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Smile className="w-12 h-12 text-primary" />
                    </div>
                    
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
                  No Open Positions Currently
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto" style={{fontWeight: 300}}>
                  We're not actively hiring at the moment, but we're always excited to meet passionate individuals. 
                  Feel free to send us your resume, and we'll keep you in mind for future opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="rounded-full px-8 py-6 bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      Send Your Resume
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                    >
                      Explore Our Services
                    </Button>
                  </Link>
                </div>

                
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-8 pt-0 md:py-20 bg-background relative overflow-hidden" style={{paddingTop: hasOpenPositions ? '0px' : '40px'}}>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={0}>
            <div className="max-w-3xl mb-8 md:mb-12">
              <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
                Why Join <span className="relative inline-block">
                  <span className="text-primary">HPS</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                </span>?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
                We believe in creating an environment where talented individuals can thrive, innovate, and grow. Here's what makes working at HPS special.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                  <div className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{fontWeight: 300}}>
                      {benefit.description}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 pt-0 md:py-20 bg-background relative overflow-hidden" style={{paddingTop: '0px',paddingBottom: '0px'}}>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={0}>
            <div className="max-w-3xl mb-8 md:mb-12">
              <h2 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
                Our <span className="relative inline-block">
                  <span className="text-primary">Culture</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
                </span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
                At HPS, we foster a culture of innovation, collaboration, and continuous growth. Here's what drives us.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            {cultureValues.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1" style={{fontWeight: 300}}>
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <ContactCard />

      <Footer />
    </div>
  );
};

export default Careers;