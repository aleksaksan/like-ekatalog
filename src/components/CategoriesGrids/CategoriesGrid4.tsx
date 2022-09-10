import React from 'react';
import { Link } from 'react-router-dom';

export const CategoriesGrid4 = () => {
  return (
    <div className="categories-grid">
      <Link className="categories-grid-item big-size align-center grid-item-25"
        to={""}
      >
        Продукты
      </Link>
      <Link className="categories-grid-item mid-size grid-item-26"
        to={""}
      >
        Уют
      </Link>
      <Link className="categories-grid-item align-center grid-item-27"
        to={""}
      >
        Мебель
      </Link>
      <Link className="categories-grid-item align-center grid-item-28"
        to={""}
      >
        Освещение
      </Link>
      <Link className="categories-grid-item align-center grid-item-29"
        to={""}
      >
        Очки
      </Link>
      <Link className="categories-grid-item align-center grid-item-30"
        to={""}
      >
        Украшения
      </Link>
      <Link className="categories-grid-item align-center grid-item-31"
        to={""}
      >
        Сумочки
      </Link>
      <Link className="categories-grid-item align-center grid-item-32"
        to={""}
      >
        Авто
      </Link>
    </div>
  )
};
