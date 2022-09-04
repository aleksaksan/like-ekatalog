import React from 'react';
import { SvgLocation } from '../Svg/SvgFuncs/SvgComponents/SvgLocation';
import { SvgLogin } from '../Svg/SvgFuncs/SvgComponents/SvgLogin';
import { SvgLogo } from '../Svg/SvgFuncs/SvgComponents/SvgLogo';
import { CategoriesContainer } from './CategoriesContainer/CategoriesContainer';
import './Header.scss';
import { SearchInput } from './SearchInput/SearchInput';

export const Header = () => {
  return (
    <>
      <div className="theme-switcher-container m-width">
        <label>тёмная версия</label>
      </div>
      <header>
        <div className="m-width">
          <SvgLogo />
          <SearchInput />

          <div className="headers-actions-container">
            <div className="header-location">
              <SvgLocation />
              Place
            </div>
            <div className="header-login-container">
              <SvgLogin />
              Войти
            </div>
          </div>
        </div>
      </header>

      <CategoriesContainer />
    </>
  )
};
