import React, { useState } from 'react'
import { categoriesArr } from './CategoriesArr';
import "./CategoriesContainer.scss";
import { Subcategory } from './Subcategory/Subcategory';

export const CategoriesContainer = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredCategory, setHoveredCategory] = useState<number>(14);

  return (
    <div onMouseLeave={()=>
      {setIsHovered(false); 
      setHoveredCategory(14);
    }}>
      <ul className="categories-container m-width" onMouseOver={()=>setIsHovered(true)}>
        {categoriesArr.map((category)=>(
          <li
            className={`${category.subCategories.length? "" : "empty "}category-item ${hoveredCategory === category.id ? " hovered" : ""}`}
            key={category.id}
            onMouseOver={()=>setHoveredCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
      <div className={`subcategories-wrapper${!isHovered? " hidden": ""}`}>
        <div className="subcategories-container m-width">
          {categoriesArr[hoveredCategory].subCategories.map((item)=>
            <Subcategory key={item.id} id={item.id} icon={item.icon} name={item.name}/> )
          }
        </div> 
      </div> 
    </div>
  )
};
