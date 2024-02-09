// App.js

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Navbar from './components/NavBar';
import Checkout from './pages/Checkout';
import FavoritesPage from './pages/FavoritesPage';


function App() {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  const addToCart = (product) => {
    const isProductInCart = cart.find(item => item.id === product.id);
    let updatedCart;
    if (isProductInCart) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [favoriteIds, setFavoriteIds] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const toggleFavorite = (productId) => {
    let newFavoriteIds;
    if (favoriteIds.includes(productId)) {
      newFavoriteIds = favoriteIds.filter(id => id !== productId);
    } else {
      newFavoriteIds = [...favoriteIds, productId];
    }
    setFavoriteIds(newFavoriteIds);
    localStorage.setItem('favorites', JSON.stringify(newFavoriteIds));
  };

  return (
    <Router>
      <Navbar cartItemCount={totalItemCount} />
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} toggleFavorite={toggleFavorite} favoriteIds={favoriteIds} />} />
        <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
