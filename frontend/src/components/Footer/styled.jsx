import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  border-top: 1px solid #ccc;
`;

export const FooterText = styled.p`
  margin-right: 10px;
`;

export const IconLink = styled.a`
  color: #000;
  margin-right: 10px;

  &:hover {
    color: #666;
  }
`;
