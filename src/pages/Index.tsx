import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Coffee, User, Search, Menu, X, ArrowRight } from "lucide-react";
import CoffeeButton from "../components/CoffeeButton";
import SEO from "../components/SEO";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Development",
      excerpt: "Learn the fundamentals of React and how to build your first component-based application with modern best practices.",
      date: "2024-05-25",
      readTime: "5 min read",
      slug: "getting-started-react",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      tags: ["React", "JavaScript", "Tutorial"]
    },
    {
      id: 2,
      title: "The Art of Coffee Brewing",
      excerpt: "Discover the perfect brewing techniques that will transform your morning coffee routine into a delightful ritual.",
      date: "2024-05-20",
      readTime: "8 min read",
      slug: "art-of-coffee-brewing",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop",
      tags: ["Coffee", "Lifestyle", "Tutorial"]
    },
    {
      id: 3,
      title: "Building Modern Web Applications",
      excerpt: "Explore modern development practices and tools that every developer should know to build scalable applications.",
      date: "2024-05-15",
      readTime: "12 min read",
      slug: "building-modern-web-apps",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      tags: ["Development", "Modern Web", "Best Practices"]
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
        <SEO />
        <LoadingSpinner 
          size="lg" 
          text="Brewing your experience..." 
          className="animate-fade-in" 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEO />
      
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50 animate-fade-in shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <Coffee className="w-8 h-8 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Caffeinated Thoughts
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/articles" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Articles
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/articles" 
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Code Meets
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block sm:inline">
              {" "}Coffee
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join me on a journey through development insights, coffee culture, and everything 
            that fuels creativity in the digital world.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-full border-amber-200 focus:border-amber-400 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Coffee className="w-6 h-6 mr-2 text-amber-600" />
              Latest Articles
            </h3>
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group-hover:translate-x-1 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate developer who believes the best code is written with a perfect cup of coffee.
              </p>
              <Link to="/about" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Support My Work</h3>
              <p className="mb-4 opacity-90">
                Enjoy the content? Buy me a coffee to keep the articles coming!
              </p>
              <CoffeeButton />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
