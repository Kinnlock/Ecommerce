import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(640, 480, undefined, true),
  }));

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h2>{product.name}</h2>
              <img src={product.image} alt="Product" style={{ width: '100%', height: 'auto' }} />
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
