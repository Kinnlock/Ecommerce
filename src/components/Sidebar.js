// Sidebar.js

import { useState, useEffect } from 'react';
import '../css/sidebar.css';

const Sidebar = ({ onFilterChange, products }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [publishDate, setPublishDate] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    setBrands(uniqueBrands);
  }, [products]);

  const handleFilterChange = () => {
    onFilterChange({
      priceRange,
      publishDate,
      brand: selectedBrand,
    });
  };

  return (
    <div className="Sidebar">
      <h2>Filtrer par</h2>

      <div>
        <label htmlFor="minPrice">Prix minimum:</label>
        <input
          type="number"
          id="minPrice"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Prix maximum:</label>
        <input
          type="number"
          id="maxPrice"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="publishDate">Date de publication:</label>
        <input
          type="date"
          id="publishDate"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="brand">Marque:</label>
        <select
          id="brand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Sélectionnez une marque</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <button onClick={handleFilterChange}>Filtrer</button>
    </div>
  );
};

export default Sidebar;
