import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as S from './styled';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import {
  deleteProduct,
  selectProductById,
} from '../../features/products/productSlice';
import {
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Snackbar from '../../components/Snackbar/Snackbar';

function Product() {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addItem(selectedProduct));
    setSnackbarMessage('Product added to cart!');
    setSnackbarType('success');
  };

  const handleEditProduct = () => {
    navigate(`/products/update_product/${id}`);
  };

  const handleDeleteProduct = async () => {
    const res = await dispatch(deleteProduct(id));
    if (res.error) {
      setSnackbarMessage('Error deleting product.');
      setSnackbarType('error');
    } else {
      setSnackbarMessage('Product deleted successfully!');
      setSnackbarType('success');
      setTimeout(() => navigate('/'), 1500);
    }
  };

  // Get product by id if id is present
  const selectedProduct = id
    ? useSelector((state) => selectProductById(state, id))
    : null;

  if (!selectedProduct) return <h1>Product not found</h1>;

  return (
    <>
      <Snackbar type={snackbarType} message={snackbarMessage} />
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
          <S.ProductButtons>
            <S.ActionButton onClick={handleAddToCart}>
              Add to Cart
            </S.ActionButton>
            <S.ActionButton onClick={handleEditProduct}>Edit</S.ActionButton>
            <S.ActionButton onClick={handleDeleteProduct}>
              Delete
            </S.ActionButton>
          </S.ProductButtons>
        </S.ProductDetails>
      </S.ProductPageContainer>
    </>
  );
}

export default Product;
