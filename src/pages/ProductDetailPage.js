import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const storedProducts = JSON.parse(localStorage.getItem('products'));

  const product = storedProducts.find(p => p.id === productId);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt="Product" style={{ width: '100%', height: 'auto' }} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
