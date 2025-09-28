import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiPhone, HiMail } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gold-200/30" 
        : "bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-22">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                className={`h-12 w-auto sm:h-14 rounded-full transition-all duration-500 ${
                  scrolled 
                    ? "border-2 border-gold-400 shadow-lg" 
                    : "border-2 border-gold-300/70 shadow-xl"
                }`}
                src="logo.png"
                alt="Tenthouse Logo"
              />
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold transition-colors duration-500 font-serif ${
                  scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                }`}>
                  Tenthouse
                </h1>
                <p className={`text-sm transition-colors duration-500 ${
                  scrolled ? "text-gold-600 font-medium" : "text-gold-200 drop-shadow-md"
                }`}>
                  Decorations & Lightings
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`px-5 py-3 rounded-full text-base font-semibold transition-all duration-500 relative overflow-hidden ${
                      location.pathname === item.path
                        ? scrolled
                          ? "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-lg border border-gold-300"
                          : "bg-white/25 text-white border border-white/40 backdrop-blur-sm shadow-lg"
                        : scrolled
                          ? "text-gray-700 hover:text-gold-600 hover:bg-gold-50 hover:shadow-md"
                          : "text-white hover:text-gold-200 hover:bg-white/15 backdrop-blur-sm"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919010791332"
                className={`p-3 rounded-full transition-all duration-500 ${
                  scrolled
                    ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
                }`}
              >
                <HiPhone className="w-5 h-5" />
              </motion.a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-500 text-base border border-gold-300/50 hover:border-gold-200"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-full transition-all duration-500 ${
                scrolled
                  ? "text-gray-700 hover:text-gold-600 hover:bg-gold-50"
                  : "text-white hover:text-gold-300 bg-white/10 backdrop-blur-sm border border-white/30"
              }`}
            >
              {isOpen ? (
                <HiX className="block h-7 w-7" />
              ) : (
                <HiMenu className="block h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="md:hidden bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gold-200/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.name === "Home" ? 0 : 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-gold-600 hover:bg-gold-50 hover:shadow-md"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Contact Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919010791332"
                  className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <HiPhone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
                <Link to="/contact">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;