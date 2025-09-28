import React from "react";
import { FaUserTie } from "react-icons/fa"; // Importing Icons

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg">
          We are event decoration specialists who turn your dream celebrations into reality.  
          From stunning décor to dynamic DJ setups, we create unforgettable experiences.  
          Whether it's a wedding, birthday, or corporate event – we make it magical!
        </p>
      </div>

      {/* Owner Section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h3 className="text-3xl font-semibold text-gray-800 flex items-center justify-center">
          <FaUserTie className="text-green-600 text-3xl mr-3" /> Meet Our Founder
        </h3>

        {/* Owner Photo & Info */}
        <div className="mt-8 flex flex-col items-center">
          <img
            src="owner-photo.jpg" // Replace with actual owner photo
            alt="Sudhakar Reddy Badam"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-4 text-center">
            <h4 className="text-2xl font-bold text-gray-800">Sudhakar Reddy Badam</h4>
            <p className="text-gray-600 text-lg mt-2">
              Founder & Creative Director  
              Passionate about bringing joy through innovative decorations and event planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
