import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AiOutlineUp as ChevronUp,
  AiOutlineDown as ChevronDown,
} from 'react-icons/ai';
import { removeItem, increase, decrease } from '../../features/cart/cartSlice';
import * as S from './styled';

const CartItem = ({ _id, image, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(_id));
  };

  const handleIncreaseAmount = () => {
    dispatch(increase({ _id }));
  };

  const handleDecreaseAmount = () => {
    if (amount === 1) {
      dispatch(removeItem(_id));
    } else {
      dispatch(decrease({ _id }));
    }
  };

  return (
    <S.CartItemWrapper>
      <S.CartItemImage src={image} alt={title} />
      <S.CartItemInfo>
        <S.CartItemTitle>{title}</S.CartItemTitle>
        <S.ItemPrice>${price}</S.ItemPrice>
        <S.RemoveButton onClick={handleRemoveItem}>remove</S.RemoveButton>
      </S.CartItemInfo>
      <S.AmountButtons>
        <S.AmountButton onClick={handleIncreaseAmount}>
          <ChevronUp />
        </S.AmountButton>
        <S.Amount>{amount}</S.Amount>
        <S.AmountButton onClick={handleDecreaseAmount}>
          <ChevronDown />
        </S.AmountButton>
      </S.AmountButtons>
    </S.CartItemWrapper>
  );
};

export default CartItem;
