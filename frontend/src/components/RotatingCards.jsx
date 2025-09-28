import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { title: "Decorations", img: "/x.jpeg", desc: "We provide stunning decor for all your events." },
  { title: "Lighting", img: "/y.jpeg", desc: "Perfect lighting to set the mood." },
  { title: "DJ Setup", img: "/z.jpeg", desc: "High-quality sound and DJ services." },
];

const ServiceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <h2 className="text-4xl font-bold text-white mb-10" data-aos="fade-up">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-80 bg-black bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 text-white"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Staggered animation effect
          >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />

            {/* Description */}
            <p className="text-lg mt-4">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
