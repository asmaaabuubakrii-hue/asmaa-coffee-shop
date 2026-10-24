import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProtectedRouter from './Components/ProtectedRouter';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import Checkout from './pages/Chekout'; // ykn './pages/Checkout'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        
        {/* Product Detail Route */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/checkout"
          element={
            <ProtectedRouter>
              <Checkout />
            </ProtectedRouter>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouter>
              <Profile />
            </ProtectedRouter>
          }
        />

        {/* 404 Page Not Found - Hunda Dhumarratti Ta'uu Qaba */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;