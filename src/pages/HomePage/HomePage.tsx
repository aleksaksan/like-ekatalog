import React from 'react';
import './HomePage.scss';
import { CategoriesGrid } from '../../components/CategoriesGrid/CategoriesGrid';
import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';

export const HomePage = () => {
  return (
    <div className="m-width">
      <h1>Home</h1>
      <FlexibleSlider
        isHaveDots={true}
      >
        <CategoriesGrid />
        <CategoriesGrid />
        <CategoriesGrid />
        <CategoriesGrid />
      </FlexibleSlider>
    </div>
  );
};
