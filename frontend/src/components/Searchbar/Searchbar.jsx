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
    <S.SearchBarForm onSubmit={handleSearch} role='search'>
      <label htmlFor='searchInput'>
        <S.SearchInput
          type='text'
          id='searchInput'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label='Search'
          expanded={expanded}
        />
      </label>
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
        aria-label={expanded ? 'Hide search' : 'Toggle search'}
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
