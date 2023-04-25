import React from 'react';
import * as S from './styled';

function CategoriesMenu() {
  const categories = ['All', 'Electronics', 'Jewelery'];

  return (
    <>
      <S.CategoriesMenuContainer>
        <S.CategoriesMenuList>
          {categories.map((category) => (
            <S.CategoriesMenuItem key={category}>
              <S.CategoriesMenuLink href='#'>{category}</S.CategoriesMenuLink>
            </S.CategoriesMenuItem>
          ))}
        </S.CategoriesMenuList>
      </S.CategoriesMenuContainer>
    </>
  );
}

export default CategoriesMenu;
