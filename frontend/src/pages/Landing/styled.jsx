import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingContainer = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 62px);
  padding: 1rem;
`;

export const LandingHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  span.cursive {
    font-family: 'caveat', sans-serif;
    font-weight: 700;
    font-size: 3rem;
  }
`;

export const LandingSubHeader = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const LandingButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    background-color: #f98a22;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
