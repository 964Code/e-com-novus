import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingContainer = styled.div`
  position: relative;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`;

export const LandingHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const LandingSubHeader = styled.h2`
  font-size: 1.5rem;
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
  font-variant: all-small-caps;
  font-size: 1.9rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;
  line-height: 1.2;

  &:hover {
    background-color: #dca537;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
