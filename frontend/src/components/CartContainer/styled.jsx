import styled from 'styled-components';

export const CartSection = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: 50rem;
`;

export const CartHeader = styled.header`
  text-align: center;
`;

export const CartTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

export const EmptyCartText = styled.h4`
  text-transform: lowercase;
  color: #617d98;
  margin-top: 1rem;
  text-align: center;
`;

export const CartItems = styled.div``;

export const CartFooter = styled.footer`
  margin-top: 4rem;
  text-align: center;
`;

export const CartSeparator = styled.hr`
  background: #617d98;
  border-color: transparent;
  border-width: 0.25px;
`;

export const CartTotal = styled.div``;

export const CartTotalText = styled.h4`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const CartTotalAmount = styled.span``;

export const ClearButton = styled.button`
  text-transform: uppercase;
  background: transparent;
  padding: 0.5rem 1rem;
  color: hsl(360, 67%, 44%);
  border: 1px solid hsl(360, 67%, 44%);
  margin-top: 2.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: hsl(360, 71%, 66%);
    color: hsl(360, 67%, 44%);
    border-color: hsl(360, 71%, 66%);
  }
`;
