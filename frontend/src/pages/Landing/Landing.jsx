import React from 'react';
import * as S from './styled';

function Landing() {
  return (
    <S.LandingContainer>
      <S.LandingHeader>Welcome to UniqMarket</S.LandingHeader>
      <S.LandingSubHeader>
        Discover a curated selection of unique and interesting products.
        Products are temporare and limited in quantity, so don't miss out!
      </S.LandingSubHeader>
      <S.LandingButton to='/products' aria-label='navigate to products'>
        Explore Products
      </S.LandingButton>
    </S.LandingContainer>
  );
}

export default Landing;
