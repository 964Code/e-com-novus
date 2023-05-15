import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin7Line, RiCloseFill } from 'react-icons/ri';

export const SearchBarForm = styled.form`
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 2px solid #f0f0f0;
  max-width: 400px;
  transition: max-width 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease-out, border 0.3s ease-out;

  box-shadow: 0 0 5px #ccc;
  margin: 20px 0;
  border: 2px solid #ccc;
  :focus-within {
    border: 3px solid #1ac1c6;
  }
  ${({ expanded }) =>
    !expanded &&
    css`
      max-width: 50px;
      border: none;
      box-shadow: none;
      background-color: transparent;
    `}
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.1rem;
  outline: none;
  width: 100%;
  transition: display 0.3s ease-out;

  &::placeholder {
    color: #0a0a0a;
  }
  ${({ expanded }) =>
    !expanded &&
    css`
      display: none;
    `}
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
  font-size: 1.5rem;
`;

export const SearchIconClear = styled(RiDeleteBin7Line)`
  color: #333;
  font-size: 1.5rem;
`;

export const CloseIcon = styled(RiCloseFill)`
  color: #333;
  font-size: 2.2rem;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
