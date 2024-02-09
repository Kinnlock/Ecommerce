// ProductList.js

import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart, toggleFavorite, favoriteIds }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {products.map((product) => (
      <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
        <h2>{product.name}</h2>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
        </Link>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCart && addToCart(product)}>Add to Cart</button>
        {favoriteIds && (
          <button onClick={() => toggleFavorite(product.id)}>
            {favoriteIds.includes(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )}
      </div>
    ))}
  </div>
);

export default ProductList;
