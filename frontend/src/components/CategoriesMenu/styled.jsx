import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  border: 2.5px solid #cdcbcbc5;
  /*  border-radius: 5px; */
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 3px 10px;
  z-index: 10;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CategoriesMenuList = styled.ol`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #fff;
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
  color: #bbb;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #f4c9a1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    border-top: none;
    border-bottom: none;
    border-bottom: 1px solid #c3c3c3;

    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: transparent;
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
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    transition: none;
    /*  border: 1px solid red; */

    &:hover {
      background-color: #f4c9a1;
    }

    ${(props) =>
      props.active &&
      props.showSubcategories &&
      `
      color: #000;
      border-bottom: 2px solid #000;
      background-color: #f4c9a1;
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
  background-color: #ffffff;
  border-radius: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  /*   box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 3px 3px; */
  border-bottom: 2px solid #cdcbcbc5;
  border-left: 2px solid #cdcbcbc5;
  border-right: 2px solid #cdcbcbc5;
  border-radius: 0 0 5px 5px;

  /*  border: 2.5px solid #cdcbcbc5; */
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
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  color: #000;

  &:hover {
    background-color: #f4c9a1;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }
`;
