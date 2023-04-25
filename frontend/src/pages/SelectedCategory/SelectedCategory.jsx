import React from 'react';
import * as S from './styled';
import { useParams } from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector } from 'react-redux';
import { selectProductsByCategory } from '../../features/products/productSlice';

function SelectedCategory() {
  const { category, subcategory } = useParams();
  const isAllCategory = subcategory && subcategory.includes('all');

  const products = useSelector((state) =>
    selectProductsByCategory(
      state,
      category,
      isAllCategory ? null : subcategory
    )
  );

  return (
    <>
      <CategoriesMenu />
      <S.Container>
        <S.Title>
          {category} {subcategory && `> ${subcategory}`}
        </S.Title>
        {isAllCategory ? (
          <S.Message isAllCategory>All products for {category}</S.Message>
        ) : (
          <S.Message>Selected subcategory: {subcategory}</S.Message>
        )}
      </S.Container>
      <ProductList products={products} />
    </>
  );
}

export default SelectedCategory;
