import React, { useState } from 'react'
import { categoriesArr } from './CategoriesArr';
import "./CategoriesContainer.scss";
import { Subcategory } from './Subcategory/Subcategory';

export const CategoriesContainer = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);

  return (
    <>
    <ul className="categories-container m-width" onMouseOver={()=>setIsHovered(true)}>
      {categoriesArr.map((category)=>(
        <li className="category-item" key={category.id} onMouseOver={()=>setHoveredCategory(category.id)}>
          {category.name}
        </li>
      ))}
    </ul>
      {isHovered && 
        <div className="subcategories-container">
          {categoriesArr[hoveredCategory].subCategories.map((item)=>
            <Subcategory key={item.id} id={item.id} icon={item.icon} name={item.name}/> )
          }
        </div> }
    </>
  )
};
