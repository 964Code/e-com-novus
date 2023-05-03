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

  return (
    <S.ProductPageContainer>
      <S.ProductImage
        src={
          selectedProduct.image && selectedProduct.image.startsWith('https')
            ? selectedProduct.image
            : 'https://img.freepik.com/premium-psd/bottle-product-mockup-psd-beauty-packaging_53876-130082.jpg'
        }
        alt={selectedProduct.title}
      />
      <S.ProductDetails>
        <S.ProductTitle>{selectedProduct.title}</S.ProductTitle>
        <S.ProductCategory>
          {selectedProduct.category} - {selectedProduct.subcategory}
        </S.ProductCategory>
        <S.ProductDescription>
          {selectedProduct.description}
        </S.ProductDescription>
        <S.ProductPrice>${selectedProduct.price}</S.ProductPrice>
      </S.ProductDetails>
    </S.ProductPageContainer>
  );
}

export default Product;
