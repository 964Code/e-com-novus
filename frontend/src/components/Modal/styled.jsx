import styled from 'styled-components';

//TODO: FIX STYLING
export const ModalContainer = styled.aside`
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
  text-transform: capitalize;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ConfirmButton = styled.button`
  text-transform: uppercase;
  background: #ff4343;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
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
  color: #333;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #ccc;
  }
`;
