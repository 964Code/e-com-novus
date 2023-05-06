import * as React from 'react';
import * as S from './styled';

function ProductList({ products }) {
  const [showEditDelete, setShowEditDelete] = React.useState(true);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarType, setSnackbarType] = React.useState('');
  const [visibleProducts, setVisibleProducts] = React.useState(9); // Show 9 products at first
  const currency = '$';

  const handleLoadMore = () => {
    setVisibleProducts(products.length); // Show all products
  };

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
                    >
                      Add to Cart
                    </S.ProductButton>
                    {showEditDelete && (
                      <>
                        <S.ProductButton
                          className='edit'
                          onClick={(e) => {
                            handleProductEdit(e, product._id);
                          }}
                        >
                          Edit
                        </S.ProductButton>
                        <S.ProductButton
                          className='delete'
                          onClick={(e) => {
                            handleProductDelete(e, product._id);
                          }}
                        >
                          Delete
                        </S.ProductButton>
                      </>
                    )}
                  </S.ButtonWrapper>
                </S.Product>
              ))}
            </S.ProductList>
            {visibleProducts < products.length && (
              <S.LoadMoreContainer>
                <S.LoadMoreButton onClick={handleLoadMore}>
                  Load More
                </S.LoadMoreButton>
              </S.LoadMoreContainer>
            )}
          </>
        )}
      </S.ProductListContainer>
    </>
  );
}

export default ProductList;
