
import { Link } from "react-router-dom";
import { Coffee, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col">
      <SEO title="Page Not Found" />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          {/* 404 Animation */}
          <div className="mb-8 relative">
            <div className="text-8xl sm:text-9xl font-bold text-amber-200 select-none">
              404
            </div>
            <Coffee className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-amber-600 animate-bounce" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            It looks like this page went for a coffee break and never came back. 
            Let's get you back to where the magic happens!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
              <Link to="javascript:history.back()" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
