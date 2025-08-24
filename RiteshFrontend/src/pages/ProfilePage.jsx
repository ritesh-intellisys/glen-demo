import React, { useState, useRef } from 'react';
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
    maritalStatus: 'single',
    qualification: 'bachelor',
    
    // Address details
    country: 'IN',
    state: 'Maharashtra',
    city: 'Mumbai',
    postalCode: '400001',
    streetAddress: '123 Main Street',
    
    // Document verification
    panDocument: null,
    aadharFront: null,
    aadharBack: null,
  });

  // Form state for bank info (keeping at the end as requested)
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

  // Arrays for dropdowns (matching SignUpPage)
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ];

  const qualificationOptions = [
    { value: 'high_school', label: 'High School' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'phd', label: 'PhD' },
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

  // Handle form data change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle file upload
  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  // Handle bank info change
  const handleBankInfoChange = (field, value) => {
    setBankInfo(prev => ({
      ...prev,
      [field]: value
    }));
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* PAN Document */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">PAN DOCUMENT</h3>
                  <div className="border-2 border-dashed border-accent-color rounded-xl p-6 hover:border-accent-color/70 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('panDocument', e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {formData.panDocument ? (
                      <div className="w-16 h-16 mx-auto mb-4 text-success-color">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-4 text-accent-color">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          <path d="M12 12v6m-3-3h6"/>
                        </svg>
                      </div>
                    )}
                    <p className="text-text-secondary text-sm">
                      {formData.panDocument ? formData.panDocument.name : 'Drag & drop to upload PAN'}
                    </p>
                  </div>
                </div>

                                 {/* Aadhar Front */}
                 <div className="text-center">
                   <h3 className="text-lg font-semibold text-text-primary mb-4">AADHAR FRONT</h3>
                   <div className="border-2 border-dashed border-accent-color rounded-xl p-6 hover:border-accent-color/70 transition-colors cursor-pointer relative">
                     <input
                       type="file"
                       accept="image/*"
                       onChange={(e) => handleFileUpload('aadharFront', e.target.files[0])}
                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                     />
                     {formData.aadharFront ? (
                       <div className="w-16 h-16 mx-auto mb-4 text-success-color">
                         <svg fill="currentColor" viewBox="0 0 24 24">
                           <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                         </svg>
                       </div>
                     ) : (
                       <div className="w-16 h-16 mx-auto mb-4 text-accent-color">
                         <svg fill="currentColor" viewBox="0 0 24 24">
                           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                           <path d="M12 12v6m-3-3h6"/>
                         </svg>
                       </div>
                     )}
                     <p className="text-text-secondary text-sm">
                       {formData.aadharFront ? formData.aadharFront.name : 'Drag & drop to upload Aadhar front'}
                     </p>
                   </div>
                 </div>

                                 {/* Aadhar Back */}
                 <div className="text-center">
                   <h3 className="text-lg font-semibold text-text-primary mb-4">AADHAR BACK</h3>
                   <div className="border-2 border-dashed border-accent-color rounded-xl p-6 hover:border-accent-color/70 transition-colors cursor-pointer relative">
                     <input
                       type="file"
                       accept="image/*"
                       onChange={(e) => handleFileUpload('aadharBack', e.target.files[0])}
                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                     />
                     {formData.aadharBack ? (
                       <div className="w-16 h-16 mx-auto mb-4 text-success-color">
                         <svg fill="currentColor" viewBox="0 0 24 24">
                           <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                         </svg>
                       </div>
                     ) : (
                       <div className="w-16 h-16 mx-auto mb-4 text-accent-color">
                         <svg fill="currentColor" viewBox="0 0 24 24">
                           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                           <path d="M12 12v6m-3-3h6"/>
                         </svg>
                       </div>
                     )}
                     <p className="text-text-secondary text-sm">
                       {formData.aadharBack ? formData.aadharBack.name : 'Drag & drop to upload Aadhar back'}
                     </p>
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
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    >
                      {genderOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
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
                                         <select
                       value={formData.mobileCode}
                       onChange={(e) => handleInputChange('mobileCode', e.target.value)}
                       className="w-16 px-2 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all text-center"
                       title={mobileCodes.find(code => code.value === formData.mobileCode)?.country}
                     >
                       {mobileCodes.map(code => (
                         <option key={code.value} value={code.value} title={code.country}>{code.label}</option>
                       ))}
                     </select>
                     <input
                       type="tel"
                       value={formData.mobileNumber}
                       onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                       className="flex-1 px-3 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                       placeholder="Enter mobile number"
                     />
                  </div>
                </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Marital Status</label>
                    <select
                      value={formData.maritalStatus}
                      onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    >
                      {maritalStatusOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Qualification</label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => handleInputChange('qualification', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    >
                      {qualificationOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
              </div>
            </section>

                         {/* Address Details Section */}
             <section className="mb-12">
               <h2 className="text-2xl font-bold text-accent-color mb-6">Address Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    >
                      {countries.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                  </div>
                                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full border-b-2 border-accent-color pb-2 focus:outline-none focus:border-accent-color/70 text-text-primary font-medium bg-transparent"
                    >
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
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
                                 <button className="bg-gradient-to-r from-accent-color to-primary-blue hover:from-primary-blue hover:to-accent-color text-text-quaternary font-semibold px-8 py-3 rounded-lg transition-colors">
                   SAVE CHANGES
                 </button>
              </div>
            </section>
          </div>
        </div>
      </main>

             {/* Download Platform Section */}
       <section className="bg-gradient-to-r from-accent-color/10 via-accent-color/5 to-transparent border-t border-border-color backdrop-blur-md">
         <div className="container-custom py-8">
           <div className="text-center">
             <h2 className="text-2xl font-bold bg-gradient-to-r from-text-primary to-accent-color bg-clip-text text-transparent mb-3">
               Download Trading Platform
             </h2>
             <p className="text-text-secondary text-sm mb-6 max-w-xl mx-auto">
               Access your trading accounts from anywhere with our powerful mobile and desktop applications
             </p>

             <div className="flex justify-center space-x-4 mb-6">
               {/* Apple */}
               <button className="group bg-gradient-to-br from-accent-color/20 to-accent-color/10 hover:from-accent-color/30 hover:to-accent-color/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border-color">
                 <svg className="w-6 h-6 text-text-primary group-hover:text-accent-color transition-colors" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                 </svg>
               </button>

               {/* Android */}
               <button className="group bg-gradient-to-br from-accent-color/20 to-accent-color/10 hover:from-accent-color/30 hover:to-accent-color/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border-color">
                 <svg className="w-6 h-6 text-text-primary group-hover:text-accent-color transition-colors" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2432 13.8533 7.5 12 7.5s-3.5902.7432-5.1377 1.9087L4.8401 5.9065a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676L5.1183 9.3214C2.1423 11.1868 0 14.9121 0 18.5v.5c0 .8284.6716 1.5 1.5 1.5h21c.8284 0 1.5-.6716 1.5-1.5v-.5c0-3.5879-2.1423-7.3132-5.1185-9.1786" />
                 </svg>
               </button>

               {/* Windows */}
               <button className="group bg-gradient-to-br from-accent-color/20 to-accent-color/10 hover:from-accent-color/30 hover:to-accent-color/20 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border-color">
                 <svg className="w-6 h-6 text-text-primary group-hover:text-accent-color transition-colors" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M0 3.545L9.818 2.182v9.273H0V3.545zM10.909 2.182L24 0v11.455H10.909V2.182zM0 12.545h9.818V24L0 21.818V12.545zM10.909 12.545H24V24L10.909 21.818V12.545z" />
                 </svg>
               </button>
             </div>

                             <div className="bg-gradient-to-r from-accent-color/20 to-primary-blue/20 backdrop-blur-sm rounded-lg p-3 border border-border-color inline-block">
               <p className="text-accent-color font-bold text-sm">support@protraders.com</p>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default ProfilePage;
