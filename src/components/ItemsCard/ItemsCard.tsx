import React, { useState } from 'react';
import { SvgHeart } from '../Svg/SvgFuncs/shared/SvgHeart';
import './ItemsCard.scss';

export type ItemsCardProps = {
  title: string,
  description: string,
  price: number,
  brand: string,
  thumbnail: string,
}

  //isByRow: boolean, //TODO => state manager
  const isByRow = true;

export const ItemsCard = (props: ItemsCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="items-card-wrapper">
      {isMouseOver && <SvgHeart />}
      <div className={`${isByRow ? "items-card row-card" : "items-card grid-card"}`}>
        <img className="thumbnail" alt={props.title} src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"/>
        <div className="items-description">
          <a>{props.title}</a>
          <div className="tags-container">
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
            <a>{props.brand}</a>
          </div>
          <div className="description">
            <label>Опиание:</label>
            {props.description}</div>
        </div>
        <div className="items-price">{props.price} $</div>
      </div>
    </div>
  );
};
