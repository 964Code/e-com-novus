/*
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 1.5rem;
  color: #000;
  margin-left: 15px;
`;

export const CartBadge = styled.span`
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

export const NavbarContainer = styled.div`
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
`;

export const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavbarListItem = styled.li`
  position: relative;
`;

export const NavbarLink = styled(Link)`
  display: block;
  padding: 10px;
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #777;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e5e5;
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 150px;
`;

export const DropdownMenuItem = styled.li`
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const DropdownMenuLink = styled(Link)`
  display: block;
  padding: 10px;
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #777;
  }
`;

export const DropdownMenuText = styled.span`
  display: block;
  padding: 10px;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #777;
  }
`;
 */

import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Navbar = styled.nav`
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  width: 100%;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
`;

export const NavItemList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  position: relative;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e5e5;
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 150px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

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
  font-size: 1.5rem;
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
