import styled from 'styled-components';

export const CartSection = styled.section`
  margin: 0 auto;
  margin: 40px auto 0 auto;
  padding: 2.5rem 0;
  max-width: 1200px;
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;
  padding: 0 10px;
`;

export const CartHeader = styled.header`
  text-align: center;
`;

export const CartTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

export const EmptyCartText = styled.h4`
  text-transform: capitalize;
  color: #858687;
  margin-top: 1rem;
  text-align: center;
`;

export const CartItems = styled.div``;

export const CartFooter = styled.footer`
  margin-top: 4rem;
  text-align: center;
`;

export const CartSeparator = styled.hr`
  background: #777777;
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
  padding: 10px 15px;
  background-color: #f8d48b;
  color: #333;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    background-color: #e99444;
  }
`;

export const CheckoutButton = styled.button`
  padding: 10px 15px;
  background-color: #82e982;
  color: #333;
  font-size: 0.8rem;
  border: none;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;
  margin-left: 1rem;

  &:hover {
    background-color: #27bf43;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
