
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics tracking component
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const trackPageView = (path: string) => {
      console.log('Analytics: Page view tracked:', path);
      
      // Google Analytics 4 tracking (when GA_MEASUREMENT_ID is available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path,
        });
      }

      // You can also add other analytics services here
      // Example: Mixpanel, Amplitude, etc.
    };

    trackPageView(location.pathname);
  }, [location]);

  // Track custom events
  useEffect(() => {
    const trackEvent = (eventName: string, parameters?: any) => {
      console.log('Analytics: Event tracked:', eventName, parameters);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, parameters);
      }
    };

    // Add event listeners for analytics tracking
    const handleCoffeeButtonClick = () => {
      trackEvent('coffee_button_click', {
        event_category: 'engagement',
        event_label: 'buy_coffee_modal_open'
      });
    };

    const handleShareClick = () => {
      trackEvent('share_click', {
        event_category: 'engagement',
        event_label: 'article_share'
      });
    };

    const handleContactFormSubmit = () => {
      trackEvent('contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
    };

    // Listen for custom events
    window.addEventListener('coffee_button_click', handleCoffeeButtonClick);
    window.addEventListener('share_click', handleShareClick);
    window.addEventListener('contact_form_submit', handleContactFormSubmit);

    return () => {
      window.removeEventListener('coffee_button_click', handleCoffeeButtonClick);
      window.removeEventListener('share_click', handleShareClick);
      window.removeEventListener('contact_form_submit', handleContactFormSubmit);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
