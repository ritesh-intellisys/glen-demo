import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DepositModal from '../components/DepositModal';
import { accountAPI, depositAPI } from '../services/api';

const AccountDetailsPage = ({ account, onBack, onSignOut, onProfileClick }) => {
  const [adminData, setAdminData] = useState({
    balance: '0.00',
    equity: '0.00',
    margin: '0.00',
    currency: 'USD'
  });
  const [showDepositModal, setShowDepositModal] = useState(false);

  // Load account data from API
  useEffect(() => {
    const loadAccountData = async () => {
      if (!account?._id && !account?.id) return;
      
      // Check if user is in offline mode
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.offline) {
        // Use localStorage for offline mode
        const savedData = localStorage.getItem('adminAccountTypesData');
        if (savedData && account) {
          const parsedData = JSON.parse(savedData);
          const accountTypeData = parsedData[account.type];
          if (accountTypeData) {
            setAdminData(accountTypeData);
          }
        }
        return;
      }
      
      try {
        const response = await accountAPI.getAccountById(account._id || account.id);
        if (response.success) {
          setAdminData({
            balance: response.account.balance,
            currency: response.account.currency,
            equity: response.account.equity,
            margin: response.account.margin
          });
        }
      } catch (error) {
        console.error('Error loading account data:', error);
        // Fallback to localStorage
        const savedData = localStorage.getItem('adminAccountTypesData');
        if (savedData && account) {
          const parsedData = JSON.parse(savedData);
          const accountTypeData = parsedData[account.type];
          if (accountTypeData) {
            setAdminData(accountTypeData);
          }
        }
      }
    };

    loadAccountData();

    // Listen for balance updates
    const handleBalanceUpdate = (event) => {
      if (event.detail.accountType === account?.type) {
        loadAccountData();
      }
    };

    window.addEventListener('balanceUpdated', handleBalanceUpdate);
    
    return () => {
      window.removeEventListener('balanceUpdated', handleBalanceUpdate);
    };
  }, [account]);

  const handleDepositRequest = async (depositRequest) => {
    try {
      // Check if user is in offline mode
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.offline) {
        // Handle deposit request locally for offline mode
        const proofBase64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(depositRequest.proof);
        });

        // Store deposit request in localStorage for offline mode
        const depositRequests = JSON.parse(localStorage.getItem('depositRequests') || '[]');
        const newRequest = {
          id: Date.now().toString(),
          accountId: account._id || account.id,
          amount: depositRequest.amount,
          upiApp: depositRequest.upiApp,
          paymentProof: proofBase64,
          proofName: depositRequest.proof.name,
          proofType: depositRequest.proof.type,
          status: 'pending',
          createdAt: new Date().toISOString()
        };
        
        depositRequests.push(newRequest);
        localStorage.setItem('depositRequests', JSON.stringify(depositRequests));
        
        alert('Deposit request submitted successfully! (Offline mode)');
        return;
      }

      // Create request object with file
      const requestData = {
        accountId: account._id || account.id,
        amount: depositRequest.amount,
        upiApp: depositRequest.upiApp,
        paymentProof: depositRequest.proof // Send file directly
      };

      // Submit to API
      await depositAPI.submitDepositRequest(requestData);
      
      // Show success message
      alert('Deposit request submitted successfully! Admin will verify and process your payment.');
    } catch (error) {
      console.error('Error submitting deposit request:', error);
      alert(`Error submitting deposit request: ${error.message}`);
    }
  };
  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
        <Header userEmail={''} onSignOut={onSignOut} onProfileClick={onProfileClick} onBack={onBack} showBackButton={true} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-text-secondary mb-4">No account selected.</div>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-accent-color to-primary-blue hover:from-primary-blue hover:to-accent-color text-text-quaternary font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Back to Accounts
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <Header userEmail={''} onSignOut={onSignOut} onProfileClick={onProfileClick} onBack={onBack} showBackButton={true} />

      <main className="py-6">
        <div className="container-custom">
          <div className="bg-card-bg backdrop-blur-sm border border-border-color rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-6 right-6 w-24 h-24 bg-accent-color/10 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="text-text-secondary uppercase tracking-widest text-xs mb-2">Balance</div>
                <div className="text-5xl sm:text-6xl font-extrabold text-text-primary">{adminData.balance} {adminData.currency}</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-10 mb-6">
                <div className="text-text-secondary">Equity: <span className="font-semibold text-text-primary">{adminData.equity} USD</span></div>
                <div className="hidden sm:block h-4 w-px bg-border-color" />
                <div className="text-text-secondary">Margin: <span className="font-semibold text-text-primary">{adminData.margin} USD</span></div>
              </div>

              <div className="text-center text-text-secondary mb-6">
                ACCOUNT: <span className="font-semibold text-text-primary">{account.id}</span> | <span className="font-semibold text-text-primary">{account.type}</span> | LEVERAGE: <span className="font-semibold text-text-primary">1 : 500</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
                <button 
                  onClick={() => setShowDepositModal(true)}
                  className="bg-gradient-to-r from-accent-color to-primary-blue hover:from-primary-blue hover:to-accent-color text-text-quaternary font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Deposit
                </button>
                <button className="bg-transparent border border-danger-color text-danger-color hover:bg-danger-color hover:text-text-quaternary font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">Withdraw</button>
                <button className="bg-transparent border border-border-color text-text-secondary hover:text-text-primary hover:border-text-primary font-semibold py-3 px-6 rounded-xl transition-all duration-300">Change Password</button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex space-x-2 border-b border-border-color mb-4">
              <button className="px-4 py-2 rounded-t-lg bg-hover-bg text-text-primary font-semibold">Payment History</button>
              <button className="px-4 py-2 rounded-t-lg text-text-secondary hover:text-text-primary">Trading History</button>
            </div>
            <div className="bg-card-bg border border-border-color rounded-xl p-6 text-center">
              <div className="text-text-secondary mb-3">No records found in last 7 days</div>
              <button className="mx-auto border border-border-color text-text-secondary hover:text-text-primary px-4 py-2 rounded-lg">Show All</button>
            </div>
          </div>

          
        </div>
      </main>

      <DepositModal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
        accountType={account?.type}
        onDepositRequest={handleDepositRequest}
      />
    </div>
  );
};

export default AccountDetailsPage;


