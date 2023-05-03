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
  height: 400px;
  object-fit: contain;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
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
  padding: 0 15px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
