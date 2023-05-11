import React from 'react';
import * as S from './styled';

function About() {
  return (
    <S.AboutContainer>
      <S.AboutHeader>About UniqMarket</S.AboutHeader>
      <S.AboutText>
        UniqMarket is a one-of-a-kind e-commerce platform that features a
        curated selection of interesting and unique products. We carefully
        handpick each item to ensure a memorable shopping experience for our
        customers.
      </S.AboutText>
      <S.AboutText>
        What sets us apart is that our collection of products is time-limited.
        This creates a sense of exclusivity and excitement around each product,
        making your purchases even more special.
      </S.AboutText>
      <S.AboutText>
        Our mission is to inspire and delight our customers with a constantly
        evolving selection of products that spark curiosity and creativity. We
        believe that by offering limited-time items, we can cultivate a truly
        extraordinary shopping experience that keeps you coming back for more.
      </S.AboutText>
    </S.AboutContainer>
  );
}

export default About;
