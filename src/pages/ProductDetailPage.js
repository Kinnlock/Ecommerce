// ProductDetailPage.js

import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ addToCart }) => {
  const { productId } = useParams();
  const storedProducts = JSON.parse(localStorage.getItem('products'));
  const product = storedProducts.find(p => p.id === productId);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Color: {product.color}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
