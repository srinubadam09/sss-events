import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import UploadForm from "../components/UploadForm";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Background Wrapper for the Rest of the Page */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10">
          {/* Welcome Section */}
          <section className="py-16 px-6 text-center bg-transparent">
            <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-down">
              Welcome to SSS Events
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed" data-aos="fade-up">
              SSS is a wedding designing and event planning company, set up almost three decades ago with an extensive in-house production facility. From idea to reality, from fabric to upholstery, and from flowers to lighting, we bring your dream event to life.
            </p>
          </section>

          {/* Upload Section */}
          <section className="py-16 text-center bg-transparent">
            <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
              Upload an Image
            </h2>
            <UploadForm />
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-16 px-6 text-center bg-transparent">
            <h2 className="text-4xl font-bold text-white mb-10" data-aos="fade-up">
              Our Event Gallery
            </h2>
            <Gallery />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
