import { useState } from "react";
import { Coffee, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { mpesaService } from "@/services/mpesaService";

const CoffeeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("100");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Initiating STK Push:", { phoneNumber, amount });
      
      // Check if M-Pesa environment variables are configured
      const isConfigured = import.meta.env.VITE_MPESA_CONSUMER_KEY && 
                          import.meta.env.VITE_MPESA_CONSUMER_SECRET;

      if (!isConfigured) {
        // Fallback for demo purposes
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        toast({
          title: "Demo Mode ☕",
          description: "M-Pesa integration is not configured. This is a demo of the payment flow.",
          duration: 5000,
        });
      } else {
        // Real M-Pesa integration
        const response = await mpesaService.initiateSTKPush({
          phoneNumber,
          amount
        });

        if (response.ResponseCode === "0") {
          toast({
            title: "Payment Initiated! ☕",
            description: "Check your phone for the M-Pesa prompt. Thank you for your support!",
            duration: 5000,
          });
        } else {
          throw new Error(response.ResponseDescription || "Payment failed");
        }
      }
      
      setIsModalOpen(false);
      setPhoneNumber("");
      setAmount("100");
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoffeeButtonClick = () => {
    setIsModalOpen(true);
    // Dispatch analytics event
    window.dispatchEvent(new CustomEvent('coffee_button_click'));
  };

  // Validate phone number format
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^(254|0)[17][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const isFormValid = phoneNumber && amount && isValidPhone(phoneNumber) && parseInt(amount) >= 10;

  return (
    <>
      {/* Coffee Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleCoffeeButtonClick}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 animate-pulse hover:animate-none"
          size="lg"
        >
          <Coffee className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-bounce" />
          <span className="hidden sm:inline">Buy Me Coffee ☕</span>
          <span className="sm:hidden">Buy Coffee ☕</span>
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 text-pink-200" />
        </Button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 sm:p-6 rounded-t-2xl relative">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="ghost"
                size="icon"
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <div className="text-center text-white pr-8 sm:pr-0">
                <Coffee className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-bounce" />
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Buy Me Coffee ☕</h2>
                <p className="opacity-90 text-sm sm:text-base">
                  Support my work with a virtual coffee!
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                    M-Pesa Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="0712345678 or 254712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 text-base"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your Safaricom number (07XXXXXXXX or 254XXXXXXXXX)
                  </p>
                  {phoneNumber && !isValidPhone(phoneNumber) && (
                    <p className="text-xs text-red-500 mt-1">
                      Please enter a valid Safaricom number
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                    Amount (KES)
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="amount"
                      type="number"
                      min="10"
                      max="70000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-12 text-base"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium text-sm">
                      KES
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum: KES 10, Maximum: KES 70,000
                  </p>
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Quick amounts:
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {["50", "100", "250"].map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(quickAmount)}
                      className="text-sm hover:bg-amber-50 hover:border-amber-300 py-2"
                    >
                      KES {quickAmount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !isFormValid}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-base disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Send Payment Request</span>
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                You will receive an M-Pesa prompt on your phone to complete the payment.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoffeeButton;
