import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { selectCartAmount } from '../../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAdmin } from '../../features/global/globalSlice';
import { FiMenu } from 'react-icons/fi';

const NewNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const amount = useSelector(selectCartAmount);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const admin = useSelector((state) => state.global.isToggleOn);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAdminMode = () => {
    dispatch(toggleAdmin());
  };

  const handleCartClick = () => {
    navigate('/cart');
    if (isMobileDropdownOpen) {
      setIsMobileDropdownOpen(false);
    }
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    };
  }, []);

  return (
    <S.NavbarContainer>
      <S.Navbar>
        <S.Logo
          onClick={() => {
            if (isMobileDropdownOpen) toggleMobileDropdown();
            navigate('/');
          }}
        >
          UM
        </S.Logo>
        <S.NavItemList open={isMobileDropdownOpen}>
          <S.NavItem
            onClick={() => {
              toggleMobileDropdown();
              navigate('/products');
            }}
          >
            Products
          </S.NavItem>
          <S.NavItem
            onClick={() => {
              toggleMobileDropdown();
              navigate('/about');
            }}
          >
            About
          </S.NavItem>
          <S.NavItem className='dropdown' onClick={toggleDropdown}>
            Admin
            <S.DropdownMenu className='dropdown' open={isDropdownOpen}>
              {admin && (
                <S.DropdownItem
                  onClick={() => {
                    toggleDropdown();
                    toggleMobileDropdown();
                    navigate('/addproducts');
                  }}
                >
                  Add Product
                </S.DropdownItem>
              )}
              <S.DropdownItem
                onClick={() => {
                  toggleDropdown();
                  toggleMobileDropdown();
                  handleAdminMode();
                }}
              >
                Admin Mode
              </S.DropdownItem>
            </S.DropdownMenu>
          </S.NavItem>
        </S.NavItemList>
        <S.StyledFlexWrapper>
          <S.HamburgerIcon
            onClick={toggleMobileDropdown}
            open={isMobileDropdownOpen}
          />
        </S.StyledFlexWrapper>
        <S.CartContainer onClick={handleCartClick}>
          <S.CartIcon />
          {amount > 0 && <S.CartCount>{amount}</S.CartCount>}
        </S.CartContainer>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default NewNavbar;
