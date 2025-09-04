import React from 'react';
import MiniChartUsd from '../widgets/MiniChartUsd';
import MiniChartGold from '../widgets/MiniChartGold';

const AboutUs = ({ onSignUpClick }) => {
  const stats = [
    { value: "50,000+", label: "Active Traders" },
    { value: "$2B+", label: "Monthly Trading Volume" },
    { value: "150+", label: "Countries Served" },
    { value: "24/7", label: "Customer Support" }
  ];

  const team = [
    { 
      name: "Michael Roberts", 
      role: "CEO & Founder", 
      desc: "15+ years in forex trading and financial markets",
      image: "👨‍💼"
    },
    { 
      name: "Sarah Johnson", 
      role: "Chief Analyst", 
      desc: "Former hedge fund analyst with expertise in market trends",
      image: "👩‍💼"
    },
    { 
      name: "David Chen", 
      role: "Technology Director", 
      desc: "Fintech specialist with focus on trading platform innovation",
      image: "👨‍💻"
    },
    { 
      name: "Emma Wilson", 
      role: "Customer Success", 
      desc: "Dedicated to ensuring trader satisfaction and success",
      image: "👩‍🎓"
    }
  ];

  const values = [
    { 
      icon: "🔒", 
      title: "Security First", 
      desc: "Your funds and data are protected with bank-level security measures" 
    },
    { 
      icon: "⚡", 
      title: "Innovation", 
      desc: "Continuously improving our platform with cutting-edge technology" 
    },
    { 
      icon: "🤝", 
      title: "Transparency", 
      desc: "Clear pricing, no hidden fees, and honest communication" 
    },
    { 
      icon: "🌍", 
      title: "Global Access", 
      desc: "Democratizing forex trading for everyone, everywhere" 
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
                <span>🌟 Trusted Since 2010</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-text-primary">Our Mission:</span>
                <br />
                <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent bg-300% animate-gradient">Empowering Traders</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Express Forex was founded with a simple goal: to make professional trading tools and resources accessible to everyone, regardless of experience level.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onSignUpClick}
                  className="bg-accent-color text-text-quaternary font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-color/30"
                >
                  Join Our Community
                </button>
                <button className="bg-transparent border-2 border-accent-color text-accent-color font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-full h-full">
                    <MiniChartGold />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute -top-10 left-1/2 w-24 h-24 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10 group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-color/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-accent-color mb-2 transform group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <h3 className="text-lg font-bold text-text-primary">{stat.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-text-primary">Our</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Founded in 2010 by a team of seasoned traders and technologists, Express Forex emerged from a simple observation: the forex trading industry was dominated by platforms that either catered exclusively to professionals or oversimplified the experience for beginners.
              </p>
              <p className="text-text-secondary text-lg">
                We set out to create a platform that would democratize professional trading tools, making them accessible and understandable for traders at all levels while maintaining the sophistication that experienced traders demand.
              </p>
              <p className="text-text-secondary text-lg">
                Today, we serve traders in over 150 countries, processing billions in trading volume monthly, but our mission remains the same: to empower individuals with the tools, education, and support they need to succeed in the markets.
              </p>
            </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700 shadow-xl hover:shadow-accent-color/20 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-2xl font-bold text-accent-color">2010</h3>
                  <p className="text-text-secondary">Our Journey Began</p>
                  <div className="text-3xl font-bold text-accent-color animate-pulse">13+ Years</div>
                  <p className="text-text-secondary">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-accent-color/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">
              Our <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-text-secondary">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10 group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-color/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{value.title}</h3>
                  <p className="text-text-secondary">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="absolute top-10 left-20 w-24 h-24 bg-accent-color/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-accent-color/10 rounded-full animate-pulse delay-700"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-text-primary">Meet Our</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-text-secondary">The experienced team guiding our vision</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-color/10 group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-color/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{member.image}</div>
                  <h3 className="text-xl font-bold mb-1 text-text-primary">{member.name}</h3>
                  <div className="text-accent-color font-semibold mb-3">{member.role}</div>
                  <p className="text-text-secondary text-sm">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-bg-primary to-bg-secondary relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-color/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-text-primary">
                <span className="text-text-primary">Cutting-Edge</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Technology</span>
              </h2>
              <p className="text-xl text-text-secondary">
                Our platform is built on robust, secure technology that ensures lightning-fast execution and reliable performance even during high volatility.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Lightning Execution</h3>
                    <p className="text-text-secondary">Average trade execution under 40ms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Bank-Level Security</h3>
                    <p className="text-text-secondary">Encryption and segregated client funds</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-hover-bg hover:bg-accent-color/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-color/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Advanced Tools</h3>
                    <p className="text-text-secondary">Professional charts, indicators, and analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card-bg backdrop-blur-sm border border-border-color p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-xl hover:shadow-accent-color/20 relative overflow-hidden">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-color/10 rounded-full blur-xl"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">💻</div>
                  <h3 className="text-2xl font-bold text-accent-color">Express Forex Platform</h3>
                  <p className="text-text-secondary">Advanced yet intuitive</p>
                  <div className="w-full h-64">
                    <MiniChartUsd />
                  </div>
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
            <span className="text-text-primary">Join Our</span> <span className="text-accent-color bg-gradient-to-r from-accent-color to-primary-blue bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Become part of a thriving community of traders who benefit from our expertise, technology, and unwavering support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={onSignUpClick}
              className="bg-accent-color text-text-quaternary font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-color/30"
            >
              Start Trading Today
            </button>
            <button className="bg-transparent border-2 border-accent-color text-accent-color font-semibold px-8 py-4 rounded-xl hover:bg-accent-color/10 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;