import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  color: #777;
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
