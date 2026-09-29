import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import Checkout from './pages/Chekout'; // Maqaa faayilii kee Chekout.jsx jedhu waliin wal-simsiiseera
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ProtectedRouter from './Components/ProtectedRouter';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/checkout" element={
          <ProtectedRouter>
            <Checkout />
          </ProtectedRouter>
        } />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/profile" element={
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;