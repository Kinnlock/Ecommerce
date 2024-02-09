// FavoritesPage.js

import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const FavoritesPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorites = allProducts.filter(product => favoriteIds.includes(product.id));
    setFavoriteProducts(favorites);
  }, []);

  return (
    <div>
      <h1>Favoris</h1>
      <ProductList products={favoriteProducts} />
    </div>
  );
};

export default FavoritesPage;
