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
    let path = `/products/${selectedCategory.toLowerCase()}`;

    if (subcategory !== 'all') {
      path += `/${subcategory.toLowerCase()}`;
    }

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
        <S.CategoriesMenuList>
          {Object.entries(categoriesObj).map(([key, value]) => (
            <S.CategoriesMenuItem key={key}>
              <S.CategoriesMenuLink
                onClick={() => {
                  if (selectedCategory === key) {
                    setShowSubcategories(!showSubcategories);
                  } else {
                    setSelectedCategory(key);
                    setShowSubcategories(true);
                  }
                }}
                active={selectedCategory === key}
              >
                {value.name}
              </S.CategoriesMenuLink>
              {showSubcategories &&
                selectedCategory === key &&
                value.subcategories && (
                  <S.CategoriesSubMenuList>
                    {Object.values(value.subcategories).map((subcategory) => (
                      <S.CategoriesMenuItem key={subcategory.name}>
                        <S.CategoriesSubMenuLink
                          onClick={() =>
                            handleSubcategoryClick(subcategory.name)
                          }
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

/* import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function CategoriesMenu() {
  const navigate = useNavigate();
  const categories = ['All', 'Electronics', 'Fashion', 'Home'];

  return (
    <>
      <S.CategoriesMenuContainer>
        <S.CategoriesMenuList>
          {categories.map((category) => (
            <S.CategoriesMenuItem key={category}>
              <S.CategoriesMenuLink
                onClick={() => {
                  navigate(`/products/${category.toLowerCase()}`);
                }}
              >
                {category}
              </S.CategoriesMenuLink>
            </S.CategoriesMenuItem>
          ))}
        </S.CategoriesMenuList>
      </S.CategoriesMenuContainer>
      ;
    </>
  );
}

export default CategoriesMenu;
 */
