import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function ProductList({ products }) {
  const currency = '$';

  const navigate = useNavigate();
  return (
    <>
      <S.ProductListContainer>
        <S.ProductList>
          {products?.map((product) => (
            <S.Product key={product._id}>
              <S.ProductImageContainer>
                {/*  <S.ProductImage src={product.image} alt={product.title} /> */}
                <S.ProductImage
                  src={
                    'https://img.freepik.com/premium-psd/bottle-product-mockup-psd-beauty-packaging_53876-130082.jpg'
                  }
                  alt={product.title}
                />
              </S.ProductImageContainer>
              <S.TextWrapper>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductDescription>
                  {/*  {product.description} */}
                </S.ProductDescription>
                <S.ProductPrice>
                  {currency}
                  {product.price}
                </S.ProductPrice>
              </S.TextWrapper>
              <S.ButtonWrapper>
                <S.ProductButton>Add to cart</S.ProductButton>
                <S.ProductButton
                  onClick={() => {
                    navigate(`/products/update_product/${product._id}`);
                  }}
                >
                  Edit
                </S.ProductButton>
              </S.ButtonWrapper>
            </S.Product>
          ))}
        </S.ProductList>
      </S.ProductListContainer>
    </>
  );
}

export default ProductList;
