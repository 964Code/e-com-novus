import React from 'react';
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
  const [sortOptionsVisible, setSortOptionsVisible] = React.useState(false);

  const products = useSelector((state) =>
    selectProductsByCategory(
      state,
      category,
      isAllCategory ? null : subcategory
    )
  );

  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('lowToHigh');

  let filteredProducts = products;

  if (searchTerm.length > 0 && products.length > 0) {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().match(searchTerm.toLowerCase());
    });
  }

  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <S.MainContainer>
        <CategoriesMenu />
        <S.SortContainer>
          <SearchBar onSearch={setSearchTerm} />
          <S.SortLabel htmlFor='sortSelect'></S.SortLabel>
          <S.SortSelectContainer>
            <S.SortIcon
              onClick={() => setSortOptionsVisible(!sortOptionsVisible)}
            />
            {sortOptionsVisible && (
              <S.SortSelect
                id='sortSelect'
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                aria-label='Sort by price'
              >
                <option value='lowToHigh'>Low to high</option>
                <option value='highToLow'>High to low</option>
              </S.SortSelect>
            )}
          </S.SortSelectContainer>
        </S.SortContainer>
        <S.Container>
          <S.Title>{category}</S.Title>
          {isAllCategory ? (
            <S.Message isAllCategory>All products for {category}</S.Message>
          ) : (
            <S.Message>{subcategory}</S.Message>
          )}
        </S.Container>
        <ProductList products={filteredProducts} />
      </S.MainContainer>
    </>
  );
}

export default SelectedCategory;
