import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  margin: 30px auto;
  display: flex;
  max-width: 1200px;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  border: 1px solid yellow;
  width: 100%;
  height: 100%;

  @media (max-width: 905px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  width: 285px;
  height: 510px;
  margin: 0 auto;
`;

export const ProductImageContainer = styled.div`
  min-height: 70%;
  border: 1px solid green;
  min-width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const groupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductTitle = styled.h2``;

export const ProductDescription = styled.p``;

export const ProductPrice = styled.p``;

export const ProductButton = styled.button``;

export const ProductLink = styled(Link)``;

export const ProductButtonContainer = styled.div``;
