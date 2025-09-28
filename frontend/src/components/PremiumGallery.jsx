import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight, HiHeart, HiShare, HiEye, HiZoomIn } from "react-icons/hi";

const PremiumGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [imageLoaded, setImageLoaded] = useState({});

  // Real gallery data with your actual images
  const galleryItems = [
    // Natural Flower Decorations
    { 
      id: 1, 
      image: "/natural/1.jpg", 
      title: "Natural Flower Wedding Decor", 
      category: "natural-flowers",
      description: "Exquisite natural flower arrangements for wedding ceremonies"
    },
    { 
      id: 2, 
      image: "/natural/2.jpg", 
      title: "Elegant Floral Setup", 
      category: "natural-flowers",
      description: "Beautiful natural flower decorations for special occasions"
    },
    { 
      id: 3, 
      image: "/natural/3.jpg", 
      title: "Premium Natural Arrangements", 
      category: "natural-flowers",
      description: "Stunning natural flower displays for luxury events"
    },
    { 
      id: 4, 
      image: "/natural/4.jpg", 
      title: "Traditional Flower Decor", 
      category: "natural-flowers",
      description: "Traditional natural flower decorations with cultural touch"
    },
    { 
      id: 5, 
      image: "/baloon/FB_IMG_1585048303200.jpg", 
      title: "Colorful Balloon Arch", 
      category: "balloon",
      description: "Vibrant balloon decorations for birthday celebrations"
    },
    { 
      id: 6, 
      image: "/baloon/IMG-20210212-WA0003.jpg", 
      title: "Birthday Balloon Setup", 
      category: "balloon",
      description: "Creative balloon arrangements for memorable birthdays"
    },
    { 
      id: 7, 
      image: "/haldi/20210616_042354.jpg", 
      title: "Haldi Ceremony Decor", 
      category: "haldi",
      description: "Traditional haldi ceremony decorations with marigold flowers"
    },
    { 
      id: 8, 
      image: "/entrance/FB_IMG_1585048276010.jpg", 
      title: "Grand Entrance Decor", 
      category: "entrance",
      description: "Magnificent entrance decorations for grand celebrations"
    },
    { 
      id: 9, 
      image: "/plastic/FB_IMG_1585048444120.jpg", 
      title: "Plastic Flower Arrangements", 
      category: "plastic-flowers",
      description: "Elegant plastic flower decorations for long-lasting beauty"
    },
    { 
      id: 10, 
      image: "/natural/5.jpg", 
      title: "Bridal Flower Setup", 
      category: "natural-flowers",
      description: "Romantic natural flower arrangements for bridal ceremonies"
    },
    { 
      id: 11, 
      image: "/baloon/IMG-20210917-WA0003.jpg", 
      title: "Party Balloon Decor", 
      category: "balloon",
      description: "Fun and festive balloon decorations for parties"
    },
    { 
      id: 12, 
      image: "/natural/6.jpg", 
      title: "Garden Wedding Flowers", 
      category: "natural-flowers",
      description: "Fresh garden-style flower arrangements for outdoor weddings"
    },
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "natural-flowers", name: "Natural Flowers", count: galleryItems.filter(item => item.category === "natural-flowers").length },
    { id: "balloon", name: "Balloon Decor", count: galleryItems.filter(item => item.category === "balloon").length },
    { id: "plastic-flowers", name: "Plastic Flowers", count: galleryItems.filter(item => item.category === "plastic-flowers").length },
    { id: "haldi", name: "Haldi Ceremony", count: galleryItems.filter(item => item.category === "haldi").length },
    { id: "entrance", name: "Entrance Decor", count: galleryItems.filter(item => item.category === "entrance").length },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gold-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-royal-blue-200 to-royal-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-100 to-gold-200 px-8 py-3 rounded-full mb-8 shadow-lg">
            <span className="text-gold-600 font-bold text-lg">✨ Our Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-royal-blue-800 to-gray-900 bg-clip-text text-transparent mb-8 font-serif">
            Gallery of Excellence
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our stunning collection of <span className="text-gold-600 font-semibold">decorations and lightings</span> that have transformed 
            countless celebrations into <span className="text-royal-blue-600 font-semibold">unforgettable memories</span>
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-500 text-lg shadow-lg ${
                filter === category.id
                  ? "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-xl shadow-gold-400/30 border-2 border-gold-300"
                  : "bg-white text-gray-700 hover:bg-gold-50 hover:text-gold-600 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-gold-300"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-80 font-medium">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer bg-white"
                onClick={() => openLightbox(item, index)}
              >
                {/* Image Container */}
                <div className="aspect-w-4 aspect-h-5 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-115 transition-transform duration-1000"
                    loading="lazy"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [item.id]: true }))}
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <h3 className="text-white text-2xl font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                      <span className="inline-flex items-center space-x-1 bg-gold-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <HiEye className="w-4 h-4" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-red-500/80 transition-colors duration-300 shadow-lg"
                    >
                      <HiHeart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/80 transition-colors duration-300 shadow-lg"
                    >
                      <HiZoomIn className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Enhanced Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white text-sm font-bold rounded-full shadow-lg backdrop-blur-sm border border-gold-300/50">
                      {item.category}
                    </span>
                  </div>

                  {/* Loading indicator */}
                  {!imageLoaded[item.id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 text-xl border-2 border-gold-300/50 hover:border-gold-200"
          >
            <span className="flex items-center space-x-2">
              <span>View Complete Gallery</span>
              <HiEye className="w-6 h-6" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-16 right-0 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-gold-400 hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <HiX className="w-8 h-8" />
              </button>

              {/* Enhanced Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-gold-400 hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <HiChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-gold-400 hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <HiChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />

              {/* Enhanced Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 rounded-b-2xl">
                <h3 className="text-white text-3xl font-bold mb-3 font-serif">{selectedImage.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{selectedImage.description}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="px-4 py-2 bg-gold-500/80 text-white rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PremiumGallery;