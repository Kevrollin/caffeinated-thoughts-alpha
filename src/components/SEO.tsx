
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Caffeinated Thoughts - Developer Blog", 
  description = "A personal blog about web development, coffee culture, and everything in between. Sharing insights on React, TypeScript, and modern web technologies.",
  keywords = "web development, react, typescript, coffee, programming, blog, javascript, frontend",
  author = "Coffee Blogger",
  image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop",
  url = window.location.href,
  type = "website"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let metaTag = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, property);
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Caffeinated Thoughts', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@coffee_blogger');

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#d97706'); // Amber color
    updateMetaTag('msapplication-TileColor', '#d97706');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "BlogPosting" : "WebSite",
      "name": title,
      "description": description,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Person",
        "name": author
      },
      "url": url,
      "image": image,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, author, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
