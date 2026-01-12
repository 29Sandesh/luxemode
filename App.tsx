import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider, useStore } from './context/StoreContext';
import Home from './screens/Home';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Account from './screens/Account';
import Wishlist from './screens/Wishlist';
import Orders from './screens/Orders';
import AddressList from './screens/AddressList';
import Wallet from './screens/Wallet';
import Settings from './screens/Settings';
import EditProfile from './screens/EditProfile';
import ChangePassword from './screens/ChangePassword';
import HelpCenter from './screens/HelpCenter';
import AboutUs from './screens/AboutUs';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';

// Wrapper component to access context
const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <Router>
      <div className="max-w-[600px] mx-auto min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={ !isAuthenticated ? <Login /> : <Navigate to="/" replace /> } />
          <Route path="/signup" element={ !isAuthenticated ? <Signup /> : <Navigate to="/" replace /> } />

          {/* Protected Routes */}
          <Route path="/" element={ isAuthenticated ? <Home /> : <Navigate to="/login" replace /> } />
          <Route path="/products" element={ isAuthenticated ? <ProductList /> : <Navigate to="/login" replace /> } />
          <Route path="/product/:id" element={ isAuthenticated ? <ProductDetails /> : <Navigate to="/login" replace /> } />
          <Route path="/cart" element={ isAuthenticated ? <Cart /> : <Navigate to="/login" replace /> } />
          <Route path="/checkout" element={ isAuthenticated ? <Checkout /> : <Navigate to="/login" replace /> } />
          <Route path="/account" element={ isAuthenticated ? <Account /> : <Navigate to="/login" replace /> } />
          <Route path="/wishlist" element={ isAuthenticated ? <Wishlist /> : <Navigate to="/login" replace /> } />
          <Route path="/orders" element={ isAuthenticated ? <Orders /> : <Navigate to="/login" replace /> } />
          <Route path="/addresses" element={ isAuthenticated ? <AddressList /> : <Navigate to="/login" replace /> } />
          <Route path="/wallet" element={ isAuthenticated ? <Wallet /> : <Navigate to="/login" replace /> } />
          <Route path="/settings" element={ isAuthenticated ? <Settings /> : <Navigate to="/login" replace /> } />
          <Route path="/settings/edit-profile" element={ isAuthenticated ? <EditProfile /> : <Navigate to="/login" replace /> } />
          <Route path="/settings/change-password" element={ isAuthenticated ? <ChangePassword /> : <Navigate to="/login" replace /> } />
          <Route path="/settings/help" element={ isAuthenticated ? <HelpCenter /> : <Navigate to="/login" replace /> } />
          <Route path="/settings/about" element={ isAuthenticated ? <AboutUs /> : <Navigate to="/login" replace /> } />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  );
};

export default App;