export interface Product {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    description: string;
    image: string;
    category: string;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    address?: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }