import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { paymentId } = location.state || {};

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        {paymentId && (
          <p className="text-sm text-gray-500 mb-8">
            Transaction ID: {paymentId}
          </p>
        )}
        <button
          onClick={() => navigate('/products')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}