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
import { useNavigate } from 'react-router-dom';
import Snackbar from '../../components/Snackbar/Snackbar';
import {
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

function Product() {
  const admin = useSelector((state) => state.global.isToggleOn);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [snackbarKey, setSnackbarKey] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addItem(selectedProduct));
    setSnackbarMessage(`Product ${selectedProduct.title} added to cart!`);
    setSnackbarType('success');
    setSnackbarKey((prevKey) => prevKey + 1);
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
    <S.ProductContainerWrapper>
      <Snackbar
        key={snackbarKey}
        type={snackbarType}
        message={snackbarMessage}
      />
      <S.ButtonWrapper>
        <S.BackButton onClick={() => navigate(-1)} aria-label='Go back'>
          <S.ButtonIcon as={IoIosArrowBack} />
        </S.BackButton>
      </S.ButtonWrapper>
      <S.ProductPageContainer>
        <S.ProductImage
          src={
            selectedProduct.image && selectedProduct.image.startsWith('https')
              ? selectedProduct.image
              : 'https://img.freepik.com/premium-psd/bottle-product-mockup-psd-beauty-packaging_53876-130082.jpg'
          }
          alt={selectedProduct.title}
          aria-label={`Image of ${selectedProduct.title}`}
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
            <S.ActionButton
              onClick={handleAddToCart}
              className='addToCart'
              aria-label='Add to cart'
            >
              {/* <span>Add to cart</span> */}
              <S.ButtonIcon
                as={AiOutlineShoppingCart}
                aria-label='Add to cart'
              />
            </S.ActionButton>
            {admin && (
              <>
                <S.ActionButton
                  onClick={handleEditProduct}
                  className='edit'
                  aria-label='Edit product'
                >
                  <S.ButtonIcon as={AiOutlineEdit} />
                </S.ActionButton>
                <S.ActionButton
                  onClick={handleDeleteProduct}
                  className='delete'
                  aria-label='Delete product'
                >
                  <S.ButtonIcon as={AiOutlineDelete} />
                </S.ActionButton>
              </>
            )}
          </S.ProductButtons>
        </S.ProductDetails>
      </S.ProductPageContainer>
    </S.ProductContainerWrapper>
  );
}

export default Product;
