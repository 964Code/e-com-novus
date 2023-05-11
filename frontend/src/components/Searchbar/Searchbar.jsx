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
        aria-label='Search'
      />
      {searchTerm && (
        <S.SearchButton type='submit' aria-label='Clear search'>
          <S.SearchIconClear onClick={handleClear} />
        </S.SearchButton>
      )}
      <S.SearchButton type='submit' aria-label='Submit search'>
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchBarForm>
  );
}

export default SearchBar;
