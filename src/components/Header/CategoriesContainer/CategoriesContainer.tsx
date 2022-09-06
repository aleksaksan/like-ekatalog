import React from 'react'
import { categoriesArr } from './CategoriesArr';
import "./CategoriesContainer.scss";

export const CategoriesContainer = () => {
  return (
    <div className="categories-container m-width">
      {categoriesArr.map((category)=>(
        <div className="category-item" key={category.id}>
          {category.name}
        </div>))}
      
    </div>
  )
};
