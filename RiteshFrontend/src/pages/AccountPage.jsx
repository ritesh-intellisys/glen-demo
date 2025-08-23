import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const AccountPage = ({ userEmail, onSignOut, onProfileClick }) => {
  const [activeTab, setActiveTab] = useState('LIVE');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH');
  const carouselRef = useRef(null);
  const languageButtonRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  const languages = [
    { code: 'ENGLISH', name: 'ENGLISH', flag: '🇺🇸' },
    { code: 'DEUTSCH', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ESPAÑOL', name: 'Español', flag: '🇪🇸' },
    { code: 'ITALIANO', name: 'Italiano', flag: '🇮🇹' },
    { code: 'TÜRKÇE', name: 'TÜRKÇE', flag: '🇹🇷' },
    { code: 'РУССКИЙ', name: 'Русский язык', flag: '🇷🇺' },
    { code: '中文', name: '中文', flag: '🇨🇳' },
    { code: '日本語', name: '日本語', flag: '🇯🇵' },
    { code: '한국어', name: '한국어', flag: '🇰🇷' },
    { code: 'ไทย', name: 'ภาษาไทย', flag: '🇹🇭' },
    { code: 'العربية', name: 'اللغة العربية', flag: '🇸🇦' },
    { code: 'فارسی', name: 'فارسی', flag: '🇮🇷' },
    { code: 'TIẾNG VIỆT', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'NEDERLANDS', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'ROMÂNĂ', name: 'Română', flag: '🇷🇴' },
    { code: 'MAGYAR', name: 'Magyar', flag: '🇭🇺' },
    { code: 'ΕΛΛΗΝΙΚΆ', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'SLOVENSKÝ', name: 'Slovenský', flag: '🇸🇰' },
    { code: 'PORTUGUÊS', name: 'Português', flag: '🇵🇹' }
  ];

    const liveOffers = [
    {
      title: "Glen Premium",
      status: "Live",
      icon: "star",
      initialDeposit: "0",
      leverage: "1:500",
      description: "Glen_B\\Premium",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "Glen Platinum", 
      status: "Live",
      icon: "diamond",
      initialDeposit: "0",
      leverage: "1:500",
      description: "Glen_B\\Platinum",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "50 % Deposit Bonus",
      status: "Live", 
      icon: "gift",
      initialDeposit: "0",
      leverage: "1:500",
      description: "Upto 3 deposits",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "UNUSED SCPL Account",
      status: "Live",
      icon: "settings",
      initialDeposit: "0",
      leverage: "1:300",
      description: "Special account type",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  const demoOffers = [
    {
      title: "demo\\forex-hedge-usd-01",
      status: "Demo",
      icon: "handshake",
      initialDeposit: "25000",
      leverage: "1:100",
      description: "demo\\forex-hedge-usd-01",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "demo\\forex-hedge-usd-02",
      status: "Demo", 
      icon: "handshake",
      initialDeposit: "10000",
      leverage: "1:100",
      description: "demo\\forex-hedge-usd-02",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  const currentOffers = activeTab === 'LIVE' ? liveOffers : demoOffers;

  const handlePrevious = () => {
    if (carouselRef.current) {
      const cardWidth = 227 + 20; // card width + gap (20% larger than current)
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = 227 + 20; // card width + gap (20% larger than current)
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const canNavigate = currentOffers.length > 1;

  // Function to render SVG icons
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'star':
        return (
          <svg className="w-full h-full text-golden" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      case 'diamond':
        return (
          <svg className="w-full h-full text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
      case 'gift':
        return (
          <svg className="w-full h-full text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M7.5 7a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>
          </svg>
        );
      case 'settings':
        return (
          <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        );
      case 'handshake':
        return (
          <svg className="w-full h-full text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L9 6.5l1.5 1.5 2.12-2.12a3.2 3.2 0 0 1 4.24 0l1.41 1.41a3.2 3.2 0 0 1 0 4.24L16.5 13.5l1.5 1.5 1.92-1.92a5.4 5.4 0 0 0 0-7.65z"/>
            <path d="M3.58 19.42a5.4 5.4 0 0 0 7.65 0L15 17.5l-1.5-1.5-2.12 2.12a3.2 3.2 0 0 1-4.24 0l-1.41-1.41a3.2 3.2 0 0 1 0-4.24L7.5 10.5 6 9l-1.92 1.92a5.4 5.4 0 0 0 0 7.65z"/>
            <path d="M14.54 13.54l-3.08-3.08"/>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
    }
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    // Check if click is outside language dropdown
    if (isLanguageDropdownOpen && languageButtonRef.current && !languageButtonRef.current.contains(event.target)) {
      // Check if click is on a portal dropdown (which is rendered to document.body)
      const languageDropdown = document.querySelector('[data-dropdown="language"]');
      if (!languageDropdown || !languageDropdown.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    }
    
    // Check if click is outside hamburger menu
    if (isHamburgerMenuOpen && hamburgerButtonRef.current && !hamburgerButtonRef.current.contains(event.target)) {
      // Check if click is on a portal dropdown (which is rendered to document.body)
      const hamburgerDropdown = document.querySelector('[data-dropdown="hamburger"]');
      if (!hamburgerDropdown || !hamburgerDropdown.contains(event.target)) {
        setIsHamburgerMenuOpen(false);
      }
    }
  };

  // Add event listener for clicking outside
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen, isHamburgerMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green via-forest-green/95 to-sky-blue/5">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-sky-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-forest-green/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-sky-blue/20 via-sky-blue/10 to-sky-blue/5 backdrop-blur-md border-b border-sky-blue/30 shadow-lg">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Left - Back Button */}
            <button className="group bg-sky-blue/10 hover:bg-sky-blue/20 p-2 rounded-lg transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Center - User Info */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-gradient-to-r from-sky-blue to-golden p-1 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">{userEmail}</span>
                <div className="bg-red-500/10 border border-red-500/10 rounded-full px-1.5 py-0.5 flex items-center">
  <span className="text-red-400 text-[0.6rem] font-medium">UNVERIFIED</span>
</div>

              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center space-x-2">
              <button className="group bg-sky-blue/10 hover:bg-sky-blue/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <svg className="w-3 h-3 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors text-xs font-medium">BECOME AN IB</span>
              </button>

              <button className="group bg-sky-blue/10 hover:bg-sky-blue/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <svg className="w-3 h-3 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors text-xs font-medium">REFRESH</span>
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  ref={languageButtonRef}
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="group bg-sky-blue/10 hover:bg-sky-blue/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-3 h-3 text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span className="text-white/80 group-hover:text-white transition-colors text-xs font-medium">{selectedLanguage}</span>
                  <svg className={`w-2.5 h-2.5 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''} text-white/80 group-hover:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Hamburger Menu */}
              <div className="relative">
                <button
                  ref={hamburgerButtonRef}
                  onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
                  className="group bg-sky-blue/10 hover:bg-sky-blue/20 p-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container-custom">
          {/* Offers Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-Silver to-gold bg-clip-text text-transparent mb-3">
                Offers
              </h1>

            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-sky-blue/20 to-sky-blue/10 backdrop-blur-md border border-sky-blue/30 rounded-xl p-1 shadow-lg">
                <button
                  onClick={() => {
                    setActiveTab('LIVE');
                    if (carouselRef.current) {
                      carouselRef.current.scrollLeft = 0;
                    }
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === 'LIVE'
                      ? 'bg-gradient-to-r from-golden to-amber-500 text-forest-green shadow-lg scale-105'
                      : 'text-white/80 hover:text-white hover:bg-sky-blue/20'
                    }`}
                >
                  LIVE ACCOUNTS
                </button>
                <button
                  onClick={() => {
                    setActiveTab('DEMO');
                    if (carouselRef.current) {
                      carouselRef.current.scrollLeft = 0;
                    }
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === 'DEMO'
                      ? 'bg-gradient-to-r from-golden to-amber-500 text-forest-green shadow-lg scale-105'
                      : 'text-white/80 hover:text-white hover:bg-sky-blue/20'
                    }`}
                >
                  DEMO ACCOUNTS
                </button>
              </div>
            </div>

            {/* Offers Carousel */}
            <div className="relative">
              {/* Navigation Arrows */}
              {canNavigate && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden rounded-full flex items-center justify-center text-forest-green transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden rounded-full flex items-center justify-center text-forest-green transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Offers Horizontal Row */}
              <div
                ref={carouselRef}
                className="flex space-x-5 px-20 py-7 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {currentOffers.map((offer, index) => (
                  <div key={index} className="group bg-gradient-to-br from-sky-blue/10 via-sky-blue/5 to-transparent backdrop-blur-md border border-sky-blue/30 rounded-xl p-4 relative min-w-[286px] max-w-[294px] flex-shrink-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-sky-blue/50">
                    {/* Gradient Background Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${offer.status === 'Live'
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                          : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg'
                        }`}>
                        {offer.status}
                      </span>
                    </div>

                                         {/* Title */}
                     <h3 className="text-base font-bold text-white mb-3 pr-16 text-center group-hover:text-golden transition-colors duration-300">{offer.title}</h3>

                     {/* Icon */}
                     <div className="w-12 h-12 mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                       {renderIcon(offer.icon)}
                     </div>

                     {/* Details */}
                     <div className="space-y-2.5 mb-4">
                       <div className="flex justify-between items-center bg-sky-blue/10 rounded-md p-2">
                         <span className="text-white/70 text-sm">Initial deposit:</span>
                         <span className="text-white font-bold text-sm">{offer.initialDeposit}</span>
                       </div>
                       <div className="flex justify-between items-center bg-sky-blue/10 rounded-md p-2">
                         <span className="text-white/70 text-sm">Leverage:</span>
                         <span className="text-white font-bold text-sm">{offer.leverage}</span>
                       </div>
                       <div className="flex justify-between items-center bg-sky-blue/10 rounded-md p-2">
                         <span className="text-white/70 text-sm">Description:</span>
                         <span className="text-white font-medium text-sm">{offer.description}</span>
                       </div>
                     </div>

                     {/* Action Button */}
                     <button className="w-full bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden text-forest-green font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform group-hover:shadow-2xl text-sm">
                       CREATE {activeTab} ACCOUNT
                     </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Download Platform Section */}
      <section className="bg-gradient-to-r from-sky-blue/10 via-sky-blue/5 to-transparent border-t border-sky-blue/30 backdrop-blur-md">
        <div className="container-custom py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-golden bg-clip-text text-transparent mb-3">
              Download Trading Platform
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-xl mx-auto">
              Access your trading accounts from anywhere with our powerful mobile and desktop applications
            </p>

            <div className="flex justify-center space-x-4 mb-6">
              {/* Apple */}
              <button className="group bg-gradient-to-br from-sky-blue/20 to-sky-blue/10 hover:from-sky-blue/30 hover:to-sky-blue/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-sky-blue/30">
                <svg className="w-6 h-6 text-white group-hover:text-golden transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>

              {/* Android */}
              <button className="group bg-gradient-to-br from-sky-blue/20 to-sky-blue/10 hover:from-sky-blue/30 hover:to-sky-blue/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-sky-blue/30">
                <svg className="w-6 h-6 text-white group-hover:text-golden transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2432 13.8533 7.5 12 7.5s-3.5902.7432-5.1377 1.9087L4.8401 5.9065a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676L5.1183 9.3214C2.1423 11.1868 0 14.9121 0 18.5v.5c0 .8284.6716 1.5 1.5 1.5h21c.8284 0 1.5-.6716 1.5-1.5v-.5c0-3.5879-2.1423-7.3132-5.1185-9.1786" />
                </svg>
              </button>

              {/* Windows */}
              <button className="group bg-gradient-to-br from-sky-blue/20 to-sky-blue/10 hover:from-sky-blue/30 hover:to-sky-blue/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-sky-blue/30">
                <svg className="w-6 h-6 text-white group-hover:text-golden transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.545L9.818 2.182v9.273H0V3.545zM10.909 2.182L24 0v11.455H10.909V2.182zM0 12.545h9.818V24L0 21.818V12.545zM10.909 12.545H24V24L10.909 21.818V12.545z" />
                </svg>
              </button>
            </div>

            <div className="bg-gradient-to-r from-sky-blue/20 to-golden/20 backdrop-blur-sm rounded-lg p-3 border border-sky-blue/30 inline-block">
              <p className="text-golden font-bold text-sm">support@glencapitals.com</p>
            </div>
          </div>
        </div>
      </section>

             {/* Sign Out Button */}
       <div className="fixed bottom-6 right-6">
         <button
           onClick={onSignOut}
           className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 shadow-lg"
         >
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
           </svg>
           <span className="font-semibold">Sign Out</span>
         </button>
       </div>

       {/* Portal Dropdowns */}
       {isLanguageDropdownOpen && languageButtonRef.current && createPortal(
         <div 
           data-dropdown="language"
           className="fixed z-[999999] w-64 bg-gradient-to-br from-forest-green to-forest-green/95 rounded-2xl shadow-2xl border border-sky-blue/30 max-h-80 overflow-y-auto backdrop-blur-md"
           style={{
             top: languageButtonRef.current.getBoundingClientRect().bottom + 12,
             left: languageButtonRef.current.getBoundingClientRect().right - 256,
           }}
         >
           {languages.map((language) => (
             <button
               key={language.code}
               onClick={(e) => {
                 e.stopPropagation(); // Prevent event bubbling
                 console.log('Language selected:', language.code);
                 setSelectedLanguage(language.code);
                 setIsLanguageDropdownOpen(false);
               }}
               className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-sky-blue/20 transition-all duration-300 ${selectedLanguage === language.code ? 'bg-gradient-to-r from-sky-blue/30 to-golden/30 text-golden' : 'text-white/80 hover:text-white'
                 } ${language.code === languages[0].code ? 'rounded-t-2xl' : ''} ${language.code === languages[languages.length - 1].code ? 'rounded-b-2xl' : ''}`}
             >
               <span className="text-lg">{language.flag}</span>
               <span className="font-medium">{language.name}</span>
               {selectedLanguage === language.code && (
                 <svg className="w-4 h-4 ml-auto text-golden" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                 </svg>
               )}
             </button>
           ))}
         </div>,
         document.body
       )}

       {isHamburgerMenuOpen && hamburgerButtonRef.current && createPortal(
         <div 
           data-dropdown="hamburger"
           className="fixed z-[999999] w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-md"
           style={{
             top: hamburgerButtonRef.current.getBoundingClientRect().bottom + 12,
             left: hamburgerButtonRef.current.getBoundingClientRect().right - 224,
           }}
         >
           <div className="py-3">
                         <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                console.log('Profile button clicked in hamburger menu');
                onProfileClick();
              }}
              className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-105 mx-2 rounded-xl"
            >
              Profile
            </button>
             <button className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-105 mx-2 rounded-xl">
               Security
             </button>
             <button className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-105 mx-2 rounded-xl">
               Become an IB
             </button>
             <button className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-105 mx-2 rounded-xl flex items-center space-x-2">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
               </svg>
               <span>Restart application</span>
             </button>
             <div className="border-t border-gray-200 my-2 mx-4"></div>
             <button
               onClick={onSignOut}
               className="w-full text-left px-4 py-3 text-gray-800 hover:bg-red-50 transition-all duration-300 hover:scale-105 mx-2 rounded-xl flex items-center space-x-2"
             >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
               <span>Sign Out</span>
             </button>
           </div>
         </div>,
         document.body
       )}
     </div>
   );
 };

export default AccountPage;
