// Home.js

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { fetchProducts } from '../api/apiService';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';

import '../css/home.css';

const Home = ({ cart, addToCart, toggleFavorite, favoriteIds }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const initializeProducts = async () => {
      let apiProducts = await fetchProducts();
      apiProducts = apiProducts.map(product => ({
        ...product,
        id: product._id,
        description: product.desc,
        image: faker.image.imageUrl(640, 480, undefined, true),
      }));
      setProducts(apiProducts);
      setFilteredProducts(apiProducts);
    };
    initializeProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products]);

  const applyFilters = (filters = {}) => {
    let updatedProducts = products;

    if (filters.priceRange?.min) {
      updatedProducts = updatedProducts.filter(product => product.price >= filters.priceRange.min);
    }
    if (filters.priceRange?.max) {
      updatedProducts = updatedProducts.filter(product => product.price <= filters.priceRange.max);
    }
    if (filters.publishDate) {
      updatedProducts = updatedProducts.filter(product => {
        const productDate = new Date(product.publishDate);
        const filterDate = new Date(filters.publishDate);
        return productDate >= filterDate;
      });
    }
    if (filters.brand) {
      updatedProducts = updatedProducts.filter(product => product.brand === filters.brand);
    }

    setFilteredProducts(updatedProducts);
  };

  const handleFilterChange = (filters) => {
    applyFilters(filters);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-container" >
      <div className="sidebar" >
        <Sidebar products={products} onFilterChange={handleFilterChange} />
      </div>
      <div className="main-content" >
        <h1>Product List</h1>
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
        <ProductList products={currentProducts} addToCart={addToCart} toggleFavorite={toggleFavorite} favoriteIds={favoriteIds} />
        <Pagination totalPages={Math.ceil(filteredProducts.length / productsPerPage)} paginate={paginate} />
      </div>
    </div>
  );
};

export default Home;
