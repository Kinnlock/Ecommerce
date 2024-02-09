// Cart.js

import { useNavigate } from 'react-router-dom';

import '../css/cart.css';


const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Cart</h1>
      {!cart.length ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="cart-summary">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="finalize-btn" onClick={() => navigate('/checkout')}>Finalize Order</button>
    </div>
  );
};


export default Cart;
