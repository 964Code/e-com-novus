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
`;

export const SortSelect = styled.select`
  font-size: 1rem;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: #333;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eee;
    outline: none;
  }
`;
