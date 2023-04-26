import React, { useState } from 'react';
import * as S from './styled';
import { useParams } from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector } from 'react-redux';
import { selectProductsByCategory } from '../../features/products/productSlice';
import SearchBar from '../../components/Searchbar/Searchbar';

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

  const [searchTerm, setSearchTerm] = React.useState('');

  let filteredProducts = products;

  if (searchTerm.length > 0 && products.length > 0) {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().match(searchTerm.toLowerCase());
    });
  }

  return (
    <>
      <S.MainContainer>
        <CategoriesMenu />
        <SearchBar onSearch={setSearchTerm} />
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
        <ProductList products={filteredProducts} />
      </S.MainContainer>
    </>
  );
}

export default SelectedCategory;
