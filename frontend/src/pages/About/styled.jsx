import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  margin-top: 60px;
`;

export const AboutHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;
`;
