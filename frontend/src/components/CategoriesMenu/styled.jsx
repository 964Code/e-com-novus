import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CategoriesMenuList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CategoriesMenuItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 10px;
    border-top: none;
    border-bottom: none;
    border: 1px solid #e5e5e5;

    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const CategoriesMenuLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? '#000' : '#777')};
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    transition: none;

    ${(props) =>
      props.active &&
      props.showSubcategories &&
      `
      color: #000;
      border-bottom: 2px solid #000;
      `}
  }
`;

export const CategoriesSubMenuList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const CategoriesSubMenuLink = styled.a`
  display: block;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  color: #777;
  font-size: 1.2rem;
  font-weight: 500; // Add this line
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;
