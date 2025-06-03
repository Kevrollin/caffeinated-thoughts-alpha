
interface MPesaResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

interface STKPushRequest {
  phoneNumber: string;
  amount: string;
}

class MPesaService {
  private baseURL = 'https://sandbox.safaricom.co.ke'; // Use production URL for live
  private consumerKey = import.meta.env.VITE_MPESA_CONSUMER_KEY;
  private consumerSecret = import.meta.env.VITE_MPESA_CONSUMER_SECRET;
  private shortcode = import.meta.env.VITE_MPESA_SHORTCODE || '174379';
  private passkey = import.meta.env.VITE_MPESA_PASSKEY;
  private callbackURL = import.meta.env.VITE_MPESA_CALLBACK_URL;

  private async getAccessToken(): Promise<string> {
    const auth = btoa(`${this.consumerKey}:${this.consumerSecret}`);
    
    const response = await fetch(`${this.baseURL}/oauth/v1/generate?grant_type=client_credentials`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  }

  private generatePassword(): string {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = btoa(`${this.shortcode}${this.passkey}${timestamp}`);
    return password;
  }

  private generateTimestamp(): string {
    return new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
  }

  async initiateSTKPush({ phoneNumber, amount }: STKPushRequest): Promise<MPesaResponse> {
    try {
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword();

      // Format phone number (ensure it starts with 254)
      const formattedPhone = phoneNumber.startsWith('254') 
        ? phoneNumber 
        : phoneNumber.startsWith('0') 
        ? `254${phoneNumber.slice(1)}`
        : `254${phoneNumber}`;

      const stkPushData = {
        BusinessShortCode: this.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: parseInt(amount),
        PartyA: formattedPhone,
        PartyB: this.shortcode,
        PhoneNumber: formattedPhone,
        CallBackURL: this.callbackURL,
        AccountReference: 'CoffeeSupport',
        TransactionDesc: 'Buy Me Coffee Payment'
      };

      const response = await fetch(`${this.baseURL}/mpesa/stkpush/v1/processrequest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stkPushData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.errorMessage || 'STK Push failed');
      }

      return data;
    } catch (error) {
      console.error('M-Pesa STK Push error:', error);
      throw error;
    }
  }

  async querySTKStatus(checkoutRequestID: string): Promise<any> {
    try {
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword();

      const queryData = {
        BusinessShortCode: this.shortcode,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestID,
      };

      const response = await fetch(`${this.baseURL}/mpesa/stkpushquery/v1/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryData),
      });

      return await response.json();
    } catch (error) {
      console.error('M-Pesa query error:', error);
      throw error;
    }
  }
}

export const mpesaService = new MPesaService();
export default MPesaService;
