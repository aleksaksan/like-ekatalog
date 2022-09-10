import React from 'react';
import './HomePage.scss';
import { CategoriesGrid1 } from '../../components/CategoriesGrids/CategoriesGrid1';
import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';
import { CategoriesGrid4 } from '../../components/CategoriesGrids/CategoriesGrid4';
import { CategoriesGrid3 } from '../../components/CategoriesGrids/CategoriesGrid3';
import { CategoriesGrid2 } from '../../components/CategoriesGrids/CategoriesGrid2';
import { SvgRightArrow } from '../../components/Svg/SvgFuncs/SvgComponents/SvgRightArrow';
import { CentredItemsCard } from '../../components/CentredItemsCard/CentredItemsCard';

export const HomePage = () => {
  return (
    <div className="m-width">
      <h1>Home</h1>
      <FlexibleSlider
        isHaveDots={true}
        customArrowButtonRight={<SvgRightArrow />}
        isLooped={true}
        customDotsButtton={<div className="custom-dot"></div>}
      >
        <CategoriesGrid1 />
        <CategoriesGrid2 />
        <CategoriesGrid3 />
        <CategoriesGrid4 />
      </FlexibleSlider>
      <h2>Популярное</h2>
      <CentredItemsCard imageSrc='https://dummyjson.com/image/i/products/2/thumbnail.jpg' name='iphone' price='1000$' />
    </div>
  );
};
