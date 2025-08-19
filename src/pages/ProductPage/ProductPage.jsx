import React, { useState, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import Allproducts from '../allproducts/Allproducts';

function ProductPage() {
  const [searchkey, setSearchkey] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Assuming you have all products stored somewhere

  // Simulated products data (replace this with actual products data fetching logic)
  useEffect(() => {
    // Fetch products or set the products array from your data source
    const fetchedProducts = [
      // ... your product data
    ];
    setAllProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts); // Initialize filtered products with all products
  }, []);

  // Apply filters and update filteredProducts when searchkey, filterType, or filterPrice changes
  useEffect(() => {
    let updatedProducts = [...allProducts];

    if (searchkey) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchkey.toLowerCase()) ||
          product.description.toLowerCase().includes(searchkey.toLowerCase())
      );
    }

    if (filterType) {
      updatedProducts = updatedProducts.filter(
        (product) => product.OS === filterType
      );
    }

    if (filterPrice) {
      const [minPrice, maxPrice] = filterPrice.split(' - ');
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.price >= parseInt(minPrice, 10) &&
          product.price <= parseInt(maxPrice, 10)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchkey, filterType, filterPrice, allProducts]);

  const handleApplyFilters = () => {
    // The useEffect hook already handles applying filters automatically
  };

  const handleResetFilters = () => {
    setSearchkey('');
    setFilterType('');
    setFilterPrice('');
  };

  const handlePriceChange = (selectedPrice) => {
    setFilterPrice(selectedPrice);
  };

  return (
    <div>
      {/* Other necessary context providers or components */}
      <Filter
        searchkey={searchkey}
        setSearchkey={setSearchkey}
        filterType={filterType}
        setFilterType={setFilterType}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
        handleApplyFilters={handleApplyFilters}
        handleResetFilters={handleResetFilters}
        handlePriceChange={handlePriceChange}
      />
      <Allproducts products={filteredProducts} />
    </div>
  );
}

export default ProductPage;
