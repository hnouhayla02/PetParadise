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
    // Simulate payment processing
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('PAYMENT_SUCCESS_' + Math.random().toString(36).substr(2, 9));
      }, 1500);
    });
  }
}

export const paymentService = PaymentService.getInstance();