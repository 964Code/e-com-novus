import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  selectProducts,
  deleteProduct,
} from '../../features/products/productSlice';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';

function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  // Return loading if products are not fetched
  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <SearchBar />
      <CategoriesMenu />
      <ProductList products={products} />
    </>
  );
}

export default Products;
