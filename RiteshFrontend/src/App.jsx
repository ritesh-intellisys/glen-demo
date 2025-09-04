import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './pages/AboutUs'; // Add this import
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('userEmail') || '';
  });
  const [previousPage, setPreviousPage] = useState(() => {
    return localStorage.getItem('previousPage') || 'home';
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('userEmail', userEmail);
  }, [userEmail]);

  useEffect(() => {
    localStorage.setItem('previousPage', previousPage);
  }, [previousPage]);

  const handleSignIn = (email) => {
    setUserEmail(email);
    setPreviousPage('home'); // Set previous page to home for proper back navigation
    setCurrentPage('account');
  };

  const handleSignOut = () => {
    setUserEmail('');
    setPreviousPage('home');
    setCurrentPage('home');
    // Clear localStorage on sign out
    localStorage.removeItem('userEmail');
    localStorage.setItem('currentPage', 'home');
    localStorage.setItem('previousPage', 'home');
  };

  const handleSignInClick = () => {
    setPreviousPage(currentPage);
    setCurrentPage('signin');
  };

  const handleSignUpClick = () => {
    setPreviousPage(currentPage);
    setCurrentPage('signup');
  };

  const handleProfileClick = () => {
    console.log('handleProfileClick called in App.jsx');
    console.log('Current page before:', currentPage);
    setPreviousPage(currentPage); // This ensures we always go back to the current page
    setCurrentPage('profile');
    console.log('Setting page to profile');
  };

  const handleAboutUsClick = () => {
    setPreviousPage(currentPage);
    setCurrentPage('aboutus');
  };

  const handleBackClick = () => {
    console.log('handleBackClick called - going to:', previousPage);
    setCurrentPage(previousPage);
  };

  const handleAccountBackClick = () => {
    setCurrentPage('home');
  };

  const handleSignInBackClick = () => {
    setCurrentPage('home');
  };

  const handleAboutUsBackClick = () => {
    setCurrentPage(previousPage);
  };

  const handleProfileBackClick = () => {
    setCurrentPage('account');
  };

  // Add this state handler function
  const handleContactUsClick = () => {
    setPreviousPage(currentPage);
    setCurrentPage('contactus');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SignInPage onSignIn={handleSignIn} onSignUpClick={handleSignUpClick} onBack={handleSignInBackClick} />;
      case 'signup':
        return <SignUpPage onSignUp={handleSignIn} onBackToSignIn={handleSignInClick} />;
      case 'account':
        return <AccountPage userEmail={userEmail} onSignOut={handleSignOut} onProfileClick={handleProfileClick} onBack={handleAccountBackClick} />;
      case 'profile':
        return <ProfilePage userEmail={userEmail} onSignOut={handleSignOut} onBack={handleProfileBackClick} onProfileClick={handleProfileClick} />;
      case 'aboutus': // Add case for About Us page
        return <AboutUs onSignUpClick={handleSignUpClick} />;
      case 'contactus':
        return <ContactUs onSignUpClick={handleSignUpClick} />;

      default:
        return (
          <>
            <HomePage onSignUpClick={handleSignUpClick} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="App">
      {(currentPage === 'home' || currentPage === 'aboutus' || currentPage === 'contactus') &&
        <Navbar
          onSignInClick={handleSignInClick}
          onAboutUsClick={handleAboutUsClick}
          onContactUsClick={handleContactUsClick}
          onHomeClick={handleHomeClick}
          currentPage={currentPage}
        />
      }
      {renderPage()}
    </div>
  );
}

export default App;