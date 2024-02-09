// apiService.js

const fetchProducts = async () => {
  try {
    const response = await fetch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export { fetchProducts };
