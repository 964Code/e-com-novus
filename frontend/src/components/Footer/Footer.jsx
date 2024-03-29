import React from 'react';
import * as S from './styled';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterText>Follow us on social media:</S.FooterText>
      <S.IconLink href='https://www.facebook.com/youraccount'>
        <FaFacebook size={32} />
      </S.IconLink>
      <S.IconLink href='https://twitter.com/youraccount'>
        <FaTwitter size={32} />
      </S.IconLink>
      <S.IconLink href='https://www.instagram.com/youraccount'>
        <FaInstagram size={32} />
      </S.IconLink>
    </S.FooterContainer>
  );
};

export default Footer;
