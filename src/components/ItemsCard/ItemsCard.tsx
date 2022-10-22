import React, { useState } from 'react';
import { SvgHeart } from '../Svg/SvgFuncs/shared/SvgHeart';
import './ItemsCard.scss';

export type ItemsCardProps = {
  isByRow: boolean,
  title: string,
  description: string,
  price: number,
  brand: string,
  thumbnail: string,
}

export const ItemsCard = (props: ItemsCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="items-card-wrapper"
      onMouseOver={()=>setIsMouseOver(true)}
      onMouseLeave={()=>setIsMouseOver(false)}
    >
      {isActive ?
      <div className={`like-wrapper active`}
        onMouseOver={()=>setIsMouseOver(true)}
        onMouseLeave={()=>setIsMouseOver(false)}
        onClick={()=>{setIsActive(!isActive)}}
        >
        <SvgHeart isActive={isActive} />
      </div>
      : isMouseOver &&
      <div className={`like-wrapper`}
        onMouseOver={()=>setIsMouseOver(true)}
        onMouseLeave={()=>setIsMouseOver(false)}
        onClick={()=>{setIsActive(!isActive)}}
        >
        <SvgHeart />
      </div>
      }
      {props.isByRow ? 
        <div className={`items-card row-card`}>
          <img className="thumbnail" alt={props.title} src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"/>
          <div className="items-description">
            <a href=''>{props.title}</a>
            <div className="tags-container">
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
            </div>
            <div className="description">
              <label>Опиание:</label>
              {props.description}</div>
          </div>
          <div className="items-price">{props.price} $</div>
      </div>
      :
        <div className={`items-card grid-card`}>
          <a href=''>{props.title}</a>
          <div className="items-price">{props.price} $</div>
          <img className="thumbnail" alt={props.title} src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"/>
          <div className="items-description">
            <div className="tags-container">
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
              <a href=''>{props.brand}</a>
            </div>
            <div className="description">
              {props.description}</div>
          </div>
      </div>
      }
    </div>
  );
};
