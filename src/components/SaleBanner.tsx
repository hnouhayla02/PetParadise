import React from 'react';
import { Sparkles } from 'lucide-react';

export function SaleBanner() {
  return (
    <div className="bg-purple-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <p className="text-lg font-semibold">
          🎉 Huge Sale! 70% OFF on Selected Items 🎉
        </p>
        <Sparkles className="h-5 w-5" />
      </div>
    </div>
  );
}