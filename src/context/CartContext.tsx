import React, { createContext, useContext, useReducer } from 'react';
import type { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + (action.payload.salePrice || action.payload.price),
        };
      }

      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }],
        total: state.total + (action.payload.salePrice || action.payload.price),
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload),
        total: state.items.reduce((acc, item) => {
          if (item.product.id !== action.payload) {
            return acc + (item.product.salePrice || item.product.price) * item.quantity;
          }
          return acc;
        }, 0),
      };
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.items.reduce((acc, item) => {
          const price = item.product.salePrice || item.product.price;
          const quantity = item.product.id === action.payload.productId
            ? action.payload.quantity
            : item.quantity;
          return acc + price * quantity;
        }, 0),
      };
    }
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}