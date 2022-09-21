import React, { useEffect } from 'react';
import './HomePage.scss';
import { CategoriesGrid1 } from '../../components/CategoriesGrids/CategoriesGrid1';
import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';
import { CategoriesGrid4 } from '../../components/CategoriesGrids/CategoriesGrid4';
import { CategoriesGrid3 } from '../../components/CategoriesGrids/CategoriesGrid3';
import { CategoriesGrid2 } from '../../components/CategoriesGrids/CategoriesGrid2';
import { SvgRightArrow } from '../../components/Svg/SvgFuncs/SvgComponents/SvgRightArrow';
import { CentredItemsCard } from '../../components/CentredItemsCard/CentredItemsCard';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategories } from '../../store/reducers/ActionCreator';

export const HomePage = () => {
const {isLoading, categories, error} = useAppSelector(state => state.categoryReducer);
const dispatch = useAppDispatch();

useEffect(()=> {
  // getData();
  dispatch(fetchCategories());
}, []);


// const getData = async () => {
//   try {
//     const response = await axios(
//     {
//       method: 'get',
//       baseURL: 'https://dummyjson.com/',
//       url: 'products/1',
//       responseType: 'json'
//     });
//     console.log(response.data);
//   } catch (err) {
//     console.error(err);
//   }
  
// };

  return (
    <>
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
        <div>{categories.map(item=>item.name)}</div>
        <h1>{error}</h1>
        {isLoading && <h1>LOADING...</h1>}
      </div>
      <hr className="margin-tb"/>
    </>
    
  );
};
