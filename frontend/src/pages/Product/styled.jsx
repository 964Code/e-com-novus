import styled from 'styled-components';

export const ProductContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 15px;
`;

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 85px auto;
  max-width: 800px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 5px 20px;
  border-radius: 5px;
  border: 2.5px solid #e5e5e5;
  background-color: #fff;
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
  white-space: pre-wrap;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  margin-bottom: 10px;
`;

export const ProductCategory = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 0 15px;
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  font-weight: 400;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-family: 'Lato', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  font-size: 1rem;
  color: #6d6d6d;
  margin-bottom: 10px;
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex: 1;
`;

export const ActionButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: #fff;
  border: none;
  color: #070707;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &.addToCart {
    background-color: #97e696;
  }

  &.edit:hover {
    background-color: #ffcc88;
  }

  &.delete:hover {
    background-color: #f37171;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  color: black;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  max-width: 800px;
  margin: 15px auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffecd4;
  border: none;
  color: #070707;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffcc88;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
