import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  margin: 30px auto;
  display: flex;
  max-width: 1200px;
`;

export const ProductList = styled.div`
  border: 1px solid yellow;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
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
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  height: 510px;
  width: 285px;
  margin: 0 auto;
`;

export const ProductImageContainer = styled.div`
  border-bottom: 1px solid green;
  min-height: 70%;
  min-width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: flex-end;
  height: 30px;
  width: 100%;
`;

export const ProductTitle = styled.h2`
  line-height: 1.5;
`;

export const ProductDescription = styled.p``;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const ProductButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 0;

  //TODO - fix border functionality

  &:first-child {
    border-right: 2px solid #640e0e;
  }

  &:not(:last-child) {
    border-right: 1px solid #000;
  }

  &:only-child {
    border: none;
  }
`;

export const ProductLink = styled(Link)``;

export const ProductButtonContainer = styled.div``;
