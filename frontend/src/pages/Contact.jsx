import React from "react";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing Icons

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

        {/* Left: Contact Information */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
            Contact Us <span className="ml-3">📞</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Have questions or need to book an event? Get in touch with us today!  
            We’d love to make your celebrations **unforgettable** ✨🎉
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4 text-lg">
            <p className="flex items-center justify-center md:justify-start text-gray-700">
              <FaPhone className="text-yellow-500 text-2xl mr-3" /> +91 9010791332 , +91 9618816011
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-700">
              <FaEnvelope className="text-blue-500 text-2xl mr-3" /> srinubadam85@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-700">
              <FaMapMarkerAlt className="text-red-500 text-2xl mr-3" /> Podili, Prakasam Dist, Andhra Pradesh, 523240 🌍
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white shadow-lg p-8 rounded-lg">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;
