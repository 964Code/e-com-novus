import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { selectProducts } from '../../features/products/productSlice';
import ProductList from '../../components/ProductList/ProductList';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import SearchBar from '../../components/Searchbar/Searchbar';
import * as S from './styled';

function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('lowToHigh');

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
        <SearchBar onSearch={setSearchTerm} />
        <S.SortContainer>
          <S.SortLabel>Sort by price:</S.SortLabel>
          <S.SortSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value='lowToHigh'>Low to high</option>
            <option value='highToLow'>High to low</option>
          </S.SortSelect>
        </S.SortContainer>
        <ProductList products={filteredProducts} />
      </S.Container>
    </>
  );
}

export default Products;
