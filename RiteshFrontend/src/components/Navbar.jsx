import React, { useState, useEffect } from 'react';
import TickerTape from '../widgets/TickerTape';

const Navbar = ({ onSignInClick, onAboutUsClick, onContactUsClick, onHomeClick, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketData = [
    { instrument: 'US 100', value: '18,234.50', change: '+0.45%', isPositive: true },
    { instrument: 'EUR/USD', value: '1.0856', change: '-0.12%', isPositive: false },
    { instrument: 'Bitcoin', value: '$43,250', change: '+2.34%', isPositive: true },
    { instrument: 'Gold', value: '$2,045', change: '+0.78%', isPositive: true },
  ];

  const handleHomeClick = () => {
    if (currentPage !== 'home') {
      onHomeClick();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Market Data Ticker */}
      <TickerTape />

      {/* Main Navigation */}
      <div className="bg-card-bg/95 backdrop-blur-md border-b border-border-color">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHomeClick}>
              <div className="w-10 h-10 bg-gradient-to-br from-accent-color to-primary-blue rounded-xl flex items-center justify-center">
                <span className="text-text-quaternary font-bold text-lg">PT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">Pro Traders</h1>
                <p className="text-xs text-text-secondary">Your Trusted Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className={`font-semibold relative ${
                  currentPage === 'home' ? 'text-accent-color' : 'text-text-secondary hover:text-accent-color'
                } transition-colors`}
              >
                Home
                {currentPage === 'home' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-color to-primary-blue"></div>
                )}
              </button>
              <button 
                onClick={onAboutUsClick}
                className={`font-medium relative ${
                  currentPage === 'aboutus' ? 'text-accent-color' : 'text-text-secondary hover:text-accent-color'
                } transition-colors`}
              >
                About Us
                {currentPage === 'aboutus' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-color to-primary-blue"></div>
                )}
              </button>
              <button 
                onClick={onContactUsClick}
                className={`font-medium relative ${
                  currentPage === 'contactus' ? 'text-accent-color' : 'text-text-secondary hover:text-accent-color'
                } transition-colors`}
              >
                Contact
                {currentPage === 'contactus' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-color to-primary-blue"></div>
                )}
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={onSignInClick}
                className="bg-accent-color text-text-quaternary font-semibold px-6 py-3 rounded-xl hover:bg-accent-color/90 transition-colors"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent-color/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border-color">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={handleHomeClick}
                  className={`text-left font-semibold ${
                    currentPage === 'home' ? 'text-accent-color' : 'text-text-secondary'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={onAboutUsClick}
                  className={`text-left font-medium ${
                    currentPage === 'aboutus' ? 'text-accent-color' : 'text-text-secondary'
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={onContactUsClick}
                  className={`text-left font-medium ${
                    currentPage === 'contactus' ? 'text-accent-color' : 'text-text-secondary'
                  }`}
                >
                  Contact
                </button>
                <button 
                  onClick={onSignInClick}
                  className="bg-accent-color text-text-quaternary font-semibold px-6 py-3 rounded-xl hover:bg-accent-color/90 transition-colors w-full mt-4"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;