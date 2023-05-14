import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { selectProducts } from '../../features/products/productSlice';
import ProductList from '../../components/ProductList/ProductList';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import SearchBar from '../../components/Searchbar/Searchbar';
import * as S from './styled';
import Footer from '../../components/Footer/Footer';

function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('lowToHigh');
  const [sortOptionsVisible, setSortOptionsVisible] = React.useState(false);

  // Return loading if products are not fetched
  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  let filteredProducts = [...products];

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
      <S.Container>
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

        <ProductList products={filteredProducts} />
      </S.Container>
    </>
  );
}

export default Products;
