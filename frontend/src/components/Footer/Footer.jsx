import React from 'react';
import * as S from './styled';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.ContentWrapper>
        <S.FooterLinks>
          <S.FooterLink href='/contact'>Contact Us</S.FooterLink>
          <S.FooterLink href='/terms'>Terms of Service</S.FooterLink>
          <S.FooterLink href='/privacy'>Privacy Policy</S.FooterLink>
        </S.FooterLinks>
        <S.SocialMediaContainer>
          <S.FooterText>Follow us on social media</S.FooterText>
          <S.IconWrapper>
            <S.IconLink
              href='https://www.facebook.com/youraccount'
              aria-label='navigate to UniqMarket FaceBook-page'
            >
              <FaFacebook size={32} />
            </S.IconLink>
            <S.IconLink
              href='https://twitter.com/youraccount'
              aria-label='navigate to UniqMarket Twitter-page'
            >
              <FaTwitter size={32} />
            </S.IconLink>
            <S.IconLink
              href='https://www.instagram.com/youraccount'
              aria-label='navigate to UniqMarket Instagram-page'
            >
              <FaInstagram size={32} />
            </S.IconLink>
          </S.IconWrapper>
        </S.SocialMediaContainer>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
