// Cart.js

import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Cart</h1>
      {!cart.length ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ flex: 2, textAlign: 'center' }}>
                <h3>{item.name}</h3>
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button onClick={() => navigate('/checkout')}>Finalize Order</button>
    </div>
  );
};

export default Cart;
