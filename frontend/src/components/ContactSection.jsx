import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiClock,
  HiChat,
  HiHeart
} from "react-icons/hi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Call Us",
      details: ["+91 9010791332", "+91 9618816011"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: HiMail,
      title: "Email Us",
      details: ["srinubadam85@gmail.com"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: HiLocationMarker,
      title: "Visit Us",
      details: ["Podili, Prakasam Dist", "Andhra Pradesh, 523240"],
      color: "from-red-400 to-red-600"
    },
    {
      icon: HiClock,
      title: "Working Hours",
      details: ["Mon - Sun: 9:00 AM - 9:00 PM", "24/7 Emergency Support"],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const eventTypes = [
    "Wedding", "Birthday Party", "Anniversary", "Corporate Event", 
    "Festival Celebration", "Housewarming", "Engagement", "Other"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-royal-blue-200 to-royal-blue-300 rounded-full opacity-20 blur-3xl"></div>
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
            <HiChat className="text-gold-600 w-5 h-5" />
            <span className="text-gold-600 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Let's Plan Your Dream Event
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to create magical moments? Get in touch with us today and let's bring 
            your vision to life with our expert decoration and lighting services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-purple-600/10"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <HiHeart className="text-gold-400 mr-3" />
                  Contact Information
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  We're here to help make your celebrations extraordinary. 
                  Reach out to us through any of these channels.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} mb-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                        ))}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone and Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300"
                    required
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 resize-none"
                  placeholder="Describe your event requirements, venue details, guest count, and any specific preferences..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message & Get Quote
              </motion.button>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919010791332"
                  className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-green-600 transition-colors duration-300"
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919010791332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-green-700 transition-colors duration-300"
                >
                  💬 WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;