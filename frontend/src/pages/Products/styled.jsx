import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const SortLabel = styled.label`
  font-size: 1rem;
  margin-right: 10px;
  font-weight: bold;
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
