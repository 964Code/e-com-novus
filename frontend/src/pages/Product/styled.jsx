import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 800px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 30px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ProductCategory = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
