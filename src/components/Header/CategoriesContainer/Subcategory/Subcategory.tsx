import React from 'react';
import { Link } from 'react-router-dom';
import './Subcategory.scss';

export type SubcategoryProps = {
  id: number,
  icon: JSX.Element,
  name: string,
}

export const Subcategory = (props: SubcategoryProps) => {
  return (
    <Link 
      className="sub-categ-link"
      to={'catalog'}
      key={props.id}
      >
      <div className="subcategory-item">
        {props.icon}
        {props.name}
      </div>
    </Link> 
  )
}
