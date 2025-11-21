import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import hpsLogoWhite from "@/assets/hps_new_logo_white.png";
import LazyImage from "@/components/LazyImage";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  
  return (
    <footer className="bg-black text-white relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        {/* Top padding accommodates the overlapping ContactCard */}
        <div className={`${isContactPage ? "pt-16" : "pt-32 md:pt-40 lg:pt-32"} pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12`}>
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <LazyImage 
                src={hpsLogoWhite} 
                alt="Hps Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Harsha Perfect Solutions Pvt Ltd
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses with comprehensive digital solutions. We deliver excellence in web design, development, and digital marketing.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Website Design</span>
                </Link>
              </li>
              <li>
                <Link to="/edusuite-pro" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>EduSuite Pro</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Digital Marketing</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>App Development</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>UI/UX Design</span>
                </a>
              </li>
              
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Custom Software</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Automation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>ERP Solutions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:info@thehps.in" className="text-white hover:text-primary transition-colors duration-300 text-sm">
                    info@thehps.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:9246615251" className="text-white hover:text-primary transition-colors duration-300 text-sm">
                    +91 9246615251
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white text-sm">
                    31-7-67, Assam Gardens<br />
                    Visakhapatnam, Andhra Pradesh<br /> 530004, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isContactPage ? "" : "pr-0 md:pr-40 lg:pr-40"}`}>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hps Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

