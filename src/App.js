// App.js

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';


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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
