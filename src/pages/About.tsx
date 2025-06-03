
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Code, Heart, Zap, Menu, X, ArrowLeft, Github, Linkedin, Instagram } from "lucide-react";
import SEO from "../components/SEO";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "Medium",
      icon: "M",
      url: "https://medium.com/@yourusername",
      color: "hover:text-green-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-900"
    },
    {
      name: "X",
      icon: X,
      url: "https://x.com/yourusername",
      color: "hover:text-black"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
        <SEO title="About" />
        <LoadingSpinner 
          size="lg" 
          text="Loading about page..." 
          className="animate-fade-in" 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEO title="About" />
      
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Caffeinated Thoughts
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-amber-600 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base group md:hidden"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-[-2px] transition-transform" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-scale-in">
            About
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Caffeinated Thoughts
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Where code meets coffee, and ideas brew into reality.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <span className="text-gray-600 font-medium">Connect with me:</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  {social.name === "Medium" ? (
                    <span className="font-bold text-sm">M</span>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          <div className="h-64 sm:h-80 relative overflow-hidden rounded-2xl group shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="Developer workspace with coffee"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hi, I'm Coffee Blogger
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to my digital corner where development insights meet coffee culture. 
                I'm a passionate developer who believes that the best code is written with a perfect cup of coffee by your side.
              </p>
              <p>
                Through this blog, I share my journey in web development, exploring modern frameworks, 
                best practices, and the occasional coffee brewing technique that keeps the creativity flowing.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with different brewing methods, 
                exploring local coffee shops, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills/Interests */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            What I'm Passionate About
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Code className="w-8 h-8 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Development</h4>
              <p className="text-gray-600 leading-relaxed">
                Modern web technologies, React, TypeScript, and building user experiences that matter.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Coffee className="w-8 h-8 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Coffee Culture</h4>
              <p className="text-gray-600 leading-relaxed">
                Exploring brewing methods, coffee origins, and the art of the perfect cup.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Heart className="w-8 h-8 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-600 leading-relaxed">
                Sharing knowledge, mentoring developers, and building connections in the tech community.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <Zap className="w-12 h-12 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Let's Connect!
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Have a project idea? Want to discuss the latest in web development? 
            Or just want to share your favorite coffee recipe?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors hover:scale-105 transform duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
