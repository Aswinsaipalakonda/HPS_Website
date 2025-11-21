import { MessageCircle, Send, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

// Store animation state globally to persist across page changes
let globalHasAnimated = false;

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(globalHasAnimated);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scale, setScale] = useState(1);

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

  useEffect(() => {
    // Only animate on initial app load, not on every page change
    if (!globalHasAnimated) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
        globalHasAnimated = true;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleButtonClick = () => {
    if (!isFormOpen) {
      // Start smooth scale and fade animation
      setScale(0);
      setTimeout(() => {
        setIsFormOpen(true);
        // Smooth expand with bounce
        requestAnimationFrame(() => {
          setScale(1);
        });
      }, 350);
    }
  };

  const handleCloseForm = () => {
    // Smooth scale down
    setScale(0);
    setTimeout(() => {
      setIsFormOpen(false);
      setIsExpanded(globalHasAnimated);
      // Smooth expand back
      requestAnimationFrame(() => {
        setScale(1);
      });
    }, 350);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <>
      {/* Main Floating Container - Diagonal scaling */}
      <div 
        className="fixed bottom-6 right-6 z-50"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'bottom right',
          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: scale === 0 ? 0 : 1,
        }}
      >
        <div 
          className={`
            rounded-[30px] shadow-2xl overflow-hidden
            ${isFormOpen 
              ? "w-[500px] h-[580px] bg-white border border-gray-200"
              : isExpanded 
                ? "w-auto h-14 bg-red-500"
                : "w-14 h-14 bg-red-500"
            }
            transition-all duration-300
          `}
        >
          {/* Button State */}
          {!isFormOpen && (
            <Button 
              onClick={handleButtonClick}
              className={`w-full h-full rounded-[30px] bg-red-500 hover:bg-red-600 text-white group transition-all duration-300 flex items-center justify-center ${
                isExpanded ? 'px-6' : 'px-0'
              }`}
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform flex-shrink-0" />
              {isExpanded && (
                <span className="ml-3 font-semibold whitespace-nowrap">
                  Get in Touch
                </span>
              )}
            </Button>
          )}

          {/* Form State */}
          {isFormOpen && (
            <div className="h-full flex flex-col bg-white">
              {/* Form Header */}
              <div className="flex items-center justify-between p-6 bg-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10">
                    <MessageCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Send us a Message</h3>
                    <p className="text-xs text-gray-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseForm}
                  className="rounded-full hover:bg-gray-100 w-10 h-10 text-gray-500 hover:text-gray-700"
                >
                  <Minimize2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Contact Form */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="quick-name" className="block text-xs font-medium text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="quick-name" 
                      className="h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="quick-email" className="block text-xs font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="quick-email" 
                      type="email" 
                      className="h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="quick-phone" className="block text-xs font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="quick-phone" 
                      className="h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="quick-service" className="block text-xs font-medium text-gray-700">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <Select required>
                      <SelectTrigger 
                        id="quick-service"
                        className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-gray-900 text-sm hover:border-red-500/50"
                      >
                        <SelectValue placeholder="Select a service" className="text-gray-500" />
                      </SelectTrigger>
                      <SelectContent 
                        className="bg-white border-gray-200 rounded-lg shadow-lg z-[100]"
                        position="item-aligned"
                        side="bottom"
                        sideOffset={4}
                      >
                        {services.map((service, index) => (
                          <SelectItem 
                            key={index} 
                            value={service}
                            className="text-sm focus:bg-red-500/10 focus:text-red-500 cursor-pointer hover:bg-red-500/5"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="quick-message" className="block text-xs font-medium text-gray-700">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="quick-message" 
                    placeholder="Tell us about your project requirements, timeline, and budget..." 
                    rows={6}
                    className="text-sm border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none bg-white"
                    required
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full h-12 bg-red-500 hover:bg-red-600 text-white transition-all duration-300 text-sm font-medium group rounded-full px-6 border-2 border-red-500/30 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingContact;