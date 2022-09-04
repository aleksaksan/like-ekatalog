import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemPage } from '../../pages/ItemPage/ItemPage';
import { HomePage } from '../../pages/MainPage/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="item" element={<ItemPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
