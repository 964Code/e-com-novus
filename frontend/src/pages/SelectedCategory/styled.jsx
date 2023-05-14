import styled from 'styled-components';
import { IoFilter } from 'react-icons/io5';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 20 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Message = styled.p`
  font-size: 1rem;
  display: flex;
  text-align: center;
  font-weight: 400;
  color: #777;
  font-weight: bold;
  text-transform: uppercase;
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
