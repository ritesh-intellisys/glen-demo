import React, { useState, useRef, useEffect  } from 'react';
import Header from '../components/Header';


const ProfilePage = ({ userEmail, onSignOut, onBack, onProfileClick }) => {
  // Form state matching SignUpPage structure
  const [formData, setFormData] = useState({
    // Personal details
    fullName: 'Ritesh Jawale',
    fatherName: 'Father Name',
    motherName: 'Mother Name',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    mobileCode: '+91',
    mobileNumber: '9876543210',
    
    // Address details
    country: 'IN',
    state: 'Maharashtra',
    city: 'Mumbai',
    postalCode: '400001',
    streetAddress: '123 Main Street',
  });

  // Form state for bank info (keeping at the end as requested)
  const [bankInfo, setBankInfo] = useState({
    accountName: '',
    bankAccount: '',
    bankAddress: '',
    swiftCode: '',
    bankName: ''
  });

  // Document verification state
  const [uploadedFiles, setUploadedFiles] = useState({
    panDocument: null,
    aadharFront: null,
    aadharBack: null
  });

const [loading, setLoading] = useState(false);

  // Arrays for dropdowns (matching SignUpPage)
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];



  const countries = [
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'IN', label: 'India' },
    { value: 'CN', label: 'China' },
    { value: 'JP', label: 'Japan' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'AU', label: 'Australia' }
  ];

  const mobileCodes = [
    { value: '+1', label: '+1', country: 'United States' },
    { value: '+44', label: '+44', country: 'United Kingdom' },
    { value: '+91', label: '+91', country: 'India' },
    { value: '+86', label: '+86', country: 'China' },
    { value: '+81', label: '+81', country: 'Japan' },
    { value: '+49', label: '+49', country: 'Germany' },
    { value: '+33', label: '+33', country: 'France' },
    { value: '+61', label: '+61', country: 'Australia' }
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

 useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          alert("Please log in first");
          onSignOut();
          return;
        }

        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ₹{token}`,
          },
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setFormData(data.user);
        } else {
          alert(data.message || "Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [onSignOut]);

  // Handle form data change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
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

  // Handle file upload
  const handleFileUpload = (field, file) => {
    setUploadedFiles(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSaveProfile = async (e) => {
  e.preventDefault();
  setLoading(true);

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const form = new FormData();
  form.append("email", user.email);

  // Add personal details
  Object.keys(formData).forEach((key) => {
    form.append(key, formData[key]);
  });

  // Add bank info
  Object.keys(bankInfo).forEach((key) => {
    form.append(key, bankInfo[key]);
  });

  // Add uploaded documents
  Object.keys(uploadedFiles).forEach((key) => {
    if (uploadedFiles[key]) {
      form.append(key, uploadedFiles[key]);
    }
  });

  try {
    const res = await fetch("http://localhost:5000/api/profile/save", {
      method: "POST",
      headers: { Authorization: `Bearer ₹{token}` },
      body: form,
    });

    const data = await res.json();
    if (res.ok && data.success) {
      alert("✅ Profile saved successfully!");
    } else {
      alert(data.message || "Failed to save profile");
    }
  } catch (error) {
    console.error("Save Profile Error:", error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};



  

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      {/* Header */}
      <Header 
        userEmail={userEmail} 
        onSignOut={onSignOut} 
        onProfileClick={onProfileClick}
        onBack={onBack} 
        showBackButton={true}
        isAdmin={false}
      />

      {/* Profile Title Bar */}
      <div className="">
        <div className="container-custom py-3">
          <h1 className="text-text-primary text-xl font-bold text-center">Profile</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        <div className="container-custom">
          <div className="bg-card-bg rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            
            {/* Document Verification Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-accent-color mb-6">Document Verification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PAN Document */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text-secondary mb-2">PAN Document</label>
                  <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center hover:border-accent-color transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('panDocument', e.target.files[0])}
                      className="hidden"
                      id="panDocument"
                    />
                    <label htmlFor="panDocument" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-text-secondary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-text-secondary text-sm">
                          {uploadedFiles.panDocument ? uploadedFiles.panDocument.name : 'Click to upload PAN document'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Aadhar Front */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Aadhar Front Side</label>
                  <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center hover:border-accent-color transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('aadharFront', e.target.files[0])}
                      className="hidden"
                      id="aadharFront"
                    />
                    <label htmlFor="aadharFront" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-text-secondary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-text-secondary text-sm">
                          {uploadedFiles.aadharFront ? uploadedFiles.aadharFront.name : 'Click to upload Aadhar front'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Aadhar Back */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Aadhar Back Side</label>
                  <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center hover:border-accent-color transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('aadharBack', e.target.files[0])}
                      className="hidden"
                      id="aadharBack"
                    />
                    <label htmlFor="aadharBack" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-text-secondary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-text-secondary text-sm">
                          {uploadedFiles.aadharBack ? uploadedFiles.aadharBack.name : 'Click to upload Aadhar back'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Details Section */}
            <section className="mb-12">
               <h2 className="text-2xl font-bold text-accent-color mb-6">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                                     <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                   <input
                     type="text"
                     value={formData.fullName}
                     onChange={(e) => handleInputChange('fullName', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                     placeholder="Enter full name"
                   />
                </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Father Name</label>
                  <input
                    type="text"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      placeholder="Enter father's name"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Mother Name</label>
                  <input
                    type="text"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      placeholder="Enter mother's name"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Gender</label>
                    <div className="relative">
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="appearance-none w-full border-b-2 border-accent-color pb-2 pr-8 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      >
                        {genderOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Date of Birth</label>
                  <input
                    type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Mobile Number</label>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <select
                        value={formData.mobileCode}
                        onChange={(e) => handleInputChange('mobileCode', e.target.value)}
                        className="appearance-none w-16 px-2 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all text-center pr-6"
                        title={mobileCodes.find(code => code.value === formData.mobileCode)?.country}
                      >
                        {mobileCodes.map(code => (
                          <option key={code.value} value={code.value} title={code.country}>{code.label}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                        <svg className="w-3 h-3 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  <input
                    type="tel"
                       value={formData.mobileNumber}
                       onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                       className="flex-1 px-3 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                       placeholder="Enter mobile number"
                  />
                </div>
                </div>
              </div>
            </section>

            {/* Address Details Section */}
            <section className="mb-12">
               <h2 className="text-2xl font-bold text-accent-color mb-6">Address Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Country</label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="appearance-none w-full border-b-2 border-accent-color pb-2 pr-8 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      >
                        {countries.map(country => (
                          <option key={country.value} value={country.value}>{country.label}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">State</label>
                    <div className="relative">
                      <select
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="appearance-none w-full border-b-2 border-accent-color pb-2 pr-8 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      >
                        {indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">City</label>
                  <input
                    type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Postal Code</label>
                  <input
                    type="text"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      placeholder="Enter postal code"
                  />
                </div>
                                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-2">Street Address</label>
                  <input
                    type="text"
                      value={formData.streetAddress}
                      onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                      placeholder="Enter street address"
                  />
                </div>
              </div>
            </section>

                         {/* Bank Info Section (keeping at the end as requested) */}
            <section className="mb-8">
               <h2 className="text-2xl font-bold text-accent-color mb-6">Bank Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-text-secondary mb-2">Account name</label>
                  <input 
                    type="text" 
                    value={bankInfo.accountName}
                    onChange={(e) => handleBankInfoChange('accountName', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter account name"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-text-secondary mb-2">Bank account</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankAccount}
                    onChange={(e) => handleBankInfoChange('bankAccount', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter bank account number"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-text-secondary mb-2">Bank address</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankAddress}
                    onChange={(e) => handleBankInfoChange('bankAddress', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter bank address"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-text-secondary mb-2">Swift code</label>
                  <input 
                    type="text" 
                    value={bankInfo.swiftCode}
                    onChange={(e) => handleBankInfoChange('swiftCode', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter swift code"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-text-secondary mb-2">Bank name</label>
                  <input 
                    type="text" 
                    value={bankInfo.bankName}
                    onChange={(e) => handleBankInfoChange('bankName', e.target.value)}
                     className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    placeholder="Enter bank name"
                  />
                </div>
              </div>
              
              {/* Save Button */}
              <div className="text-center mt-8">
              <button
                onClick={handleSaveProfile}
                disabled={loading}
                className={`bg-gradient-to-r from-accent-color to-primary-blue hover:from-primary-blue hover:to-accent-color text-text-quaternary font-semibold px-8 py-3 rounded-lg transition-colors ₹{
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Saving..." : "SAVE CHANGES"}
              </button>
            </div>
            </section>
          </div>
        </div>
      </main>

    
      {/* Support Footer (simplified) */}
      <section className="bg-gradient-to-r from-accent-color/10 via-accent-color/5 to-transparent border-t border-border-color backdrop-blur-md">
        <div className="container-custom py-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-accent-color/20 to-primary-blue/20 backdrop-blur-sm rounded-lg p-3 border border-border-color inline-block">
              <p className="text-accent-color font-bold text-sm">support@expressforex.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Out Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={onSignOut}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-semibold text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
