import styled from 'styled-components';
/* import { ChevronDown, ChevronUp } from 'react-icons/ai'; */

export const CartItemWrapper = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const CartItemImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

export const CartItemInfo = styled.div``;

export const CartItemTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const ItemPrice = styled.h5`
  color: #617d98;
`;

export const RemoveButton = styled.button`
  color: #645cff;
  letter-spacing: 0.25rem;
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: all 0.3s linear;

  &:hover {
    color: #a29dff;
  }
`;

export const AmountButtons = styled.div``;

export const AmountButton = styled.button`
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #645cff;
  }

  &:hover svg {
    color: #a29dff;
  }
`;

export const Amount = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
`;
