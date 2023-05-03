import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px auto 90px auto;
  display: flex;
  max-width: 1200px;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  height: 100%;

  @media (max-width: 905px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  height: 510px;
  width: 285px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 350px) {
    width: 95%;
  }
`;

/* export const ProductImageContainer = styled.div`
  min-height: 70%;
  min-width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;
 */

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  /*   border: 1px solid red; */
`;

export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 0 10px;
`;

export const ProductTitle = styled.h2`
  line-height: 1.5;
  padding: 0 10px;
  text-align: center;
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
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:first-child {
    margin-right: 10px;
  }
`;

export const ProductLink = styled(Link)``;

export const ProductButtonContainer = styled.div``;

export const NoProductsMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #ccc;
  margin: 2rem auto;
`;
