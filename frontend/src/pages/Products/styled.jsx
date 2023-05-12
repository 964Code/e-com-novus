import styled from 'styled-components';
import { IoFilter } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SortLabel = styled.label`
  font-size: 1rem;
  margin-right: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const SortSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SortSelect = styled.select`
  font-size: 1rem;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  appearance: none;

  &:hover,
  &:focus {
    border-color: #1ac1c6;
    outline: none;
  }
`;

export const SortIcon = styled(IoFilter)`
  font-size: 2rem;
  margin-right: 5px;
  cursor: pointer;
`;
