import React from 'react';
import { Heart, Users, Clock, MapPin } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About PetParadise</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're passionate about pets and dedicated to providing the best products
          and services for your furry family members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <img
            src="https://liquidesign.co.uk/wp-content/uploads/2023/06/Liqui-Group-_Browns-Pet-Store-1920_0282-1536x864.jpg"
            alt="Pet store interior"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, PetParadise has grown from a small local shop to one
            of the most trusted pet supply retailers in the country.
          </p>
          <p className="text-gray-600">
            We believe that pets deserve the very best, which is why we carefully
            select each product we offer, ensuring the highest quality and value
            for our customers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">10+ Years</h3>
          <p className="text-gray-600">Of Experience</p>
        </div>
        <div className="text-center">
          <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">50,000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">24/7</h3>
          <p className="text-gray-600">Customer Support</p>
        </div>
        <div className="text-center">
          <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">20+</h3>
          <p className="text-gray-600">Store Locations</p>
        </div>
      </div>
    </div>
  );
}