
import { Coffee, Github, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Medium",
      icon: "M",
      url: "https://medium.com/@kelvinmukaria012",
      color: "hover:text-green-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kelvin-mukaria-831211359/",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/kev.mukaria",
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Kevrollin",
      color: "hover:text-gray-900"
    },
    {
      name: "X",
      icon: X,
      url: "https://x.com/kevrollin012/",
      color: "hover:text-black"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold">Caffeinated Thoughts</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sharing thoughts on development, coffee culture, and everything in between. 
              Join me on this caffeinated journey through code and creativity.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
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
            <p className="text-gray-400 text-xs">
              Follow for updates and behind-the-scenes content
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Caffeinated Thoughts. Brewing ideas, one post at a time.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Made with</span>
              <Coffee className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>and ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
