import React from "react";

const worksData = [
  { id: 1, title: "Wedding Decorations", image: "images/wedding.jpg" },
  { id: 2, title: "Balloon Decorations", image: "images/balloon.jpg" },
  { id: 3, title: "Car Decorations", image: "images/car.jpg" },
  { id: 4, title: "Haldi Decorations", image: "images/haldi.jpg" },
  { id: 5, title: "Natural Flower Decorations", image: "images/flower.jpg" },
  { id: 6, title: "Lighting & Stage Setup", image: "images/lighting.jpg" },
];

const OurWorks = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-orange-100 to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide">
          Our <span className="text-orange-500">Works</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take a look at our past projects and beautifully crafted event decorations.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:opacity-80"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
