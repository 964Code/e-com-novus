import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  color: #777;
`;
