import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.section`
  height: 100%;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  background-color: transparent;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  justify-content: center;

  @media (max-width: 905px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Product = styled.figure`
  display: flex;
  flex-direction: column;
  height: 510px;
  width: 285px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.4) 0 5px 20px;
  border-radius: 5px;
  border: 2.5px solid #e5e5e5;
  overflow: hidden;

  @media (max-width: 350px) {
    width: 95%;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  background-color: #fff;
`;

export const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0 0 30px 0;
  max-height: 100%;
  object-position: center;
`;

export const TextWrapper = styled.figcaption`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  flex: 1;
`;

export const ProductTitle = styled.h2`
  line-height: 1.3;
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const ProductDescription = styled.p``;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #6d6d6d;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  border-top: 2.5px solid #e6e4e4;
`;

export const ProductButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex: 1;
  height: 100%;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.addToCart {
    background-color: #ffffff;
  }
  &.addToCart:hover {
    background-color: #97e696;
  }

  &.edit:hover {
    background-color: #ffcc88;
  }

  &.delete:hover {
    background-color: #f37171;
  }

  &:not(:last-child) {
    /*  margin-right: 10px; */
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  color: black;
`;

export const ProductLink = styled(Link)``;

export const ProductButtonContainer = styled.div``;

export const NoProductsMessage = styled.aside`
  text-align: center;
  font-size: 1.2rem;
  color: #555555;
  margin: 2rem auto;
  text-transform: uppercase;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px auto;
`;

export const LoadMoreButton = styled.button`
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 5px;
  border: 2px solid #333;
  background-color: white;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 36px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
