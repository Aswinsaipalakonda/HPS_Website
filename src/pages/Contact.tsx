import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SocialSidebar from "@/components/SocialSidebar";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Sparkles, Send, ArrowRight, Clock, ChevronDown } from "lucide-react";
import contactImage from "@/assets/contactimage.png";
import LazyImage from "@/components/LazyImage";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@thehps.in",
      description: "We'll respond within 24 hours",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 7288801257 / +91 7093664846",
      description: "24/7 Support",
      action: "Call Now",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      info: "Visakhapatnam, India",
      description: "31-7-67, Assam Gardens, Visakhapatnam, Andhra Pradesh - 530004",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Sunday",
      description: "24/7 Available",
      action: "View Schedule",
    },
  ];

  const services = [
    "Web Design & Development",
    "Mobile App Development", 
    "Digital Marketing",
    "UI/UX Design",
    "Custom Software",
    "ERP Solutions",
    "E-commerce Solutions",
    "Cloud Services"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - HPS</title>
        <meta name="description" content="Contact HPS for all your web and mobile app development needs. We're here to help you grow your business." />
        <link rel="canonical" href="https://www.thehps.in/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <SocialSidebar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-slow delay-500" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Matching Services & Hero */}
          <div className="max-w-3xl mb-8 md:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in border border-primary/30">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">GET IN TOUCH</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-bold mb-4 animate-fade-in" style={{fontWeight: 500, animationDelay: '0.1s', fontSize: '30px', lineHeight: '30px'}}>
              Let's Start Your{' '}
              <span className="relative inline-block">
                <span className="text-primary">Project</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed animate-fade-in max-w-2xl" style={{fontWeight: 300, animationDelay: '0.2s'}}>
              Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help your business grow.
            </p>
          </div>

          {/* Main Content Grid - Form Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-12 md:mb-16 items-center">
            {/* Left Column - Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 shadow-lg">
                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Send us a Message</h2>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-medium text-foreground/80">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name" 
                        className="border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 h-10 text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-medium text-foreground/80">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                      <Input 
                        id="email" 
                        type="email" 
                        className="border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 h-10 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-medium text-foreground/80">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="phone" 
                        className="border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 h-10 text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs font-medium text-foreground/80">
                        Service Interested In <span className="text-red-500">*</span>
                    </label>
                      <Select required>
                        <SelectTrigger 
                          id="service"
                          className="w-full h-10 px-3 rounded-lg border border-border/80 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 text-foreground text-sm hover:border-primary/50"
                        >
                          <SelectValue placeholder="Select a service" className="text-muted-foreground" />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-background border-border/80 rounded-lg shadow-lg z-50"
                          position="item-aligned"
                          side="bottom"
                          sideOffset={4}
                        >
                          {services.map((service, index) => (
                            <SelectItem 
                              key={index} 
                              value={service}
                              className="text-sm focus:bg-primary/10 focus:text-primary cursor-pointer hover:bg-primary/5"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-medium text-foreground/80">
                      Project Details <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                      placeholder="Tell us about your project requirements, timeline, and budget..." 
                    rows={6}
                      className="border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 resize-none text-sm"
                      required
                  />
                </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full px-6 py-5 text-sm border-2 border-primary/30 bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-medium group"
                  >
                  Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Image */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative rounded-2xl overflow-hidden">
                <LazyImage 
                  src={contactImage} 
                  alt="Contact Us" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact Methods & Info */}
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in flex flex-col h-full"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 inline-flex group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 space-y-3">
                      <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors duration-300" style={{fontFamily: '"Poppins", sans-serif'}}>
                        {method.title}
                      </h3>
                      <p className="text-foreground font-medium text-sm">
                        {method.info}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-1">
                        {method.description}
                      </p>
                      <div className="pt-1 mt-auto">
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all duration-300">
                          {method.action}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;