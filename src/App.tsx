import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ItemPage } from './pages/ItemPage/ItemPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="item:id" element={<ItemPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
