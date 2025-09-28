import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-center relative overflow-hidden"
      style={{ backgroundImage: "url('x.jpeg')" }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center p-3 sm:p-6 md:p-10 max-w-7xl mx-auto">
        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="logo.png" 
            alt="Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-300" 
          />
        </motion.div>
        
        {/* Heading with animation */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg"
        >
          Creating Magical Moments
        </motion.h1>

        {/* Description with animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl max-w-lg mx-auto text-gray-200 drop-shadow-md"
        >
          Let us make your special events unforgettable with elegance and perfection.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          Get Started
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
