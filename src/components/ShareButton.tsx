
import { useState } from "react";
import { Share, Link as LinkIcon, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

const ShareButton = ({ title, url = window.location.href, className = "" }: ShareButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      
      // Dispatch analytics event
      window.dispatchEvent(new CustomEvent('share_click'));
      
      toast({
        title: "Link Copied! 🔗",
        description: "The article link has been copied to your clipboard.",
        duration: 3000,
      });

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy link. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        
        // Dispatch analytics event
        window.dispatchEvent(new CustomEvent('share_click'));
      } catch (err) {
        // User cancelled sharing or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        onClick={handleNativeShare}
        variant="outline"
        size="sm"
        className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 group"
      >
        <Share className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Share</span>
      </Button>
      
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 group"
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4 mr-2 text-green-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-green-600">Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Copy Link</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ShareButton;
