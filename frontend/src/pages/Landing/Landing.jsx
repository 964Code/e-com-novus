import React from 'react';
import * as S from './styled';
import LandingVideo from '../../assets/video/landing.mp4';
function Landing() {
  return (
    <S.LandingContainer>
      <S.BackgroundVideo autoPlay loop muted>
        <source src={LandingVideo} type='video/mp4' />
      </S.BackgroundVideo>
      <S.ContentContainer>
        <S.LandingHeader>Welcome to UniqMarket</S.LandingHeader>
        <S.LandingSubHeader>
          Discover a curated selection of unique and interesting products.
          Products are temporary and limited in quantity, so don't miss out!
        </S.LandingSubHeader>
        <S.LandingButton to='/products' aria-label='navigate to products'>
          Explore Products
        </S.LandingButton>
      </S.ContentContainer>
    </S.LandingContainer>
  );
}

export default Landing;
