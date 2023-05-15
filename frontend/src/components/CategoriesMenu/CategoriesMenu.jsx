import React, { useState, useRef, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { categoryData } from '../../data/categories/categories';

const CategoriesMenu = () => {
  const navigate = useNavigate();
  const categoriesObj = categoryData;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const containerRef = useRef(null);

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setShowSubcategories(!showSubcategories);
    } else {
      setSelectedCategory(category);
      setShowSubcategories(true);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setShowSubcategories(false);
    let path = `/products/${selectedCategory.toLowerCase()}/${subcategory.toLowerCase()}`;
    navigate(path);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSubcategories(false);
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.CategoriesMenuContainer ref={containerRef}>
        <S.CategoriesMenuList role='menu' aria-labelledby='main-menu'>
          {Object.entries(categoriesObj).map(([key, value]) => (
            <S.CategoriesMenuItem key={key}>
              <S.CategoriesMenuLink
                onClick={() => handleCategoryClick(key)}
                active={selectedCategory === key}
                showSubcategories={showSubcategories}
                aria-label='Category menu link'
              >
                {value.name}
              </S.CategoriesMenuLink>
              {showSubcategories &&
                selectedCategory === key &&
                value.subcategories && (
                  <S.CategoriesSubMenuList
                    role='menu'
                    aria-labelledby='sub-menu'
                  >
                    {Object.values(value.subcategories).map((subcategory) => (
                      <S.CategoriesMenuItem key={subcategory.name}>
                        <S.CategoriesSubMenuLink
                          onClick={() =>
                            handleSubcategoryClick(subcategory.name)
                          }
                          aria-label='Subcategory menu link'
                          role='sub-menu'
                        >
                          {subcategory.name}
                        </S.CategoriesSubMenuLink>
                      </S.CategoriesMenuItem>
                    ))}
                  </S.CategoriesSubMenuList>
                )}
            </S.CategoriesMenuItem>
          ))}
        </S.CategoriesMenuList>
      </S.CategoriesMenuContainer>
    </>
  );
};

export default CategoriesMenu;
