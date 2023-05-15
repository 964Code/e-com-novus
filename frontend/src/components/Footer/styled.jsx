import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  border-top: 2.5px solid rgb(229, 229, 229);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', 'San Francisco', 'Helvetica Neue', Arial, 'Open Sans',
    sans-serif;

  @media (max-width: 768px) and (max-height: 1000px) {
    flex-direction: column;
    position: relative;
    padding: 0;
  }

  @media (max-height: 1000px) {
    position: relative;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  margin-right: 20px;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const IconLink = styled.a`
  color: #000;
  margin-right: 10px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #666;
    transform: rotate(360deg);
  }
`;

export const FooterLink = styled.a`
  color: #000;
  font-weight: 500;
  flex: 1;
  text-decoration: none;

  &:hover {
    color: #666;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /*   margin-bottom: 10px; */
  }
`;
