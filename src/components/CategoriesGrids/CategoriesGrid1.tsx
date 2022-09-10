import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesGrid.scss';

export const CategoriesGrid1 = () => {
  return (
    <div className="categories-grid">
      <Link className="categories-grid-item big-size align-center grid-item-1"
        to={"catalog"}
      >
        Смартфоны
      </Link>
      <Link className="categories-grid-item mid-size grid-item-2"
        to={"catalog"}
      >
        Ноутбуки
      </Link>
      <Link className="categories-grid-item align-center grid-item-3"
        to={"catalog"}
      >
        Парфюм
      </Link>
      <Link className="categories-grid-item align-cente grid-item-4"
        to={"catalog"}
      >
        Забота о коже
      </Link>
      <Link className="categories-grid-item align-center grid-item-5"
        to={"catalog"}
      >
        Продукты
      </Link>
      <Link className="categories-grid-item align-center grid-item-6"
        to={"catalog"}
      >
        Уют
      </Link>
      <Link className="categories-grid-item align-center grid-item-7"
        to={"catalog"}
      >
        Мебель
      </Link>
      <Link className="categories-grid-item align-center grid-item-8"
        to={"catalog"}
      >
        Освещение
      </Link>
    </div>
  )
};
