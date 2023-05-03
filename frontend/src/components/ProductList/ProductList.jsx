import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

function ProductList({ products }) {
  const currency = '$';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
    console.log('product id: ', product._id);
  };

  const handleProductEdit = (e, productId) => {
    e.stopPropagation();
    navigate(`/products/update_product/${productId}`);
  };

  return (
    <>
      <S.ProductListContainer>
        {products.length === 0 ? (
          <S.NoProductsMessage>No products found</S.NoProductsMessage>
        ) : (
          <S.ProductList>
            {products?.map((product) => (
              <S.Product
                key={product._id}
                onClick={() => {
                  navigate(`/products/show_more/${product._id}`);
                }}
              >
                <S.ProductImageContainer>
                  <S.ProductImage
                    src={
                      product.image && product.image.startsWith('https')
                        ? product.image
                        : 'https://img.freepik.com/premium-psd/bottle-product-mockup-psd-beauty-packaging_53876-130082.jpg'
                    }
                    alt={product.title}
                  />
                </S.ProductImageContainer>
                <S.TextWrapper>
                  <S.ProductTitle>{product.title}</S.ProductTitle>

                  <S.ProductPrice>
                    {currency}
                    {product.price}
                  </S.ProductPrice>
                </S.TextWrapper>
                <S.ButtonWrapper>
                  <S.ProductButton onClick={(e) => handleAddToCart(e, product)}>
                    Add to cart
                  </S.ProductButton>
                  <S.ProductButton
                    onClick={(e) => {
                      handleProductEdit(e, product._id);
                    }}
                  >
                    Edit
                  </S.ProductButton>
                </S.ButtonWrapper>
              </S.Product>
            ))}
          </S.ProductList>
        )}
      </S.ProductListContainer>
    </>
  );
}

export default ProductList;

{
  /* <S.ProductDescription>{product.description}</S.ProductDescription>; */
}
{
  /*   */
}
