import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function ProductsPage() {
  const [category, setCategory] = useState<string>('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setCategory('all')}
          className={`px-4 py-2 rounded-full ${
            category === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory('food')}
          className={`px-4 py-2 rounded-full ${
            category === 'food' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setCategory('toys')}
          className={`px-4 py-2 rounded-full ${
            category === 'toys' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Toys
        </button>
        <button
          onClick={() => setCategory('accessories')}
          className={`px-4 py-2 rounded-full ${
            category === 'accessories' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Accessories
        </button>
        <button
          onClick={() => setCategory('essentials')}
          className={`px-4 py-2 rounded-full ${
            category === 'essentials' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Essentials
        </button>
        <button
          onClick={() => setCategory('housing')}
          className={`px-4 py-2 rounded-full ${
            category === 'housing' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Housing
        </button>
        <button
          onClick={() => setCategory('grooming')}
          className={`px-4 py-2 rounded-full ${
            category === 'grooming' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Grooming
        </button>
        <button
          onClick={() => setCategory('travel')}
          className={`px-4 py-2 rounded-full ${
            category === 'travel' ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          Travel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}