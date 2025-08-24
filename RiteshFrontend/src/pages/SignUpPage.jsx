import React, { useState } from 'react';

const SignUpPage = ({ onSignUp, onBackToSignIn }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Account type
    accountType: 'Pro Premium',
    email: '',
    password: '',
    repeatPassword: '',
    emailOtp: '',
    emailVerified: false,
    
    // Step 2: Personal details
    fullName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    dateOfBirth: '',
    mobileCode: '+91',
    mobileNumber: '',
    mobileOtp: '',
    mobileVerified: false,
    maritalStatus: '',
    qualification: '',
    
    // Step 3: Address details
    country: '',
    state: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    
    // Step 4: Document verification
    panDocument: null,
    aadharFront: null,
    aadharBack: null,
    
    // Step 5: Terms and conditions
    termsAccepted: false,
    privacyAccepted: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [emailOtpTimer, setEmailOtpTimer] = useState(0);
  const [mobileOtpTimer, setMobileOtpTimer] = useState(0);

  const steps = [
    { title: 'Account type', description: 'Choose your account type and create credentials' },
    { title: 'Personal details', description: 'Enter your personal information' },
    { title: 'Address details', description: 'Provide your address information' },
    { title: 'Document Verification', description: 'Upload required documents' },
    { title: 'Terms and Conditions', description: 'Review and accept terms' }
  ];

  const accountTypes = [
    { value: 'Pro Premium', label: 'Pro Premium' },
    { value: 'Pro Standard', label: 'Pro Standard' },
    { value: 'Pro Elite', label: 'Pro Elite' }
  ];

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
    { value: 'AP', label: 'Andhra Pradesh' },
    { value: 'AR', label: 'Arunachal Pradesh' },
    { value: 'AS', label: 'Assam' },
    { value: 'BR', label: 'Bihar' },
    { value: 'CT', label: 'Chhattisgarh' },
    { value: 'GA', label: 'Goa' },
    { value: 'GJ', label: 'Gujarat' },
    { value: 'HR', label: 'Haryana' },
    { value: 'HP', label: 'Himachal Pradesh' },
    { value: 'JH', label: 'Jharkhand' },
    { value: 'KA', label: 'Karnataka' },
    { value: 'KL', label: 'Kerala' },
    { value: 'MP', label: 'Madhya Pradesh' },
    { value: 'MH', label: 'Maharashtra' },
    { value: 'MN', label: 'Manipur' },
    { value: 'ML', label: 'Meghalaya' },
    { value: 'MZ', label: 'Mizoram' },
    { value: 'NL', label: 'Nagaland' },
    { value: 'OR', label: 'Odisha' },
    { value: 'PB', label: 'Punjab' },
    { value: 'RJ', label: 'Rajasthan' },
    { value: 'SK', label: 'Sikkim' },
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'TG', label: 'Telangana' },
    { value: 'TR', label: 'Tripura' },
    { value: 'UP', label: 'Uttar Pradesh' },
    { value: 'UT', label: 'Uttarakhand' },
    { value: 'WB', label: 'West Bengal' },
    { value: 'AN', label: 'Andaman and Nicobar Islands' },
    { value: 'CH', label: 'Chandigarh' },
    { value: 'DN', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: 'DL', label: 'Delhi' },
    { value: 'JK', label: 'Jammu and Kashmir' },
    { value: 'LA', label: 'Ladakh' },
    { value: 'LD', label: 'Lakshadweep' },
    { value: 'PY', label: 'Puducherry' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
    // Clear error when user uploads a file
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // OTP Functions
  const sendEmailOtp = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      return;
    }
    
    // Dummy OTP sending - replace with actual API call
    setEmailOtpSent(true);
    setEmailOtpTimer(60);
    const timer = setInterval(() => {
      setEmailOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendMobileOtp = () => {
    if (!formData.mobileNumber || formData.mobileNumber.length < 10) {
      setErrors(prev => ({ ...prev, mobileNumber: 'Please enter a valid mobile number' }));
      return;
    }
    
    // Dummy OTP sending - replace with actual API call
    setMobileOtpSent(true);
    setMobileOtpTimer(60);
    const timer = setInterval(() => {
      setMobileOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const verifyEmailOtp = () => {
    if (!formData.emailOtp || formData.emailOtp.length !== 6) {
      setErrors(prev => ({ ...prev, emailOtp: 'Please enter a valid 6-digit OTP' }));
      return;
    }
    
    // Dummy verification - accept any 6-digit OTP
    setFormData(prev => ({ ...prev, emailVerified: true }));
    setErrors(prev => ({ ...prev, emailOtp: '' }));
  };

  const verifyMobileOtp = () => {
    if (!formData.mobileOtp || formData.mobileOtp.length !== 6) {
      setErrors(prev => ({ ...prev, mobileOtp: 'Please enter a valid 6-digit OTP' }));
      return;
    }
    
    // Dummy verification - accept any 6-digit OTP
    setFormData(prev => ({ ...prev, mobileVerified: true }));
    setErrors(prev => ({ ...prev, mobileOtp: '' }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0: // Account type
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.emailVerified) newErrors.emailVerified = 'Please verify your email with OTP';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (!formData.repeatPassword) newErrors.repeatPassword = 'Please repeat your password';
        else if (formData.password !== formData.repeatPassword) newErrors.repeatPassword = 'Passwords do not match';
        break;

      case 1: // Personal details
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
        if (!formData.motherName) newErrors.motherName = 'Mother name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
        else if (formData.mobileNumber.length < 10) newErrors.mobileNumber = 'Please enter a valid mobile number';
        if (!formData.mobileVerified) newErrors.mobileVerified = 'Please verify your mobile number with OTP';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        if (!formData.qualification) newErrors.qualification = 'Qualification is required';
        break;

      case 2: // Address details
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
        if (!formData.streetAddress) newErrors.streetAddress = 'Full address is required';
        break;

      case 3: // Document verification
        if (!formData.panDocument) newErrors.panDocument = 'PAN document is required';
        if (!formData.aadharFront) newErrors.aadharFront = 'Aadhar front side is required';
        if (!formData.aadharBack) newErrors.aadharBack = 'Aadhar back side is required';
        break;

      case 4: // Terms and conditions
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
        if (!formData.privacyAccepted) newErrors.privacyAccepted = 'You must accept the privacy policy';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Final step - submit the form
        handleSubmit();
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    onSignUp(formData.email);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Offers</label>
              <select
                value={formData.accountType}
                onChange={(e) => handleInputChange('accountType', e.target.value)}
                className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
              >
                {accountTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

                         <div>
               <label className="block text-sm font-medium text-text-secondary mb-2">Your email</label>
               <div className="flex space-x-2">
                 <input
                   type="email"
                   value={formData.email}
                   onChange={(e) => handleInputChange('email', e.target.value)}
                   className="flex-1 px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                   placeholder="Enter your email"
                 />
                 <button
                   type="button"
                   onClick={sendEmailOtp}
                   disabled={emailOtpSent && emailOtpTimer > 0}
                   className="px-4 py-3 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                 >
                   {emailOtpSent && emailOtpTimer > 0 ? `${emailOtpTimer}s` : 'Send OTP'}
                 </button>
               </div>
               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
               
               {emailOtpSent && (
                 <div className="mt-4 space-y-3">
                   <div className="flex space-x-2">
                     <input
                       type="text"
                       value={formData.emailOtp}
                       onChange={(e) => handleInputChange('emailOtp', e.target.value)}
                       className="flex-1 px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                       placeholder="Enter 6-digit OTP"
                       maxLength={6}
                     />
                     <button
                       type="button"
                       onClick={verifyEmailOtp}
                       className="px-4 py-3 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 transition-colors text-sm whitespace-nowrap"
                     >
                       Verify
                     </button>
                   </div>
                   {formData.emailVerified && (
                     <div className="flex items-center text-green-600 text-sm">
                       <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                       Email verified successfully
                     </div>
                   )}
                   {errors.emailOtp && <p className="text-red-500 text-sm">{errors.emailOtp}</p>}
                   {errors.emailVerified && <p className="text-red-500 text-sm">{errors.emailVerified}</p>}
                 </div>
               )}
             </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all pr-12"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Repeat password</label>
                <div className="relative">
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    value={formData.repeatPassword}
                    onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
                    className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all pr-12"
                    placeholder="Repeat password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary"
                  >
                    {showRepeatPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.repeatPassword && <p className="text-red-500 text-sm mt-1">{errors.repeatPassword}</p>}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Father Name</label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange('fatherName', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                  placeholder="Enter father's name"
                />
                {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Mother Name</label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => handleInputChange('motherName', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                  placeholder="Enter mother's name"
                />
                {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                >
                  <option value="">Select gender</option>
                  {genderOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>
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
                 <button
                   type="button"
                   onClick={sendMobileOtp}
                   disabled={mobileOtpSent && mobileOtpTimer > 0}
                   className="px-3 py-3 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                 >
                   {mobileOtpSent && mobileOtpTimer > 0 ? `${mobileOtpTimer}s` : 'Send OTP'}
                 </button>
               </div>
               {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
               
               {mobileOtpSent && (
                 <div className="mt-4 space-y-3">
                   <div className="flex space-x-2">
                     <input
                       type="text"
                       value={formData.mobileOtp}
                       onChange={(e) => handleInputChange('mobileOtp', e.target.value)}
                       className="flex-1 px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                       placeholder="Enter 6-digit OTP"
                       maxLength={6}
                     />
                     <button
                       type="button"
                       onClick={verifyMobileOtp}
                       className="px-4 py-3 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 transition-colors text-sm whitespace-nowrap"
                     >
                       Verify
                     </button>
                   </div>
                   {formData.mobileVerified && (
                     <div className="flex items-center text-green-600 text-sm">
                       <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                       Mobile number verified successfully
                     </div>
                   )}
                   {errors.mobileOtp && <p className="text-red-500 text-sm">{errors.mobileOtp}</p>}
                   {errors.mobileVerified && <p className="text-red-500 text-sm">{errors.mobileVerified}</p>}
                 </div>
               )}
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-medium text-text-secondary mb-2">Marital Status</label>
                 <select
                   value={formData.maritalStatus}
                   onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                   className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                 >
                   <option value="">Select marital status</option>
                   {maritalStatusOptions.map(option => (
                     <option key={option.value} value={option.value}>{option.label}</option>
                   ))}
                 </select>
                 {errors.maritalStatus && <p className="text-red-500 text-sm mt-1">{errors.maritalStatus}</p>}
               </div>

               <div>
                 <label className="block text-sm font-medium text-text-secondary mb-2">Qualification</label>
                 <select
                   value={formData.qualification}
                   onChange={(e) => handleInputChange('qualification', e.target.value)}
                   className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                 >
                   <option value="">Select qualification</option>
                   {qualificationOptions.map(option => (
                     <option key={option.value} value={option.value}>{option.label}</option>
                   ))}
                 </select>
                 {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
               </div>
             </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Qualification</label>
              <select
                value={formData.qualification}
                onChange={(e) => handleInputChange('qualification', e.target.value)}
                className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
              >
                <option value="">Select qualification</option>
                {qualificationOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                >
                  <option value="">Select country</option>
                  {countries.map(country => (
                    <option key={country.value} value={country.value}>{country.label}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

                             <div>
                 <label className="block text-sm font-medium text-text-secondary mb-2">State</label>
                 <select
                   value={formData.state}
                   onChange={(e) => handleInputChange('state', e.target.value)}
                   className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                 >
                   <option value="">Select state</option>
                   {indianStates.map(state => (
                     <option key={state.value} value={state.value}>{state.label}</option>
                   ))}
                 </select>
                 {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                  placeholder="Enter city"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Postal/Zip code</label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                  placeholder="Enter postal code"
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Full address</label>
              <input
                type="text"
                value={formData.streetAddress}
                onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color/50 focus:border-transparent transition-all"
                placeholder="Enter Full address"
              />
              {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>}
            </div>
          </div>
                 );

       case 3:
         return (
           <div className="space-y-6">
             <div>
               <label className="block text-sm font-medium text-text-secondary mb-2">PAN Document</label>
               <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center hover:border-accent-color/50 transition-colors">
                 <input
                   type="file"
                   accept="image/*"
                   onChange={(e) => handleFileUpload('panDocument', e.target.files[0])}
                   className="hidden"
                   id="panDocument"
                 />
                 <label htmlFor="panDocument" className="cursor-pointer">
                   <div className="space-y-2">
                     <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                       <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <div className="text-sm text-text-secondary">
                       <span className="font-medium text-accent-color hover:text-accent-color/80">Click to upload</span> or drag and drop
                     </div>
                     <p className="text-xs text-text-secondary">PNG, JPG, JPEG up to 10MB</p>
                   </div>
                 </label>
               </div>
               {formData.panDocument && (
                 <div className="mt-2 text-sm text-text-secondary">
                   Selected: {formData.panDocument.name}
                 </div>
               )}
               {errors.panDocument && <p className="text-red-500 text-sm mt-1">{errors.panDocument}</p>}
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-medium text-text-secondary mb-2">Aadhar Front Side</label>
                 <div className="border-2 border-dashed border-border-color rounded-lg p-4 text-center hover:border-accent-color/50 transition-colors">
                   <input
                     type="file"
                     accept="image/*"
                     onChange={(e) => handleFileUpload('aadharFront', e.target.files[0])}
                     className="hidden"
                     id="aadharFront"
                   />
                   <label htmlFor="aadharFront" className="cursor-pointer">
                     <div className="space-y-2">
                       <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                         <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                       <div className="text-xs text-text-secondary">
                         <span className="font-medium text-accent-color hover:text-accent-color/80">Upload</span>
                       </div>
                     </div>
                   </label>
                 </div>
                 {formData.aadharFront && (
                   <div className="mt-2 text-xs text-text-secondary">
                     Selected: {formData.aadharFront.name}
                   </div>
                 )}
                 {errors.aadharFront && <p className="text-red-500 text-sm mt-1">{errors.aadharFront}</p>}
               </div>

               <div>
                 <label className="block text-sm font-medium text-text-secondary mb-2">Aadhar Back Side</label>
                 <div className="border-2 border-dashed border-border-color rounded-lg p-4 text-center hover:border-accent-color/50 transition-colors">
                   <input
                     type="file"
                     accept="image/*"
                     onChange={(e) => handleFileUpload('aadharBack', e.target.files[0])}
                     className="hidden"
                     id="aadharBack"
                   />
                   <label htmlFor="aadharBack" className="cursor-pointer">
                     <div className="space-y-2">
                       <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                         <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                       <div className="text-xs text-text-secondary">
                         <span className="font-medium text-accent-color hover:text-accent-color/80">Upload</span>
                       </div>
                     </div>
                   </label>
                 </div>
                 {formData.aadharBack && (
                   <div className="mt-2 text-xs text-text-secondary">
                     Selected: {formData.aadharBack.name}
                   </div>
                 )}
                 {errors.aadharBack && <p className="text-red-500 text-sm mt-1">{errors.aadharBack}</p>}
               </div>
             </div>

             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
               <div className="flex">
                 <div className="flex-shrink-0">
                   <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <div className="ml-3">
                   <h3 className="text-sm font-medium text-blue-800">Document Requirements</h3>
                   <div className="mt-2 text-sm text-blue-700">
                     <ul className="list-disc list-inside space-y-1">
                       <li>PAN card should be clearly visible and valid</li>
                       <li>Aadhar card should show both front and back sides clearly</li>
                       <li>Documents should be in JPG, PNG, or JPEG format</li>
                       <li>Maximum file size: 10MB per document</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         );

       case 4:
        return (
          <div className="space-y-6">
            <div className="bg-bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Terms and Conditions</h3>
              <div className="text-sm text-text-secondary space-y-4 max-h-64 overflow-y-auto">
                <p>
                  By creating an account with Pro Traders, you agree to the following terms and conditions:
                </p>
                <p>
                  1. You must be at least 18 years old to create an account and use our services.
                </p>
                <p>
                  2. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p>
                  3. You agree to provide accurate and complete information during registration.
                </p>
                <p>
                  4. Pro Traders reserves the right to modify these terms at any time.
                </p>
                <p>
                  5. Trading involves substantial risk and may not be suitable for all investors.
                </p>
                <p>
                  6. Past performance does not guarantee future results.
                </p>
                <p>
                  7. You acknowledge that you have read and understood our risk disclosure statement.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                  className="mt-1 h-4 w-4 text-accent-color focus:ring-accent-color border-gray-300 rounded"
                />
                <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                  I have read and agree to the <span className="text-accent-color font-medium">Terms and Conditions</span>
                </label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                  className="mt-1 h-4 w-4 text-accent-color focus:ring-accent-color border-gray-300 rounded"
                />
                <label htmlFor="privacyAccepted" className="text-sm text-gray-700">
                  I have read and agree to the <span className="text-accent-color font-medium">Privacy Policy</span>
                </label>
              </div>
              {errors.privacyAccepted && <p className="text-red-500 text-sm">{errors.privacyAccepted}</p>}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-color to-primary-blue rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-text-quaternary font-bold text-xl">PT</span>
              </div>
              <div className="text-left">
                <div className="text-accent-color font-bold text-xl">PRO</div>
                <div className="text-accent-color font-bold text-xl">TRADERS</div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-accent-color mb-2">
            Open real account
          </h2>
          <p className="text-text-secondary text-sm">
            Fill out registration form
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-card-bg rounded-2xl p-8 shadow-xl">
          {/* Step Title and Progress */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-accent-color mb-2">
              {steps[currentStep].title}
            </h3>
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded ${
                    index <= currentStep ? 'bg-accent-color' : 'bg-border-color'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                onClick={handlePreviousStep}
                disabled={currentStep === 0}
                className="px-6 py-3 border border-accent-color text-accent-color rounded-lg hover:bg-accent-color/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                PREVIOUS STEP
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-3 bg-accent-color text-text-quaternary rounded-lg hover:bg-accent-color/90 transition-colors"
              >
                {currentStep === steps.length - 1 ? 'SIGN UP' : 'NEXT STEP'}
              </button>
            </div>

            {/* Log In Link */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={onBackToSignIn}
                className="text-accent-color hover:text-accent-color/80 transition-colors text-sm"
              >
                Log In →
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-text-primary text-sm">
            © Pro Traders
          </p>
          <p className="text-text-secondary text-xs">
            Contact us at{' '}
            <a href="mailto:support@protraders.com" className="text-accent-color hover:text-accent-color/80">
              support@protraders.com
            </a>{' '}
            if you encounter any problems. Version: v.1.13.0-828
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
