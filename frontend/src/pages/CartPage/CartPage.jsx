import * as React from 'react';
import * as S from './styled';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import CartContainer from '../../components/CartContainer/CartContaienr';

function CartPage() {
  const modalOpen = useSelector((state) => state.modal.isOpen);

  return (
    <div>
      <CartContainer />
      {modalOpen && <Modal />}
    </div>
  );
}

export default CartPage;
