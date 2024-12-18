import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, PawPrint, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">PetParadise</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-purple-600">
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account" className="text-gray-600 hover:text-purple-600">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-purple-600 relative">
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/products"
              className="block text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/account"
              className="block text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              to="/cart"
              className="block text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({state.items.length})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}