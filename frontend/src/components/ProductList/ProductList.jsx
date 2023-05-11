import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { deleteProduct } from '../../features/products/productSlice';
import Snackbar from '../Snackbar/Snackbar';
import {
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';

function ProductList({ products }) {
  const admin = useSelector((state) => state.global.isToggleOn);
  const [refresh, setRefresh] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(9);
  const currency = '$';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setVisibleProducts(products.length);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
    setSnackbarMessage(`Product ${product.title} added to cart!`);
    setSnackbarType('success');
  };

  const handleProductEdit = (e, productId) => {
    e.stopPropagation();
    navigate(`/products/update_product/${productId}`);
  };

  const handleProductDelete = async (e, productId) => {
    e.stopPropagation();
    const res = await dispatch(deleteProduct(productId));
    if (res.error) {
      setSnackbarMessage('Error deleting product.');
      setSnackbarType('error');
    } else {
      setSnackbarMessage('Product deleted successfully!');
      setSnackbarType('success');

      setRefresh(!refresh);
    }
  };

  // useffect to refresh page is setRefresh changed
  useEffect(() => {
    console.log('refreshing');
  }, [refresh]);

  return (
    <>
      <Snackbar type={snackbarType} message={snackbarMessage} />
      <S.ProductListContainer>
        {products.length === 0 ? (
          <S.NoProductsMessage>No products found</S.NoProductsMessage>
        ) : (
          <>
            <S.ProductList>
              {products.slice(0, visibleProducts).map((product) => (
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
                    <S.ProductButton
                      className='addToCart'
                      onClick={(e) => handleAddToCart(e, product)}
                      aria-label='Add to cart'
                    >
                      <S.ButtonIcon as={AiOutlineShoppingCart} />
                    </S.ProductButton>
                    {admin && (
                      <>
                        <S.ProductButton
                          className='edit'
                          onClick={(e) => {
                            handleProductEdit(e, product._id);
                          }}
                          aria-label='Edit product'
                        >
                          <S.ButtonIcon as={AiOutlineEdit} />
                        </S.ProductButton>
                        <S.ProductButton
                          className='delete'
                          onClick={(e) => {
                            handleProductDelete(e, product._id);
                          }}
                          aria-label='Delete product'
                        >
                          <S.ButtonIcon as={AiOutlineDelete} />
                        </S.ProductButton>
                      </>
                    )}
                  </S.ButtonWrapper>
                </S.Product>
              ))}
            </S.ProductList>
            {visibleProducts < products.length && (
              <S.LoadMoreButton onClick={handleLoadMore}>
                Load more
              </S.LoadMoreButton>
            )}
          </>
        )}
      </S.ProductListContainer>
    </>
  );
}

export default ProductList;
