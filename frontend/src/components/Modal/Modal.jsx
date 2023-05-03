import React from 'react';
import { closeModal } from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import * as S from './styled';

function Modal() {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal' style={{ backgroundColor: 'grey' }}>
        <h4>modal content</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type='button'
            className='btn cancel-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
