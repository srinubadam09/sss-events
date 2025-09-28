import React from "react";
import { motion } from "framer-motion";
import { HiCheck, HiStar, HiSparkles, HiHeart } from "react-icons/hi";

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: "Essential",
      price: "₹15,000",
      originalPrice: "₹20,000",
      duration: "Basic Package",
      description: "Perfect for intimate celebrations and small gatherings",
      features: [
        "Basic Decoration Setup",
        "Standard Lighting",
        "Balloon Arrangements",
        "2 Hours Setup Time",
        "Basic Photography Support",
        "Cleanup Service"
      ],
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      popular: false,
      icon: HiHeart
    },
    {
      id: 2,
      name: "Premium",
      price: "₹35,000",
      originalPrice: "₹45,000",
      duration: "Most Popular",
      description: "Comprehensive package for memorable celebrations",
      features: [
        "Premium Decoration Setup",
        "Professional LED Lighting",
        "Floral Arrangements",
        "Stage/Mandap Decoration",
        "4 Hours Setup Time",
        "Photography & Videography Support",
        "Sound System Basic",
        "Cleanup & Maintenance"
      ],
      color: "from-gold-400 to-gold-600",
      bgColor: "bg-gold-50",
      popular: true,
      icon: HiStar
    },
    {
      id: 3,
      name: "Luxury",
      price: "₹65,000",
      originalPrice: "₹80,000",
      duration: "Premium Package",
      description: "Ultimate luxury experience for grand celebrations",
      features: [
        "Luxury Theme Decoration",
        "Advanced Lighting Systems",
        "Premium Floral Designs",
        "Complete Venue Transformation",
        "6 Hours Setup Time",
        "Professional Photography Team",
        "Premium Sound & DJ Setup",
        "Catering Coordination",
        "Event Management",
        "24/7 Support"
      ],
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      popular: false,
      icon: HiSparkles
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-gold-200 to-gold-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-100 to-gold-200 px-6 py-2 rounded-full mb-6">
            <HiStar className="text-gold-600 w-5 h-5" />
            <span className="text-gold-600 font-semibold">Our Packages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored packages designed to fit every celebration and budget, 
            ensuring your special moments are beautifully crafted
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  pkg.popular ? "ring-4 ring-gold-400 ring-opacity-50" : ""
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`relative p-8 bg-gradient-to-r ${pkg.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8" />
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {pkg.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{pkg.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-lg line-through opacity-60">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">Starting from</p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                          <HiCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 bg-gradient-to-r ${pkg.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      pkg.popular ? "ring-2 ring-gold-400 ring-opacity-50" : ""
                    }`}
                  >
                    Choose {pkg.name}
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                Every celebration is unique. Let's create a personalized package just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-white transition-all duration-300"
                >
                  Compare Packages
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;