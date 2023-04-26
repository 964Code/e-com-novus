import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {
  fetchProducts,
  selectProducts,
  deleteProduct,
} from '../../features/products/productSlice';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import SearchBar from '../../components/Searchbar/Searchbar';
import * as S from './styled';

function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');

  // Return loading if products are not fetched
  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  let filteredProducts = products;

  if (searchTerm.length > 0 && products.length > 0) {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().match(searchTerm.toLowerCase());
    });
  }

  return (
    <>
      <S.Container>
        <CategoriesMenu />
        <SearchBar onSearch={setSearchTerm} />
        <ProductList products={filteredProducts} />
      </S.Container>
    </>
  );
}

export default Products;
