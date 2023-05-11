import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const NavbarContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 2.5px solid #e5e5e5;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding: 15px;
  cursor: pointer;
`;

export const NavItemList = styled.ol`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-evenly;
`;

export const NavItem = styled.li`
  position: relative;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  width: 90%;
  text-align: center;
  font-variant: small-caps;

  &:not(:last-child) {
    border-right: 2px solid #e5e5e5;
  }
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const DropdownMenu = styled.ol`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e5e5;
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 150px;
  width: 500px;
  z-index: 100;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;

  width: 100%;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 2rem;
  color: #000;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%;
`;
