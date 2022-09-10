import React from 'react';
import './HomePage.scss';
import { CategoriesGrid1 } from '../../components/CategoriesGrids/CategoriesGrid1';
import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';
import { CategoriesGrid4 } from '../../components/CategoriesGrids/CategoriesGrid4';
import { CategoriesGrid3 } from '../../components/CategoriesGrids/CategoriesGrid3';
import { CategoriesGrid2 } from '../../components/CategoriesGrids/CategoriesGrid2';

export const HomePage = () => {
  return (
    <div className="m-width">
      <h1>Home</h1>
      <FlexibleSlider
        isHaveDots={true}
      >
        <CategoriesGrid1 />
        <CategoriesGrid2 />
        <CategoriesGrid3 />
        <CategoriesGrid4 />
      </FlexibleSlider>
    </div>
  );
};
