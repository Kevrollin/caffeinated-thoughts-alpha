
import { Coffee } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const LoadingSpinner = ({ 
  size = "md", 
  text = "Loading...", 
  className = "" 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl"
  };

  const containerSizeClasses = {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-6"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]} ${className}`}>
      <div className="relative">
        {/* Outer rotating ring */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin`}></div>
        
        {/* Inner coffee icon */}
        <div className={`flex items-center justify-center ${sizeClasses[size]}`}>
          <Coffee 
            className={`${size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'} text-amber-600 animate-bounce`}
            style={{ animationDelay: '0.2s' }}
          />
        </div>
      </div>
      
      {text && (
        <div className="text-center">
          <p className={`text-gray-600 font-medium ${textSizeClasses[size]} animate-pulse`}>
            {text}
          </p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
