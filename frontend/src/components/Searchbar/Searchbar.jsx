import React, { useState } from 'react';
import * as S from './styled';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <S.SearchBarForm onSubmit={handleSearch}>
      <S.SearchInput
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <S.SearchButton type='submit'>
          <S.SearchIconClear onClick={handleClear} />
        </S.SearchButton>
      )}
      <S.SearchButton type='submit'>
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchBarForm>
  );
}

export default SearchBar;
