import React, { useState } from 'react';
import * as S from './styled';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSearchTerm('');
    onSearch('');
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <S.SearchBarForm onSubmit={handleSearch} expanded={expanded}>
      <S.SearchInput
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label='Search'
        expanded={expanded}
      />
      {searchTerm && expanded && (
        <S.SearchButton
          type='button'
          onClick={handleClear}
          aria-label='Clear search'
        >
          <S.SearchIconClear />
        </S.SearchButton>
      )}
      <S.SearchIconWrapper
        onClick={handleToggleExpand}
        aria-label='Toggle search'
      >
        <S.SearchIcon />
      </S.SearchIconWrapper>
      {expanded && (
        <S.CloseIconWrapper
          onClick={handleToggleExpand}
          aria-label='Hide search'
        >
          <S.CloseIcon />
        </S.CloseIconWrapper>
      )}
    </S.SearchBarForm>
  );
}

export default SearchBar;
