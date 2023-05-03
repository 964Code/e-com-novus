import React, { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewNavbar = () => {
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cart.amount);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <S.Navbar>
      <S.Logo onClick={() => navigate('/landingPage')}>Logo</S.Logo>
      <S.NavItemList>
        <S.NavItem onClick={() => navigate('/products')}>Products</S.NavItem>
        <S.NavItem onClick={() => navigate('/about')}>About</S.NavItem>
        <S.NavItem onClick={toggleDropdown}>
          Admin
          <S.DropdownMenu open={isDropdownOpen}>
            <S.DropdownItem onClick={() => navigate('/addproduct')}>
              Add Product
            </S.DropdownItem>
            <S.DropdownItem onClick={() => navigate('/adminmode')}>
              Admin Mode
            </S.DropdownItem>
          </S.DropdownMenu>
        </S.NavItem>
      </S.NavItemList>
      <S.CartContainer onClick={handleCartClick}>
        <S.CartIcon />
        <S.CartCount>{cartItemCount}</S.CartCount>
      </S.CartContainer>
    </S.Navbar>
  );
};

export default NewNavbar;
