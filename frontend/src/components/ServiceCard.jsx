import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Service Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      
      {/* Service Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
