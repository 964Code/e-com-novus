import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { deleteProduct } from '../../features/products/productSlice';
import Snackbar from '../Snackbar/Snackbar';
import {
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';

function ProductList({ products }) {
  const [showEditDelete, setShowEditDelete] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const currency = '$';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
    setSnackbarMessage('Product added to cart!');
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
    }
  };

  return (
    <>
      <Snackbar type={snackbarType} message={snackbarMessage} />
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
                  <S.ProductButton
                    className='addToCart'
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <S.ButtonIcon as={AiOutlineShoppingCart} />
                  </S.ProductButton>
                  {showEditDelete && (
                    <>
                      <S.ProductButton
                        className='edit'
                        onClick={(e) => {
                          handleProductEdit(e, product._id);
                        }}
                      >
                        <S.ButtonIcon as={AiOutlineEdit} />
                      </S.ProductButton>
                      <S.ProductButton
                        className='delete'
                        onClick={(e) => {
                          handleProductDelete(e, product._id);
                        }}
                      >
                        <S.ButtonIcon as={AiOutlineDelete} />
                      </S.ProductButton>
                    </>
                  )}
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
