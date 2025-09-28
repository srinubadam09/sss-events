import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import PremiumGallery from "../components/PremiumGallery";
import ServicesSection from "../components/ServicesSection";
import PackagesSection from "../components/PackagesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
      offset: 100
    });
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Premium Gallery Section - Moved to top priority */}
      <PremiumGallery />

      {/* Services Section */}
      <ServicesSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

export default Home;