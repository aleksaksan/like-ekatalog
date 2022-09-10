import React from 'react';
import { Link } from 'react-router-dom';

export const CategoriesGrid3 = () => {
  return (
    <div className="categories-grid">
      <Link className="categories-grid-item big-size align-center grid-item-17"
        to={""}
      >
        Женские часы
      </Link>
      <Link className="categories-grid-item mid-size grid-item-18"
        to={""}
      >
        Женские сумочки
      </Link>
      <Link className="categories-grid-item align-center grid-item-19"
        to={""}
      >
        Украшения
      </Link>
      <Link className="categories-grid-item align-center grid-item-20"
        to={""}
      >
        Очки
      </Link>
      <Link className="categories-grid-item align-center grid-item-21"
        to={""}
      >
        Смартфоны
      </Link>
      <Link className="categories-grid-item align-cente grid-item-22"
        to={""}
      >
        Ноутбуки
      </Link>
      <Link className="categories-grid-item align-center grid-item-23"
        to={""}
      >
        Парфюм
      </Link>
      <Link className="categories-grid-item align-center grid-item-24"
        to={""}
      >
        Забота о коже
      </Link>
    </div>
  )
};
