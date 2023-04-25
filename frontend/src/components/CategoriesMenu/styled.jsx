import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  background-color: #fff;
  /* border-radius: 10px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: 2px solid #fff;
`;

export const CategoriesMenuList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CategoriesMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #000;
  }
`;

export const CategoriesMenuLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #640e0e;
  }
`;
