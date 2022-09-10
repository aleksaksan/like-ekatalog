import React from 'react';
import { Link } from 'react-router-dom';

export const CategoriesGrid2 = () => {
  return (
    <div className="categories-grid">
      <Link className="categories-grid-item big-size align-center grid-item-9"
        to={""}
      >
        Топы
      </Link>
      <Link className="categories-grid-item mid-size grid-item-10"
        to={""}
      >
        Женская одежда
      </Link>
      <Link className="categories-grid-item align-center grid-item-11"
        to={""}
      >
        Женская обувь
      </Link>
      <Link className="categories-grid-item align-center grid-item-12"
        to={""}
      >
        Мужские футболки
      </Link>
      <Link className="categories-grid-item align-center grid-item-13"
        to={""}
      >
        Мужская обувь
      </Link>
      <Link className="categories-grid-item align-center grid-item-14"
        to={""}
      >
        Авто аксессуары
      </Link>
      <Link className="categories-grid-item align-center grid-item-15"
        to={""}
      >
        Мотоциклы
      </Link>
      <Link className="categories-grid-item align-center grid-item-16"
        to={""}
      >
        Мужские часы
      </Link>
    </div>
  )
};
