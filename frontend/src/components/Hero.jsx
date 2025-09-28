import React from "react";
import { motion } from "framer-motion";
import { HiStar, HiSparkles, HiPhone, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed text-white relative overflow-hidden"
      style={{ backgroundImage: "url('x.jpeg')" }}
    >
      {/* Enhanced gradient overlay with luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-royal-blue-900/50 to-black/60"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        
        {/* Logo with luxury animation */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, y: 100, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Glowing ring effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full blur-2xl opacity-40 animate-pulse scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full blur-xl opacity-30 animate-pulse scale-125 animation-delay-500"></div>
          <img 
            src="logo.png" 
            alt="Tenthouse Logo" 
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-gold-400/70 hover:border-gold-300 transition-all duration-700 hover:scale-110 hover:rotate-3" 
          />
        </motion.div>
        
        {/* Main heading with enhanced luxury styling */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent drop-shadow-2xl font-serif tracking-wide">
            Tenthouse
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-gold-400 text-3xl" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 font-serif">
              Decorations & Lightings
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-gold-400 text-3xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced tagline */}
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto text-gray-50 drop-shadow-lg mb-10 leading-relaxed font-light"
        >
          Creating <span className="text-gold-300 font-semibold bg-black/20 px-2 py-1 rounded-lg">Magical Moments</span> with 
          <span className="text-gold-300 font-semibold bg-black/20 px-2 py-1 rounded-lg mx-2">Elegant Decorations</span> and 
          <span className="text-gold-300 font-semibold bg-black/20 px-2 py-1 rounded-lg">Stunning Lightings</span>
        </motion.p>

        {/* Enhanced trust indicators */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12 text-base sm:text-lg"
        >
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                >
                  <HiStar className="text-gold-400 text-xl" />
                </motion.div>
              ))}
            </div>
            <span className="text-white/95 ml-2 font-medium">500+ Happy Events</span>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white/95 font-medium">3+ Years Experience</span>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white/95 font-medium">24/7 Support</span>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white font-bold rounded-full shadow-2xl hover:shadow-gold-400/30 transition-all duration-500 text-xl border-2 border-gold-300/50 hover:border-gold-200"
            >
              <span className="flex items-center space-x-2">
                <HiSparkles className="text-xl" />
                <span>View Our Gallery</span>
              </span>
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/25 hover:border-white/60 transition-all duration-500 text-xl shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <HiPhone className="text-xl" />
                <span>Get Free Quote</span>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919010791332"
            className="flex items-center space-x-2 bg-green-600/80 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300"
          >
            <HiPhone className="text-lg" />
            <span className="font-semibold">+91 9010791332</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:srinubadam85@gmail.com"
            className="flex items-center space-x-2 bg-blue-600/80 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            <HiMail className="text-lg" />
            <span className="font-semibold">Email Us</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Luxury scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-gold-400/70 rounded-full p-2 bg-white/10 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-gold-400 rounded-full mx-auto shadow-lg"
          />
        </div>
        <p className="text-gold-300 text-sm mt-3 font-medium tracking-wide">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;