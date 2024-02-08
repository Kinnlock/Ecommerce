// Home.js

import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Home = ({ cart, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    let storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      storedProducts = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(640, 480, undefined, true),
      }));
      localStorage.setItem('products', JSON.stringify(storedProducts));
      setProducts(storedProducts);
    }
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterChange = (filters) => {
    console.log(filters);
  };

  return (
    <div>
      <h1>Product List</h1>
      <Sidebar onFilterChange={handleFilterChange} />
      <div>
      <h2> Cart ({cart.length} items)
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
      </h2>
        {cart.map(item => (
          <div key={item.id}>
            {item.name}: {item.quantity}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {currentProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
            <h2>{product.name}</h2>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            </Link>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)} style={{ margin: '0 5px' }}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
