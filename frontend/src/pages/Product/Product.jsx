import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { useSelector } from 'react-redux';
import { selectProductById } from '../../features/products/productSlice';

function Product() {
  const { id } = useParams();

  // Get product by id if id is present
  const selectedProduct = id
    ? useSelector((state) => selectProductById(state, id))
    : null;

  if (!selectedProduct) return <h1>Product not found</h1>;

  console.log(selectedProduct);
  console.log(id);
  return <div>Product</div>;
}

export default Product;
