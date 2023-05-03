import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AiOutlineUp as ChevronUp,
  AiOutlineDown as ChevronDown,
} from 'react-icons/ai';
import { removeItem, increase, decrease } from '../../features/cart/cartSlice';
import * as S from './styled';

const CartItem = ({ _id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <S.CartItemWrapper>
      <S.CartItemImage src={img} alt={title} />
      <S.CartItemInfo>
        <S.CartItemTitle>{title}</S.CartItemTitle>
        <S.ItemPrice>${price}</S.ItemPrice>
        <S.RemoveButton
          onClick={() => {
            dispatch(removeItem(_id));
          }}
        >
          remove
        </S.RemoveButton>
      </S.CartItemInfo>
      <S.AmountButtons>
        <S.AmountButton
          onClick={() => {
            dispatch(increase({ _id }));
          }}
        >
          <ChevronUp />
        </S.AmountButton>
        <S.Amount>{amount}</S.Amount>
        <S.AmountButton
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(_id));
              return;
            }
            dispatch(decrease({ _id }));
          }}
        >
          <ChevronDown />
        </S.AmountButton>
      </S.AmountButtons>
    </S.CartItemWrapper>
  );
};

export default CartItem;
