import React from 'react';
import MiniChartUsd from '../widgets/MiniChartUsd';
import MiniChartGold from '../widgets/MiniChartGold';

const HomePage = ({ onSignUpClick }) => {
  const features = [
    { icon: "📊", title: "Ultra-Low Spreads", desc: "Starting from 0.1 pips" },
    { icon: "🌍", title: "200+ Instruments", desc: "Forex, Crypto & More" },
    { icon: "💰", title: "$100 Minimum", desc: "Start with just $100" },
    { icon: "🛡️", title: "24/7 Support", desc: "Round-the-clock assistance" }
  ];



  const promotions = [
    {
      title: "Welcome Bonus",
      subtitle: "Get 100% Bonus",
      description: "Double your initial deposit with our exclusive welcome bonus",
      bonus: "100%",
      minDeposit: "$100",
      maxBonus: "$10,000",
      features: ["Instant credit", "No hidden fees", "Trade immediately"],
      popular: true
    },
    {
      title: "No Deposit Bonus",
      subtitle: "Free $50",
      description: "Start trading with free money - no deposit required",
      bonus: "$50",
      minDeposit: "$0",
      maxBonus: "$50",
      features: ["No deposit needed", "Instant activation", "Withdrawable profits"],
      popular: false
    },
    {
      title: "Loyalty Program",
      subtitle: "Earn Rewards",
      description: "Earn points on every trade and redeem for cash bonuses",
      bonus: "Up to 25%",
      minDeposit: "$500",
      maxBonus: "Unlimited",
      features: ["Points on every trade", "Monthly rewards", "VIP benefits"],
      popular: false
    }
  ];



  return (
    <div className="pt-24 bg-bg-primary min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-color/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-accent-color/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-20 relative">
        <div className="absolute top-10 right-10 w-20 h-20 bg-accent-color/10 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent-color/10 rounded-full animate-bounce delay-300"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-accent-color/20 to-primary-blue/20 text-accent-color px-4 py-2 rounded-full shadow-lg animate-pulse">
                <span>⚡ Trusted by 50,000+ Traders</span>
            </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-text-primary">Elevate Your</span>
                <br />
                <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent bg-300% animate-gradient">Trading Journey</span>
            </h1>
              <p className="text-xl text-text-secondary">
                Experience the future of forex trading with cutting-edge technology and unwavering support.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onSignUpClick}
                  className="bg-accent-color text-text-quaternary font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-color/30"
                >
                  Register Live
                </button>
                <button className="bg-transparent border-2 border-accent-color text-accent-color font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
                  Register Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  
                  <div className="w-full h-full">
                    <MiniChartUsd />
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute -top-10 left-1/2 w-24 h-24 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">
              Why Choose <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Pro Traders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10 group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-color/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.desc}</p>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Exclusive Bonuses Section */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-text-primary">Exclusive</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Bonuses</span>
            </h2>
            <p className="text-xl text-text-secondary">Choose the promotion that fits your trading style</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={index} 
                className={`bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl relative transition-all duration-500 hover:-translate-y-3 ${promo.popular ? 'ring-2 ring-accent-color transform hover:scale-105' : 'hover:shadow-xl hover:shadow-accent-color/10'}`}
              >
                {promo.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse">
                    <span className="bg-gradient-to-r from-accent-color to-primary-blue text-text-quaternary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-text-primary">{promo.title}</h3>
                  <div className="text-4xl font-bold text-accent-color mb-2 transform hover:scale-110 transition-transform duration-300">{promo.bonus}</div>
                  <p className="text-text-secondary">{promo.subtitle}</p>
                </div>
                <p className="text-text-secondary mb-6 text-center">{promo.description}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-border-color">
                    <span className="text-text-secondary">Min Deposit</span>
                    <span className="font-semibold text-accent-color">{promo.minDeposit}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border-color">
                    <span className="text-text-secondary">Max Bonus</span>
                    <span className="font-semibold text-accent-color">{promo.maxBonus}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  {promo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-success-color">✓</span>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-accent-color text-text-quaternary font-semibold px-6 py-3 rounded-xl hover:bg-accent-color/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-color/30">
                  Claim Bonus
                </button>
        </div>
            ))}
              </div>
            </div>
      </section>



      {/* Market Overview */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">
              Live <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Market Overview</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10"> 
              <MiniChartUsd />
              </div>
            <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10">
              <MiniChartGold />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-br from-bg-primary to-bg-secondary relative">
        <div className="absolute top-10 left-20 w-24 h-24 bg-accent-color/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-accent-color/10 rounded-full animate-pulse delay-700"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-text-primary">
                <span className="text-text-primary">Limited Time</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Offers</span>
              </h2>
              <p className="text-xl text-text-secondary">
                Don't miss out on these exclusive deals designed to boost your trading performance.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Zero Commission</h3>
                    <p className="text-text-secondary">Trade without commission fees for 30 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Premium Signals</h3>
                    <p className="text-text-secondary">Get access to professional trading signals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Free Education</h3>
                    <p className="text-text-secondary">Access premium trading courses and webinars</p>
        </div>
              </div>
            </div>
          </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-xl hover:shadow-accent-color/20 relative overflow-hidden">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">🎁</div>
                  <h3 className="text-2xl font-bold text-accent-color">Special Offer</h3>
                  <p className="text-text-secondary">Limited Time Only</p>
                  <div className="text-3xl font-bold text-accent-color animate-pulse">50% OFF</div>
                  <p className="text-text-secondary">Premium Trading Tools</p>
                </div>
                  </div>
                  </div>
              </div>
            </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-text-primary">
                Trade <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Anywhere</span>
              </h2>
              <p className="text-xl text-text-secondary">
                Access your trading account from any device with our cutting-edge applications.
              </p>
              <div className="space-y-6">
                  <div>
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">Mobile Trading</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center space-x-3 bg-hover-bg border border-border-color rounded-xl px-6 py-4 hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-2xl">📱</span>
                      <div className="text-left">
                        <div className="font-semibold text-text-primary">Google Play</div>
                        <div className="text-sm text-text-secondary">Download Now</div>
                  </div>
                </button>
                    <button className="flex items-center space-x-3 bg-hover-bg border border-border-color rounded-xl px-6 py-4 hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-2xl">🍎</span>
                      <div className="text-left">
                        <div className="font-semibold text-text-primary">App Store</div>
                        <div className="text-sm text-text-secondary">Download Now</div>
                  </div>
                </button>
              </div>
            </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl  shadow-xl hover:shadow-accent-color/20 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">📱</div>
                  <h3 className="text-2xl font-bold text-accent-color">Pro Traders</h3>
                  <p className="text-text-secondary">Mobile Trading Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bg-primary to-bg-secondary relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-color/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            <span className="text-text-primary">Ready to</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Start?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have already claimed their bonuses and started their journey to financial freedom.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={onSignUpClick}
              className="bg-accent-color text-text-quaternary font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-color/30"
            >
              Claim Your Bonus
            </button>
            <button className="bg-transparent border-2 border-accent-color text-accent-color font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
              Start Trading Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
