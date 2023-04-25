import React from 'react';
import * as S from './styled';
import { useParams } from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';

function SelectedCategory() {
  return (
    <>
      <CategoriesMenu />
      <h2>Categories page</h2>
    </>
  );
}

export default SelectedCategory;
