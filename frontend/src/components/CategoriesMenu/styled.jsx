/* import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
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
 */

/* import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: 2px solid #fff;

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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 10px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;

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
  color: ${(props) => (props.active ? '#640e0e' : '#000')};
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #640e0e;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid #fff;
    transition: none;

    &:hover {
      color: #000;
    }

    ${(props) =>
      props.active &&
      `
      color: #640e0e;
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
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    border-radius: 0;
  }
`;

export const CategoriesSubMenuLink = styled.a`
  display: block;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #640e0e;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    border-bottom: 2px solid #fff;
    transition: none;

    &:hover {
      color: #000;
    }
  }
`;
 */

import styled from 'styled-components';

export const CategoriesMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  border: 2px solid red;

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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

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
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    transition: none;

    ${(props) =>
      props.active &&
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
