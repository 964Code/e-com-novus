import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const ProductButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
`;

export const ProductLink = styled(Link)`
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProductButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
