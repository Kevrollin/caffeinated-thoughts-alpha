
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Coffee, Search, ArrowRight, Home } from "lucide-react";
import SEO from "../components/SEO";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
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
        <SEO 
          title="All Articles - Caffeinated Thoughts"
          description="Browse all articles about development, coffee culture, and creative inspiration."
        />
        <LoadingSpinner 
          size="lg" 
          text="Loading articles..." 
          className="animate-fade-in" 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEO 
        title="All Articles - Caffeinated Thoughts"
        description="Browse all articles about development, coffee culture, and creative inspiration."
      />
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50 animate-fade-in shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <Coffee className="w-8 h-8 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Caffeinated Thoughts
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/articles" className="text-amber-600 font-medium">
                Articles
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            <Link 
              to="/" 
              className="md:hidden flex items-center text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Home className="w-5 h-5 mr-1" />
              <span className="font-medium">Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            All
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Articles
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our complete collection of articles about development, coffee culture, and creative insights.
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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
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
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="w-16 h-16 text-amber-400 mx-auto mb-4 opacity-60" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse all articles.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
