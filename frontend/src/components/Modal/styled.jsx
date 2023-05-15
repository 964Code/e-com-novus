import styled from 'styled-components';

export const ModalContainer = styled.aside`
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  width: 80vw;
  max-width: 20rem;
  background: #fff;
  border-radius: 0.25rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

export const ModalText = styled.h4`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ConfirmButton = styled.button`
  text-transform: uppercase;
  background: #144c6a;
  padding: 7px 14px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #ff6b6b;
  }
`;

export const CancelButton = styled.button`
  text-transform: uppercase;
  background: transparent;
  padding: 0.5rem 1rem;
  color: #000000;
  border: 1px solid #ccc;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #ccc;
  }
`;
