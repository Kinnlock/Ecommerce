// ProductList.js

import { Link } from 'react-router-dom';
import '../css/productList.css';



const ProductList = ({ products, addToCart, toggleFavorite, favoriteIds }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="product-info">
          <strong>{product.name}</strong>
          <p>{product.description}</p>
        </div>
        <div className="product-actions">
          <p className="product-price">{product.price}€</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          {favoriteIds && (
            <button className={favoriteIds.includes(product.id) ? "remove-from-favorites-btn" : "add-to-favorites-btn"} onClick={() => toggleFavorite(product.id)}>
              {favoriteIds.includes(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
