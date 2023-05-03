import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import CartItem from '../CartItem/CartItems';
import * as S from './styled';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <S.CartSection>
        <S.CartHeader>
          <S.CartTitle>Your bag</S.CartTitle>
          <S.EmptyCartText>is currently empty</S.EmptyCartText>
        </S.CartHeader>
      </S.CartSection>
    );
  }

  return (
    <S.CartSection>
      <S.CartHeader>
        <S.CartTitle>Your bag</S.CartTitle>
      </S.CartHeader>
      <S.CartItems>
        {cartItems.map((item) => {
          return <CartItem key={item._id} {...item} />;
        })}
      </S.CartItems>
      <S.CartFooter>
        <S.CartSeparator />
        <S.CartTotal>
          <S.CartTotalText>
            total <S.CartTotalAmount>${total.toFixed(2)}</S.CartTotalAmount>
          </S.CartTotalText>
        </S.CartTotal>
        <S.ClearButton onClick={() => dispatch(openModal())}>
          clear cart
        </S.ClearButton>
      </S.CartFooter>
    </S.CartSection>
  );
};

export default CartContainer;
