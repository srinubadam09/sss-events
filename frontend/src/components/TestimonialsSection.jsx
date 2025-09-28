import React from "react";
import { motion } from "framer-motion";
import { HiStar, HiQuoteLeft } from "react-icons/hi";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rajesh",
      event: "Wedding Celebration",
      rating: 5,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "Tenthouse made our wedding absolutely magical! The decorations were beyond our dreams, and the lighting created the perfect romantic ambiance. Every guest was amazed by the beautiful setup.",
      location: "Hyderabad"
    },
    {
      id: 2,
      name: "Anitha Reddy",
      event: "Birthday Party",
      rating: 5,
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "My daughter's 16th birthday was transformed into a fairy tale! The balloon decorations and theme setup were incredible. The team was professional and delivered exactly what we envisioned.",
      location: "Vijayawada"
    },
    {
      id: 3,
      name: "Suresh Kumar",
      event: "Corporate Event",
      rating: 5,
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "Outstanding service for our company's annual event! The stage setup and lighting were professional grade. Tenthouse understood our corporate requirements perfectly and delivered excellence.",
      location: "Guntur"
    },
    {
      id: 4,
      name: "Lakshmi & Venkat",
      event: "25th Anniversary",
      rating: 5,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "Our silver jubilee celebration was made special by Tenthouse. The elegant decorations and warm lighting created such a beautiful atmosphere. Thank you for making our day memorable!",
      location: "Nellore"
    },
    {
      id: 5,
      name: "Ramesh Babu",
      event: "Housewarming",
      rating: 5,
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "Perfect traditional decorations for our griha pravesh! The team understood our cultural requirements and created beautiful traditional setups. Highly recommended for authentic decorations.",
      location: "Ongole"
    },
    {
      id: 6,
      name: "Kavitha Sharma",
      event: "Festival Celebration",
      rating: 5,
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial: "Amazing work for our Diwali celebration! The lighting arrangements were spectacular and created such a festive mood. The attention to detail was impressive. Will definitely book again!",
      location: "Tirupati"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gold-200 to-gold-400 rounded-full opacity-5 blur-3xl"></div>
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
            <span className="text-gold-600 font-semibold">Client Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy clients have to say 
            about their magical experiences with Tenthouse
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <HiQuoteLeft className="w-8 h-8 text-gold-400" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                "{testimonial.testimonial}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-gold-400" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gold-300 text-sm">{testimonial.event}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-400/10 to-transparent rounded-bl-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Happy Events" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Own Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied clients who trusted us with their special moments
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Planning Your Event
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;