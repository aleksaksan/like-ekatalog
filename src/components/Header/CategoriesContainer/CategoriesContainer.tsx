import React from 'react'
import { CategoriesArr } from './CategoriesArr';
import "./CategoriesContainer.scss";

export const CategoriesContainer = () => {
  return (
    <div className="categories-container m-width">
      {CategoriesArr.map((item)=>(
        <div className="category-item" key={item.id}>
          {item.name}
        </div>))}
      
    </div>
  )
};
