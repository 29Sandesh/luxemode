export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  isNew?: boolean;
  sizes?: string[];
  colors?: string[];
  description?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  cartItemId: string; // Unique ID for the cart entry (product + variant)
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
