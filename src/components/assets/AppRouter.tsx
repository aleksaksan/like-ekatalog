import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { ItemPage } from '../../pages/ItemPage/ItemPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="item:id" element={<ItemPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
