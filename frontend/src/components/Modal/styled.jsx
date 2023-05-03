import styled from 'styled-components';

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
  width: 90vw;
  max-width: 20rem;
  background: grey;
  border-radius: 0.25rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
`;

export const ModalText = styled.h4`
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled.button`
  text-transform: uppercase;
  background: hsl(360, 67%, 44%);
  padding: 0.5rem 1rem;
  color: #fff;
  border: 1px solid hsl(360, 67%, 44%);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: hsl(360, 71%, 66%);
    border-color: hsl(360, 71%, 66%);
  }
`;

export const CancelButton = styled.button`
  text-transform: uppercase;
  background: transparent;
  padding: 0.5rem 1rem;
  color: hsl(360, 67%, 44%);
  border: 1px solid hsl(360, 67%, 44%);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: hsl(360, 71%, 66%);
    color: hsl(360, 67%, 44%);
    border-color: hsl(360, 71%, 66%);
  }
`;
