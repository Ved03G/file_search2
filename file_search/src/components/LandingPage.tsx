import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HardDrive,
  Database,
  Zap,
  Search,
  Globe,
  Menu,
  X,
} from "lucide-react";

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo & Primary Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Search className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">UniSearch</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 font-medium">
              About Us
            </Link>
          </nav>
        </div>

        {/* Center: Secondary Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">
            How It Works
          </a>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 ml-4"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              About Us
            </Link>
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              How It Works
            </a>
            <div className="pt-4 border-t">
              <Link
                to="/login"
                className="block w-full px-4 py-2 text-center text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full px-4 py-2 mt-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Landing Page Component ---
const LandingPage: React.FC = () => {
  // Typing animation state
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const sources = [
    "Local Files",
    "Google Drive",
    "Gmail",
    "OneDrive",
    "Dropbox",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingForward) {
        if (charIndex < sources[index].length) {
          setDisplayedText((prev) => prev + sources[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setTypingForward(false), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setTypingForward(true);
          setIndex((prev) => (prev + 1) % sources.length);
        }
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, typingForward, index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Features data
  const features = [
    {
      title: "Smart Search",
      desc: "AI-powered search helps you find files instantly, even across cloud storage.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Cloud Sync",
      desc: "Securely access and manage your files from anywhere, on any device.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Blazing Fast",
      desc: "Lightning-fast indexing ensures no delay in retrieving files.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Privacy First",
      desc: "Your data remains safe with industry-standard encryption.",
      icon: <Database className="w-6 h-6" />,
    },
  ];

  // Steps data for "How It Works"
  const steps = [
    {
      number: "1",
      icon: <HardDrive className="w-6 h-6" />,
      title: "Connect Storage",
      description: "Link local drives and cloud accounts securely.",
    },
    {
      number: "2",
      icon: <Database className="w-6 h-6" />,
      title: "Index Files",
      description: "Automated indexing with metadata extraction.",
    },
    {
      number: "3",
      icon: <Zap className="w-6 h-6" />,
      title: "Search & Find",
      description: "Instant search across all connected sources.",
    },
  ];

  return (
    // Top-level full-width container to remove horizontal scroll and justify content
    <div className="w-full overflow-x-hidden min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-b from-blue-50 to-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Search All Your Files in One Place
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Instantly find files across
            <span className="text-blue-600 font-semibold mx-2">
              {displayedText}
              {cursorVisible && <span className="animate-pulse">|</span>}
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Start Searching Free
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">UniSearch</span>
              </div>
              <p className="text-gray-400">
                Universal file search platform for all your storage needs.
              </p>
            </div>
            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UniSearch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
