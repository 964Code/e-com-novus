import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <>
      {products?.map((product) => (
        <S.Product key={product._id}>
          {/* <S.ProductImage src={product.image} alt={product.title} /> */}
          <S.ProductImage
            src={
              'https://img.freepik.com/free-vector/set-facial-creams-products_24877-54321.jpg'
            }
            alt={product.title}
          />
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.ProductDescription>{product.description}</S.ProductDescription>
          <S.ProductPrice>Price: ${product.price}</S.ProductPrice>
          <S.ProductButton>Buy</S.ProductButton>
          <Link to={`/products/update_product/${product._id}`}>
            <S.ProductButton onClick={() => {}}>edit</S.ProductButton>
          </Link>
        </S.Product>
      ))}
    </>
  );
}

export default ProductList;
