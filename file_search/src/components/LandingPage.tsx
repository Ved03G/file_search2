import React, { useState } from 'react';
import { Search, Cloud, HardDrive, Filter, Database, Zap, Globe, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left section: Logo and primary navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Search className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">UniSearch</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
            </nav>
          </div>

          {/* Center section: Feature links */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          </nav>

          {/* Right section: Auth buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 border border-transparent hover:border-blue-600 rounded-lg transition-all">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-2">
              <a href="/" className="py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="/about" className="py-2 text-gray-600 hover:text-blue-600">About Us</a>
              <a href="#features" className="py-2 text-gray-600 hover:text-blue-600">Features</a>
              <a href="#how-it-works" className="py-2 text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#pricing" className="py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <div className="flex flex-col space-y-2 pt-2 border-t mt-2">
                <button className="py-2 text-gray-600 hover:text-blue-600">Login</button>
                <button className="py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main content wrapper with custom scrolling */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Search All Your Files From One Place
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
                Instantly find any file across your local storage, cloud services, and platforms
                with our powerful multi-index search engine.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                <button className="px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Start Searching
                </button>
                <button className="px-6 sm:px-8 py-4 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Powerful Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={<Globe />}
                title="Universal Search"
                description="Search across multiple platforms and storage services simultaneously."
              />
              <FeatureCard
                icon={<Database />}
                title="Smart Indexing"
                description="Advanced metadata indexing for faster and more accurate results."
              />
              <FeatureCard
                icon={<Filter />}
                title="Advanced Filters"
                description="Filter by file type, date, size, and custom metadata tags."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Step
                number="1"
                title="Connect Your Storage"
                description="Link your local drives and cloud storage accounts securely."
                icon={<HardDrive />}
              />
              <Step
                number="2"
                title="Index Your Files"
                description="Our system indexes your files and extracts metadata for better search."
                icon={<Database />}
              />
              <Step
                number="3"
                title="Search & Find"
                description="Use our powerful search to find any file instantly."
                icon={<Zap />}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="w-6 h-6" />
                  <span className="text-lg font-bold">UniSearch</span>
                </div>
                <p className="text-gray-400">
                  Universal file search platform for all your storage needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                  <li><a href="#" className="hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 UniSearch. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

// Rest of the components remain the same
const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Step = ({ number, title, description, icon }: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;