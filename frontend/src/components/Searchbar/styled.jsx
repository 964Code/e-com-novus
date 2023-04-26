import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 2px solid #f0f0f0;
  max-width: 400px;
  box-shadow: 0 0 5px #ccc;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1rem;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 5px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #333;
  font-size: 1.2rem;
`;
