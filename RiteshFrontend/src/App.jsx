import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userEmail, setUserEmail] = useState('');
  const [previousPage, setPreviousPage] = useState('home');

  const handleSignIn = (email) => {
    setUserEmail(email);
    setCurrentPage('account');
  };

  const handleSignOut = () => {
    setUserEmail('');
    setCurrentPage('home');
  };

  const handleSignInClick = () => {
    setPreviousPage(currentPage);
    setCurrentPage('signin');
  };

  const handleProfileClick = () => {
    console.log('handleProfileClick called in App.jsx');
    console.log('Current page before:', currentPage);
    setPreviousPage(currentPage);
    setCurrentPage('profile');
    console.log('Setting page to profile');
  };

  const handleBackClick = () => {
    setCurrentPage(previousPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SignInPage onSignIn={handleSignIn} />;
      case 'account':
        return <AccountPage userEmail={userEmail} onSignOut={handleSignOut} onProfileClick={handleProfileClick} />;
      case 'profile':
        return <ProfilePage userEmail={userEmail} onSignOut={handleSignOut} onBack={handleBackClick} />;
      default:
        return (
          <>
            <HomePage />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Navbar onSignInClick={handleSignInClick} />}
      {renderPage()}
    </div>
  );
}

export default App;
