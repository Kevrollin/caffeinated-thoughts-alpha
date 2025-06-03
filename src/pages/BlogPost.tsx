
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Coffee, User, ArrowLeft, Menu, X, Home } from "lucide-react";
import CoffeeButton from "../components/CoffeeButton";
import ShareButton from "../components/ShareButton";
import SEO from "../components/SEO";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - increased to make spinner more visible
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Development",
      excerpt: "Learn the fundamentals of React and how to build your first component-based application.",
      date: "2024-05-25",
      readTime: "5 min read",
      slug: "getting-started-react",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      content: `
        <h1>Getting Started with React Development</h1>
        <p>React has revolutionized web development with its component-based architecture and efficient rendering. This guide will walk you through the basics of React, setting up your environment, and building your first React application.</p>
        <h2>Prerequisites</h2>
        <ul>
          <li>Basic knowledge of HTML, CSS, and JavaScript</li>
          <li>Node.js and npm (Node Package Manager) installed on your machine</li>
        </ul>
        <h2>Setting Up Your Environment</h2>
        <p>First, you'll need to set up your development environment. The easiest way to start a new React project is by using Create React App.</p>
        <pre><code>npx create-react-app my-first-react-app</code></pre>
        <p>This command creates a new React project in a directory called <code>my-first-react-app</code>. Once the installation is complete, navigate into the project directory:</p>
        <pre><code>cd my-first-react-app</code></pre>
        <h2>Running Your Application</h2>
        <p>To start the development server, run:</p>
        <pre><code>npm start</code></pre>
        <p>This will open your React application in your default web browser. Any changes you make to the code will automatically update in the browser.</p>
        <h2>Understanding the Project Structure</h2>
        <p>Here's a brief overview of the project structure:</p>
        <ul>
          <li><code>node_modules</code>: Contains all the installed npm packages.</li>
          <li><code>public</code>: Contains static assets like <code>index.html</code>.</li>
          <li><code>src</code>: Contains the main React application code.</li>
          <li><code>src/index.js</code>: The entry point of your application.</li>
          <li><code>src/App.js</code>: The main component of your application.</li>
        </ul>
        <h2>Creating Your First Component</h2>
        <p>Let's create a simple React component. Open <code>src/App.js</code> and replace the existing code with the following:</p>
        <pre><code class="language-jsx">
        import React from 'react';

        function App() {
          return (
            &ltdiv className="App"&gt
              &lth1&gtHello, React!&lt/h1&gt
            &lt/div&gt
          );
        }

        export default App;
        </code></pre>
        <p>This code defines a functional component called <code>App</code> that returns a simple "Hello, React!" heading. Save the file, and you should see the updated content in your browser.</p>
        <h2>Styling Your Component</h2>
        <p>You can style your React components using CSS. Create a new file called <code>src/App.css</code> and add some styles:</p>
        <pre><code class="language-css">
        .App {
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0;
        }

        h1 {
          color: #333;
        }
        </code></pre>
        <p>Import the CSS file in <code>src/App.js</code>:</p>
        <pre><code class="language-jsx">
        import React from 'react';
        import './App.css';

        function App() {
          return (
            &ltdiv className="App"&gt
              &lth1&gtHello, React!&lt/h1&gt
            &lt/div&gt
          );
        }

        export default App;
        </code></pre>
        <p>Now, your component should have the styles defined in <code>App.css</code>.</p>
        <h2>Conclusion</h2>
        <p>Congratulations! You've taken your first steps in React development. This guide covered setting up your environment, creating a simple component, and styling it with CSS. Keep exploring and building more complex components to master React.</p>
      `
    },
    {
      id: 2,
      title: "The Art of Coffee Brewing",
      excerpt: "Discover the perfect brewing techniques that will transform your morning coffee routine.",
      date: "2024-05-20",
      readTime: "8 min read",
      slug: "art-of-coffee-brewing",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop",
      content: `
        <h1>The Art of Coffee Brewing</h1>
        <p>Coffee brewing is both a science and an art. The perfect cup of coffee depends on various factors, including the quality of the beans, the grind size, the water temperature, and the brewing method. This guide will explore several brewing techniques to help you elevate your coffee experience.</p>
        <h2>Choosing the Right Beans</h2>
        <p>The first step to brewing great coffee is selecting high-quality beans. Look for freshly roasted beans from reputable sources. Consider the origin, roast level, and flavor profile of the beans.</p>
        <ul>
          <li><strong>Origin:</strong> Different regions produce beans with distinct flavors. For example, Ethiopian beans are often fruity and floral, while Sumatran beans are earthy and bold.</li>
          <li><strong>Roast Level:</strong> Light roasts preserve more of the bean's original flavors, while dark roasts have a bolder, more bitter taste.</li>
          <li><strong>Flavor Profile:</strong> Consider what flavors you enjoy. Do you prefer chocolatey, nutty, or fruity notes?</li>
        </ul>
        <h2>Grind Size Matters</h2>
        <p>The grind size is crucial for proper extraction. Different brewing methods require different grind sizes:</p>
        <ul>
          <li><strong>Coarse:</strong> French press and cold brew</li>
          <li><strong>Medium:</strong> Drip coffee and pour-over</li>
          <li><strong>Fine:</strong> Espresso</li>
        </ul>
        <p>Use a burr grinder for a consistent grind. Blade grinders produce uneven particles, which can lead to over-extraction and bitter flavors.</p>
        <h2>Water Temperature</h2>
        <p>The ideal water temperature for brewing coffee is between 195°F and 205°F (90°C and 96°C). Use a thermometer to ensure accurate temperature control. If you don't have a thermometer, let the boiling water sit for about 30 seconds before brewing.</p>
        <h2>Brewing Methods</h2>
        <h3>French Press</h3>
        <p>The French press is a simple and popular method that produces a full-bodied cup of coffee. Add coarse ground coffee to the press, pour hot water over the grounds, and let it steep for 4 minutes. Press the plunger down slowly and serve.</p>
        <h3>Pour-Over</h3>
        <p>Pour-over methods, such as the Hario V60 or Chemex, allow for precise control over the brewing process. Rinse the filter with hot water, add medium ground coffee, and slowly pour hot water over the grounds in a circular motion. The brewing process should take about 3 minutes.</p>
        <h3>Drip Coffee</h3>
        <p>Drip coffee makers are convenient for brewing larger quantities of coffee. Use a medium grind and follow the manufacturer's instructions. For best results, use filtered water and freshly ground beans.</p>
        <h3>Espresso</h3>
        <p>Espresso is a concentrated form of coffee brewed by forcing hot water through finely ground coffee beans. It requires specialized equipment, such as an espresso machine and a tamper. Experiment with different grind sizes and tamping pressures to achieve the perfect shot.</p>
        <h2>Conclusion</h2>
        <p>Mastering the art of coffee brewing takes time and practice. Experiment with different beans, grind sizes, and brewing methods to find your perfect cup. Enjoy the process and savor the rich flavors of freshly brewed coffee.</p>
      `
    },
    {
      id: 3,
      title: "Building Modern Web Applications",
      excerpt: "Explore modern development practices and tools that every developer should know.",
      date: "2024-05-15",
      readTime: "12 min read",
      slug: "building-modern-web-apps",
      author: "Coffee Blogger",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      content: `
        <h1>Building Modern Web Applications</h1>
        <p>Modern web development has evolved significantly over the past decade. Today's web applications are more interactive, dynamic, and user-friendly. This guide will explore modern development practices and tools that every developer should know to build robust and scalable web applications.</p>
        <h2>Frontend Development</h2>
        <p>The frontend is the part of the application that users interact with directly. Modern frontend development focuses on creating responsive, accessible, and performant user interfaces.</p>
        <h3>JavaScript Frameworks</h3>
        <p>JavaScript frameworks provide structure and tools for building complex UIs. Some popular frameworks include:</p>
        <ul>
          <li><strong>React:</strong> A component-based library for building UIs.</li>
          <li><strong>Angular:</strong> A comprehensive framework for building complex applications.</li>
          <li><strong>Vue.js:</strong> A progressive framework that is easy to learn and use.</li>
        </ul>
        <h3>State Management</h3>
        <p>State management libraries help manage the application's data and ensure consistency across components. Popular options include:</p>
        <ul>
          <li><strong>Redux:</strong> A predictable state container for JavaScript apps.</li>
          <li><strong>Context API:</strong> A built-in React feature for managing state.</li>
          <li><strong>Vuex:</strong> The official state management library for Vue.js.</li>
        </ul>
        <h3>Build Tools</h3>
        <p>Build tools automate tasks such as compiling code, bundling assets, and optimizing performance. Common build tools include:</p>
        <ul>
          <li><strong>Webpack:</strong> A module bundler that packages JavaScript, CSS, and other assets.</li>
          <li><strong>Parcel:</strong> A zero-configuration bundler that is easy to use.</li>
          <li><strong>Rollup:</strong> A module bundler that is optimized for libraries.</li>
        </ul>
        <h2>Backend Development</h2>
        <p>The backend handles the server-side logic, data storage, and API endpoints. Modern backend development emphasizes scalability, security, and maintainability.</p>
        <h3>Node.js</h3>
        <p>Node.js allows developers to use JavaScript on the server-side. It is ideal for building real-time applications and APIs.</p>
        <h3>Frameworks</h3>
        <p>Backend frameworks provide structure and tools for building APIs and server-side applications. Popular frameworks include:</p>
        <ul>
          <li><strong>Express.js:</strong> A minimalist framework for Node.js.</li>
          <li><strong>Django:</strong> A high-level Python web framework.</li>
          <li><strong>Ruby on Rails:</strong> A convention-over-configuration framework for Ruby.</li>
        </ul>
        <h3>Databases</h3>
        <p>Databases store and manage the application's data. Common database options include:</p>
        <ul>
          <li><strong>SQL Databases:</strong> Relational databases like MySQL, PostgreSQL, and SQL Server.</li>
          <li><strong>NoSQL Databases:</strong> Non-relational databases like MongoDB, Cassandra, and Redis.</li>
        </ul>
        <h2>DevOps</h2>
        <p>DevOps practices automate the deployment, monitoring, and scaling of web applications.</p>
        <h3>Continuous Integration/Continuous Deployment (CI/CD)</h3>
        <p>CI/CD pipelines automate the process of building, testing, and deploying code changes. Tools like Jenkins, Travis CI, and CircleCI are commonly used.</p>
        <h3>Containerization</h3>
        <p>Containerization technologies like Docker allow developers to package applications and their dependencies into containers, ensuring consistency across different environments.</p>
        <h3>Cloud Platforms</h3>
        <p>Cloud platforms like AWS, Azure, and Google Cloud provide infrastructure and services for hosting and scaling web applications.</p>
        <h2>Conclusion</h2>
        <p>Building modern web applications requires a combination of frontend, backend, and DevOps skills. By staying up-to-date with the latest tools and practices, developers can create robust, scalable, and user-friendly web applications.</p>
      `
    }
  ];

  const article = blogPosts.find((post) => post.slug === slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
        <SEO />
        <LoadingSpinner 
          size="lg" 
          text="Loading article..." 
          className="animate-fade-in" 
        />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <SEO title="Article Not Found" />
        
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Caffeinated Thoughts
                </h1>
              </Link>
              
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base group">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-[-2px] transition-transform" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </div>
          </div>
        </header>

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
              Oops! Article Not Found
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              It seems we can't find the article you're looking for. 
              Perhaps it's still brewing or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
              
              <Link to="javascript:history.back()" className="bg-white border border-amber-300 text-amber-700 hover:bg-amber-50 font-medium py-3 px-6 rounded-xl transition-colors flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEO 
        title={article.title} 
        description={article.excerpt} 
        image={article.image}
      />
      
      {/* Enhanced Header with Share Buttons */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50 animate-fade-in shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Caffeinated Thoughts
              </h1>
            </Link>
            
            <div className="flex items-center space-x-4">
              <ShareButton title={article.title} url={window.location.href} className="hidden sm:flex" />
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base group">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-[-2px] transition-transform" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </div>
          </div>
          
          {/* Mobile Share Button */}
          <div className="sm:hidden mt-3 flex justify-center">
            <ShareButton title={article.title} url={window.location.href} />
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6 animate-fade-in">
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <User className="w-4 h-4 mr-2 text-amber-600" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 mr-2 text-amber-600" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 mr-2 text-amber-600" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8">
            <img 
              src={article.image}
              alt={article.title}
              className="w-full object-cover h-64 sm:h-80 md:h-96 animate-fade-in transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-800 animate-fade-in">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Coffee Button Section */}
        <div className="mt-12 pt-8 border-t border-amber-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enjoyed this article?</h3>
            <p className="text-gray-600">Support my work by buying me a coffee!</p>
          </div>
          <CoffeeButton />
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
