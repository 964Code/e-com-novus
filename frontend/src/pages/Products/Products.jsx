import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  selectProducts,
} from '../../features/products/productSlice';

function Products() {
  const products = useSelector(selectProducts);
  console.log(products);

  return (
    <>
      <h1>Products-page</h1>;
    </>
  );
}

export default Products;
