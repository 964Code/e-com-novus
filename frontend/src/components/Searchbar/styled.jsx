import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';

export const SearchBarForm = styled.form`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 2px solid #f0f0f0;
  max-width: 400px;
  box-shadow: 0 0 5px #ccc;
  margin: 20px 0;
  border: 2px solid #ccc;
  :focus-within {
    border: 3px solid #1ac1c6;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.1rem;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #0a0a0a;
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

export const SearchIconClear = styled(RiDeleteBin7Line)`
  color: #333;
  font-size: 1.5rem;
`;
