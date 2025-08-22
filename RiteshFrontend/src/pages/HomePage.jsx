import React from 'react';
import MiniChartUsd from '../widgets/MiniChartUsd';
import MiniChartGold from '../widgets/MiniChartGold';

const HomePage = () => {
  const features = [
    { icon: "📊", title: "Ultra-Low Spreads", desc: "Starting from 0.1 pips" },
    { icon: "🌍", title: "200+ Instruments", desc: "Forex, Crypto & More" },
    { icon: "💰", title: "$100 Minimum", desc: "Start with just $100" },
    { icon: "🛡️", title: "24/7 Support", desc: "Round-the-clock assistance" }
  ];

  const accounts = [
    { name: "Starter", deposit: "$100", spread: "1.2", popular: false },
    { name: "Professional", deposit: "$500", spread: "0.8", popular: true },
    { name: "Premium", deposit: "$1000", spread: "0.3", popular: false }
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

  const tradingContests = [
    {
      title: "Monthly Trading Contest",
      prize: "$50,000",
      participants: "1,000+",
      duration: "30 days",
      entry: "Free"
    },
    {
      title: "Demo Trading Challenge",
      prize: "$10,000",
      participants: "500+",
      duration: "7 days",
      entry: "Free"
    },
    {
      title: "Crypto Trading Cup",
      prize: "$25,000",
      participants: "750+",
      duration: "14 days",
      entry: "Free"
    }
  ];

  return (
    <div className="pt-24 bg-forest-green min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-forest-green/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-sky-blue/20 py-20 relative">
        <div className="absolute top-10 right-10 w-20 h-20 bg-golden/10 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-sky-blue/10 rounded-full animate-bounce delay-300"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-sky-blue/20 to-golden/20 text-golden px-4 py-2 rounded-full shadow-lg animate-pulse">
                <span>⚡ Trusted by 50,000+ Traders</span>
            </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-white/80">Elevate Your</span>
                <br />
                <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent bg-300% animate-gradient">Trading Journey</span>
            </h1>
              <p className="text-xl text-white/70">
                Experience the future of forex trading with cutting-edge technology and unwavering support.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-golden text-forest-green font-semibold px-8 py-4 rounded-xl hover:bg-golden/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-golden/30">
                  Register Live
                </button>
                <button className="bg-transparent border-2 border-sky-blue text-sky-blue font-semibold px-8 py-4 rounded-xl hover:bg-sky-blue/10 transition-all duration-300 transform hover:-translate-y-1">
                  Register Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-golden/10 rounded-full blur-xl"></div>
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
      <section className="py-20 bg-sky-blue/5 relative">
        <div className="absolute -top-10 left-1/2 w-24 h-24 bg-golden/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Glen Capitals</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-blue/10 group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-blue/10 to-golden/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sky-blue/10 relative">
        <div className="absolute top-20 right-20 w-16 h-16 bg-golden/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-sky-blue/10 rounded-full animate-pulse delay-500"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Trading Path</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accounts.map((account, index) => (
              <div 
                key={index} 
                className={`bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl relative transition-all duration-500 hover:-translate-y-3 ${account.popular ? 'ring-2 ring-golden transform hover:scale-105' : 'hover:shadow-xl hover:shadow-sky-blue/10'}`}
              >
                {account.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="bg-gradient-to-r from-golden to-sky-blue text-forest-green px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{account.name}</h3>
                  <div className="text-4xl font-bold text-golden mb-2 transform hover:scale-110 transition-transform duration-300">{account.deposit}</div>
                  <p className="text-white/70">Minimum Deposit</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-sky-blue/20">
                    <span className="text-white/80">Spread from</span>
                    <span className="font-semibold text-sky-blue">{account.spread} pips</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-blue/20">
                    <span className="text-white/80">Leverage</span>
                    <span className="font-semibold text-sky-blue">1:500</span>
        </div>
          </div>
                <button className="w-full bg-golden text-forest-green font-semibold px-6 py-3 rounded-xl hover:bg-golden/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-golden/30">
                  Get Started
                </button>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses Section */}
      <section className="py-20 bg-sky-blue/5 relative">
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-golden/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Exclusive</span> <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Bonuses</span>
            </h2>
            <p className="text-xl text-white/70">Choose the promotion that fits your trading style</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={index} 
                className={`bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl relative transition-all duration-500 hover:-translate-y-3 ${promo.popular ? 'ring-2 ring-golden transform hover:scale-105' : 'hover:shadow-xl hover:shadow-sky-blue/10'}`}
              >
                {promo.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse">
                    <span className="bg-gradient-to-r from-golden to-sky-blue text-forest-green px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{promo.title}</h3>
                  <div className="text-4xl font-bold text-golden mb-2 transform hover:scale-110 transition-transform duration-300">{promo.bonus}</div>
                  <p className="text-white/70">{promo.subtitle}</p>
                </div>
                <p className="text-white/80 mb-6 text-center">{promo.description}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-sky-blue/20">
                    <span className="text-white/80">Min Deposit</span>
                    <span className="font-semibold text-sky-blue">{promo.minDeposit}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-blue/20">
                    <span className="text-white/80">Max Bonus</span>
                    <span className="font-semibold text-sky-blue">{promo.maxBonus}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  {promo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-golden">✓</span>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-golden text-forest-green font-semibold px-6 py-3 rounded-xl hover:bg-golden/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-golden/30">
                  Claim Bonus
                </button>
        </div>
            ))}
              </div>
            </div>
      </section>

      {/* Trading Contests */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sky-blue/10 relative">
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-golden/10 rounded-full animate-pulse"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Trading</span> <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Contests</span>
            </h2>
            <p className="text-xl text-white/70">Compete with traders worldwide and win big prizes</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {tradingContests.map((contest, index) => (
              <div 
                key={index} 
                className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-sky-blue/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 to-golden/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{contest.title}</h3>
                    <div className="text-3xl font-bold text-golden mb-2 transform group-hover:scale-110 transition-transform duration-300">{contest.prize}</div>
                    <p className="text-white/70">Total Prize Pool</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-2 border-b border-sky-blue/20">
                      <span className="text-white/80">Participants</span>
                      <span className="font-semibold text-sky-blue">{contest.participants}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sky-blue/20">
                      <span className="text-white/80">Duration</span>
                      <span className="font-semibold text-sky-blue">{contest.duration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sky-blue/20">
                      <span className="text-white/80">Entry Fee</span>
                      <span className="font-semibold text-green-400">{contest.entry}</span>
                    </div>
              </div>
                  <button className="w-full bg-transparent border-2 border-sky-blue text-sky-blue font-semibold px-6 py-3 rounded-xl hover:bg-sky-blue/10 transition-all duration-300 transform hover:-translate-y-1">
                    Join Contest
                  </button>
            </div>
          </div>
            ))}
              </div>
            </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-sky-blue/5 relative">
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-golden/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Live <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Market Overview</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-blue/10"> 
              <MiniChartUsd />
              </div>
            <div className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-blue/10">
              <MiniChartGold />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sky-blue/10 relative">
        <div className="absolute top-10 left-20 w-24 h-24 bg-sky-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-golden/10 rounded-full animate-pulse delay-700"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="text-white">Limited Time</span> <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Offers</span>
              </h2>
              <p className="text-xl text-white/70">
                Don't miss out on these exclusive deals designed to boost your trading performance.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-sky-blue/5 hover:bg-sky-blue/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Zero Commission</h3>
                    <p className="text-white/70">Trade without commission fees for 30 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-sky-blue/5 hover:bg-sky-blue/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Premium Signals</h3>
                    <p className="text-white/70">Get access to professional trading signals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-sky-blue/5 hover:bg-sky-blue/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Free Education</h3>
                    <p className="text-white/70">Access premium trading courses and webinars</p>
        </div>
              </div>
            </div>
          </div>
            <div className="relative">
              <div className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-xl hover:shadow-sky-blue/20 relative overflow-hidden">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-golden/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">🎁</div>
                  <h3 className="text-2xl font-bold text-golden">Special Offer</h3>
                  <p className="text-white/70">Limited Time Only</p>
                  <div className="text-3xl font-bold text-sky-blue animate-pulse">50% OFF</div>
                  <p className="text-white/80">Premium Trading Tools</p>
                </div>
                  </div>
                  </div>
              </div>
            </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-sky-blue/5 relative">
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-golden/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Trade <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Anywhere</span>
              </h2>
              <p className="text-xl text-white/70">
                Access your trading account from any device with our cutting-edge applications.
              </p>
              <div className="space-y-6">
                  <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Mobile Trading</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center space-x-3 bg-sky-blue/10 border border-sky-blue/20 rounded-xl px-6 py-4 hover:bg-sky-blue/20 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-2xl">📱</span>
                      <div className="text-left">
                        <div className="font-semibold text-white">Google Play</div>
                        <div className="text-sm text-white/70">Download Now</div>
                  </div>
                </button>
                    <button className="flex items-center space-x-3 bg-sky-blue/10 border border-sky-blue/20 rounded-xl px-6 py-4 hover:bg-sky-blue/20 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-2xl">🍎</span>
                      <div className="text-left">
                        <div className="font-semibold text-white">App Store</div>
                        <div className="text-sm text-white/70">Download Now</div>
                  </div>
                </button>
              </div>
            </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-sky-blue/10 backdrop-blur-sm border border-sky-blue/20 p-8 rounded-2xl  shadow-xl hover:shadow-sky-blue/20 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-golden/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">📱</div>
                  <h3 className="text-2xl font-bold text-golden">Glen Capitals</h3>
                  <p className="text-white/70">Mobile Trading Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sky-blue/10 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-golden/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Ready to</span> <span className="text-golden bg-gradient-to-r from-golden to-white bg-clip-text text-transparent">Start?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have already claimed their bonuses and started their journey to financial freedom.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-golden text-forest-green font-semibold px-8 py-4 rounded-xl hover:bg-golden/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-golden/30">
              Claim Your Bonus
            </button>
            <button className="bg-transparent border-2 border-sky-blue text-sky-blue font-semibold px-8 py-4 rounded-xl hover:bg-sky-blue/10 transition-all duration-300 transform hover:-translate-y-1">
              Start Trading Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
