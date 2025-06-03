import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Mail, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEO from "../components/SEO";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";

const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent! 🚀",
        description: "We'll get back to you soon.",
      });
      
      // Dispatch analytics event
      window.dispatchEvent(new CustomEvent('contact_form_submit'));
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
        <SEO title="Contact" />
        <LoadingSpinner 
          size="lg" 
          text="Loading contact page..." 
          className="animate-fade-in" 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEO title="Contact" />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Caffeinated Thoughts
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</Link>
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
            <nav className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out with any questions or collaboration ideas. 
            I'm always open to new opportunities and discussions.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-amber-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>
            <div>
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" text="" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Other Ways to Reach Me
          </h3>
          <div className="flex items-center justify-center space-x-6">
            <Link to="mailto:youremail@example.com" className="text-gray-600 hover:text-amber-600 transition-colors">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            {/* Add other contact methods here, like social media links */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
