import React from "react";
import { motion } from "framer-motion";
import { HiStar, HiSparkles } from "react-icons/hi";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('x.jpeg')" }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-royal-blue-900/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gold-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-gold-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img 
            src="logo.png" 
            alt="Tenthouse Logo" 
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full shadow-2xl border-4 border-gold-400/50 hover:border-gold-400 transition-all duration-500 hover:scale-105" 
          />
        </motion.div>
        
        {/* Main heading with luxury styling */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-2xl">
            Tenthouse
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HiSparkles className="text-gold-400 text-2xl animate-pulse" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
              Decorations & Lightings
            </h2>
            <HiSparkles className="text-gold-400 text-2xl animate-pulse" />
          </div>
        </motion.div>

        {/* Tagline with animation */}
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-100 drop-shadow-lg mb-8 leading-relaxed"
        >
          Creating <span className="text-gold-300 font-semibold">Magical Moments</span> with 
          <span className="text-gold-300 font-semibold"> Elegant Decorations</span> and 
          <span className="text-gold-300 font-semibold"> Stunning Lightings</span>
        </motion.p>

        {/* Trust indicators */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-center space-x-6 mb-10 text-sm sm:text-base"
        >
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="text-gold-400 text-lg" />
              ))}
            </div>
            <span className="text-white/90 ml-2">500+ Happy Events</span>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <span className="text-white/90">3+ Years Experience</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full shadow-2xl hover:shadow-gold-400/25 transition-all duration-300 text-lg"
          >
            View Our Gallery
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg"
          >
            Get Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold-400/60 rounded-full p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold-400 rounded-full mx-auto"
          />
        </div>
        <p className="text-gold-300 text-xs mt-2 font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;