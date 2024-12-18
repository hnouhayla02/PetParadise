import { CartItem } from '../types';

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}

class PaymentService {
  private static instance: PaymentService;

  private constructor() {}

  static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  async processPayment(items: CartItem[], paymentDetails: PaymentDetails): Promise<string> {
    // Simulate payment processing by referencing items and paymentDetails
    return new Promise((resolve) => {
      setTimeout(() => {
        // For now, just log the items and payment details (you could do actual processing here)
        console.log('Processing payment for items:', items);
        console.log('Payment details:', paymentDetails);

        // Simulate a payment success response
        resolve('PAYMENT_SUCCESS_' + Math.random().toString(36).substr(2, 9));
      }, 1500);
    });
  }
}

export const paymentService = PaymentService.getInstance();
