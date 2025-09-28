import React from "react";
import { motion } from "framer-motion";
import { 
  HiSparkles, 
  HiLightBulb, 
  HiHeart, 
  HiStar, 
  HiGift, 
  HiMusicNote,
  HiColorSwatch,
  HiCamera
} from "react-icons/hi";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: HiSparkles,
      title: "Wedding Decorations",
      description: "Transform your special day with elegant floral arrangements, mandap decorations, and romantic ambiance.",
      features: ["Mandap Design", "Floral Arrangements", "Stage Decoration", "Entrance Decor"],
      color: "from-pink-400 to-rose-600",
      bgColor: "bg-pink-50",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      icon: HiLightBulb,
      title: "Premium Lighting",
      description: "Create magical atmospheres with our professional lighting solutions for any occasion.",
      features: ["LED Lighting", "String Lights", "Spotlights", "Color Themes"],
      color: "from-yellow-400 to-orange-600",
      bgColor: "bg-yellow-50",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      icon: HiHeart,
      title: "Birthday Celebrations",
      description: "Make birthdays unforgettable with colorful themes, balloon decorations, and party setups.",
      features: ["Balloon Arches", "Theme Decorations", "Cake Tables", "Photo Booths"],
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-50",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      icon: HiStar,
      title: "Corporate Events",
      description: "Professional setups for conferences, launches, and corporate celebrations.",
      features: ["Stage Setup", "Branding", "Audio Visual", "Professional Lighting"],
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-50",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      icon: HiGift,
      title: "Anniversary Decor",
      description: "Celebrate love milestones with romantic decorations and intimate lighting.",
      features: ["Romantic Themes", "Candle Arrangements", "Photo Displays", "Intimate Settings"],
      color: "from-red-400 to-pink-600",
      bgColor: "bg-red-50",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      icon: HiMusicNote,
      title: "Festival Celebrations",
      description: "Vibrant decorations and lighting for festivals and cultural celebrations.",
      features: ["Traditional Themes", "Cultural Decor", "Festival Lighting", "Rangoli Designs"],
      color: "from-green-400 to-teal-600",
      bgColor: "bg-green-50",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-royal-blue-200 to-royal-blue-300 rounded-full opacity-20 blur-3xl"></div>
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
            <HiColorSwatch className="text-gold-600 w-5 h-5" />
            <span className="text-gold-600 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Crafting Perfect Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring your vision to life with 
            exquisite decorations and stunning lighting solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Magic?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your dream event and bring it to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gold-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gold-600 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;