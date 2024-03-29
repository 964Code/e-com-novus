import React from 'react';
import { closeModal } from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import * as S from './styled';

function Modal({ text }) {
  const dispatch = useDispatch();
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalText>{text}</S.ModalText>
        <S.ButtonContainer>
          <S.ConfirmButton
            type='button'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </S.ConfirmButton>
          <S.CancelButton
            type='button'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </S.CancelButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default Modal;
