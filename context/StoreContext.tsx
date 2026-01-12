import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  login: () => void;
  logout: () => void;
  toggleTheme: () => void;
  cartCount: number;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize Cart from LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Initialize Wishlist from LocalStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Initialize Theme - Default to light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
     const saved = localStorage.getItem('theme');
     if (saved === 'dark' || saved === 'light') return saved;
     return 'light';
  });

  // Persist Cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persist Auth
  useEffect(() => {
    localStorage.setItem('isAuthenticated', String(isAuthenticated));
  }, [isAuthenticated]);

  // Apply Theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const login = () => setIsAuthenticated(true);
  
  const logout = () => {
    setIsAuthenticated(false);
    setCart([]); 
    setWishlist([]);
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product: Product, size: string, color: string) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existingItem) {
        return prev.map((item) =>
          item.cartItemId === existingItem.cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newItem: CartItem = {
        ...product,
        cartItemId: `${product.id}-${size}-${color}-${Date.now()}`,
        selectedSize: size,
        selectedColor: color,
        quantity: 1,
      };
      return [...prev, newItem];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isAuthenticated,
        theme,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        login,
        logout,
        toggleTheme,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};