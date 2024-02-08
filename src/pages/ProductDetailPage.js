import { useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(640, 480, undefined, true),
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt="Product" style={{ width: '100%', height: 'auto' }} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
