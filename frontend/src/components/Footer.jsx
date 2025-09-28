import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker, 
  HiHeart,
  HiStar,
  HiSparkles
} from "react-icons/hi";
import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaYoutube 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Wedding Decorations",
    "Birthday Celebrations", 
    "Corporate Events",
    "Anniversary Decor",
    "Festival Lighting",
    "Housewarming Decor"
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaWhatsapp, href: "https://wa.me/919010791332", color: "hover:text-green-500" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="logo.png" 
                alt="Tenthouse Logo" 
                className="h-12 w-12 rounded-full border-2 border-gold-400" 
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Tenthouse
                </h3>
                <p className="text-gray-400 text-sm">Decorations & Lightings</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating magical moments and unforgettable experiences through 
              exquisite decorations and stunning lighting solutions for over 3 years.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-gold-400 text-sm" />
                  ))}
                </div>
                <span className="text-gray-300 ml-1">500+ Events</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <HiSparkles className="text-gold-400 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <HiHeart className="text-gold-400 mr-2" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center group">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <HiPhone className="text-gold-400 mr-2" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiPhone className="text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9010791332</p>
                  <p className="text-gray-300">+91 9618816011</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HiMail className="text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">srinubadam85@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Podili, Prakasam Dist</p>
                  <p className="text-gray-300">Andhra Pradesh, 523240</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919010791332"
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919010791332"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold-400 text-gold-400 px-6 py-2 rounded-full font-semibold hover:bg-gold-400 hover:text-white transition-all duration-300"
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} <span className="text-gold-400 font-semibold">Tenthouse</span>. 
            All rights reserved. Made with <HiHeart className="inline text-red-500 mx-1" /> 
            for creating magical moments.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Decorations & Lightings | Podili, Prakasam District, Andhra Pradesh
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;