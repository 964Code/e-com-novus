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
                <S.ProductImage src={product.image} alt={product.title} />
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

{
  /* {products?.map((product) => (
        <S.Product key={product._id}>
          <S.ProductImage src={product.image} alt={product.title} />
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
      ))} */
}

{
  /* <S.Product>
  <S.ProductImageContainer>
    <S.ProductImage
      src={
        'https://img.freepik.com/free-vector/set-facial-creams-products_24877-54321.jpg'
      }
      alt={'product.title'}
    />
  </S.ProductImageContainer>
</S.Product>; */
}
