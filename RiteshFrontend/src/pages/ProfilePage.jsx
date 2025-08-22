import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const ProfilePage = ({ userEmail, onSignOut, onBack }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH');
  const languageButtonRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  // Form state for personal details
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: ''
  });

  // Form state for address details
  const [addressDetails, setAddressDetails] = useState({
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    state: ''
  });

  // Form state for bank info
  const [bankInfo, setBankInfo] = useState({
    accountName: '',
    bankAccount: '',
    bankAddress: '',
    swiftCode: '',
    bankName: ''
  });

  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState({
    addressProof: null,
    identityProofFront: null,
    identityProofBack: null
  });

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

  // Handle file upload
  const handleFileUpload = (field, file) => {
    setUploadedFiles(prev => ({
      ...prev,
      [field]: file
    }));
  };

  // Handle personal details change
  const handlePersonalDetailsChange = (field, value) => {
    setPersonalDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle address details change
  const handleAddressDetailsChange = (field, value) => {
    setAddressDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle bank info change
  const handleBankInfoChange = (field, value) => {
    setBankInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
      setIsLanguageDropdownOpen(false);
    }
    if (isHamburgerMenuOpen && !event.target.closest('.hamburger-menu')) {
      setIsHamburgerMenuOpen(false);
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
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-blue/20 via-sky-blue/10 to-sky-blue/5 backdrop-blur-md border-b border-sky-blue/30 shadow-lg">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Left - Back Button */}
            <button 
              onClick={onBack}
              className="group bg-sky-blue/10 hover:bg-sky-blue/20 p-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
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

      {/* Profile Title Bar */}
      <div className="bg-gradient-to-r from-sky-blue/30 via-sky-blue/20 to-sky-blue/10 backdrop-blur-md border-b border-sky-blue/30">
        <div className="container-custom py-3">
          <h1 className="text-white text-xl font-bold text-center">Profile</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            
            {/* Verification Documents Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-golden mb-6">Verification documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address Proof */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ADDRESS PROOF</h3>
                  <div className="border-2 border-dashed border-golden rounded-xl p-6 hover:border-golden/70 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('addressProof', e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {uploadedFiles.addressProof ? (
                      <div className="w-16 h-16 mx-auto mb-4 text-green-500">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-4 text-golden">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          <path d="M12 12v6m-3-3h6"/>
                        </svg>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm">
                      {uploadedFiles.addressProof ? uploadedFiles.addressProof.name : 'Drag & drop to upload document'}
                    </p>
                  </div>
                </div>

                {/* Identity Proof Front */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">IDENTITY PROOF FRONT</h3>
                  <div className="border-2 border-dashed border-golden rounded-xl p-6 hover:border-golden/70 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('identityProofFront', e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {uploadedFiles.identityProofFront ? (
                      <div className="w-16 h-16 mx-auto mb-4 text-green-500">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-4 text-golden">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          <path d="M12 12v6m-3-3h6"/>
                        </svg>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm">
                      {uploadedFiles.identityProofFront ? uploadedFiles.identityProofFront.name : 'Drag & drop to upload document'}
                    </p>
                    <p className="text-red-500 text-xs mt-2">*Document required</p>
                  </div>
                </div>

                {/* Identity Proof Back */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">IDENTITY PROOF (BACK SIDE)</h3>
                  <div className="border-2 border-dashed border-golden rounded-xl p-6 hover:border-golden/70 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('identityProofBack', e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {uploadedFiles.identityProofBack ? (
                      <div className="w-16 h-16 mx-auto mb-4 text-green-500">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-4 text-golden">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          <path d="M12 12v6m-3-3h6"/>
                        </svg>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm">
                      {uploadedFiles.identityProofBack ? uploadedFiles.identityProofBack.name : 'Drag & drop to upload document'}
                    </p>
                    <p className="text-red-500 text-xs mt-2">*Document required</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Details Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-golden mb-6">Personal details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    value={personalDetails.firstName}
                    onChange={(e) => handlePersonalDetailsChange('firstName', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    value={personalDetails.lastName}
                    onChange={(e) => handlePersonalDetailsChange('lastName', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of birth</label>
                  <input
                    type="date"
                    value={personalDetails.dateOfBirth}
                    onChange={(e) => handlePersonalDetailsChange('dateOfBirth', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input
                    type="tel"
                    value={personalDetails.phoneNumber}
                    onChange={(e) => handlePersonalDetailsChange('phoneNumber', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </section>

            {/* Address Details Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-golden mb-6">Address details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street address</label>
                  <input
                    type="text"
                    value={addressDetails.streetAddress}
                    onChange={(e) => handleAddressDetailsChange('streetAddress', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter street address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={addressDetails.city}
                    onChange={(e) => handleAddressDetailsChange('city', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal/Zip code</label>
                  <input
                    type="text"
                    value={addressDetails.postalCode}
                    onChange={(e) => handleAddressDetailsChange('postalCode', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter postal/zip code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    value={addressDetails.country}
                    onChange={(e) => handleAddressDetailsChange('country', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    value={addressDetails.state}
                    onChange={(e) => handleAddressDetailsChange('state', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter state"
                  />
                </div>
              </div>
            </section>

            {/* Bank Info Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-golden mb-6">Bank info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account name</label>
                  <input 
                    type="text" 
                    value={bankInfo.accountName}
                    onChange={(e) => handleBankInfoChange('accountName', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter account name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank account</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankAccount}
                    onChange={(e) => handleBankInfoChange('bankAccount', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter bank account number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank address</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankAddress}
                    onChange={(e) => handleBankInfoChange('bankAddress', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter bank address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Swift code</label>
                  <input 
                    type="text" 
                    value={bankInfo.swiftCode}
                    onChange={(e) => handleBankInfoChange('swiftCode', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter swift code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank name</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankName}
                    onChange={(e) => handleBankInfoChange('bankName', e.target.value)}
                    className="w-full border-b-2 border-golden pb-2 focus:outline-none focus:border-golden/70 text-gray-900 font-medium bg-transparent"
                    placeholder="Enter bank name"
                  />
                </div>
              </div>
              
              {/* Save Button */}
              <div className="text-center mt-8">
                <button className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  SAVE
                </button>
              </div>
            </section>
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

      {/* Portal Dropdowns */}
      {isLanguageDropdownOpen && languageButtonRef.current && createPortal(
        <div 
          className="fixed z-[999999] w-64 bg-gradient-to-br from-forest-green to-forest-green/95 rounded-2xl shadow-2xl border border-sky-blue/30 max-h-80 overflow-y-auto backdrop-blur-md"
          style={{
            top: languageButtonRef.current.getBoundingClientRect().bottom + 12,
            left: languageButtonRef.current.getBoundingClientRect().right - 256,
          }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
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
          className="fixed z-[999999] w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-md"
          style={{
            top: hamburgerButtonRef.current.getBoundingClientRect().bottom + 12,
            left: hamburgerButtonRef.current.getBoundingClientRect().right - 224,
          }}
        >
          <div className="py-3">
            <button className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-105 mx-2 rounded-xl">
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

export default ProfilePage;
