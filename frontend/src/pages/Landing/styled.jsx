import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

export const LandingHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

export const LandingSubHeader = styled.h2`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
`;

export const LandingButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
