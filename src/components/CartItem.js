// CartItem.js

const CartItem = ({ item, removeFromCart }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', display: 'flex' }}>
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
);

export default CartItem;
