import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          Our Services <span className="ml-3">🎉</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          We specialize in event decorations, lighting, and entertainment to make your occasions unforgettable! ✨
        </p>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Plastic Flower Decoration 🌸" description="Elegant and reusable artificial flower decorations." image="/services/plastic-flowers/sample.jpg" />
          <ServiceCard title="Natural Flower Decoration 🌿" description="Fresh floral arrangements for stunning event decor." image="/services/natural-flowers/sample.jpg" />
          <ServiceCard title="Balloon Decoration 🎈" description="Fun and creative balloon decor for all occasions." image="/services/balloon/sample.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Services;
