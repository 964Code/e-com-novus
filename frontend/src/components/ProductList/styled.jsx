import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px auto 90px auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

/* export const ProductList = styled.div`
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
 */

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  justify-content: center;

  @media (max-width: 905px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  height: 510px;
  width: 285px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  object-fit: cover;
  padding: 0 0 15px 0;
  max-height: 100%;
  object-position: top;
`;

export const TextWrapper = styled.div`
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
`;

export const ProductDescription = styled.p``;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 0 10px;
  margin: 0 0 10px 0;
`;

export const ProductButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.addToCart {
    background-color: #42bb00;
  }

  &.edit {
    background-color: #ff9100;
  }

  &.delete {
    background-color: #ff0000;
  }

  &:not(:last-child) {
    margin-right: 10px;
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

export const NoProductsMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #ccc;
  margin: 2rem auto;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  flex-grow: 1;
`;
export const LoadMoreButton = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  margin: 20px auto;
  padding: 0;
  border: 2px solid #333;
  background-color: transparent;
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
