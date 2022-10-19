import React, { useState } from 'react';
import { DropdownMenu, DropdownOption } from '../../components/DropdownMenu/DropdownMenu';
import { ItemsCard } from '../../components/ItemsCard/ItemsCard';
import { SvgByRows } from '../../components/Svg/SvgFuncs/shared/SvgByRows';
import { SvgByTable } from '../../components/Svg/SvgFuncs/shared/SvgByTable';
import './CatalogPage.scss';
import { itemsMock } from './itemsMock';

const dropdownOptions: DropdownOption[] = [
  { id: 0, name: 'от дешёвых к дорогим'},
  { id: 1, name: 'от дорогих к дешёвым'},
]
//TODO items count from store
const itemsCount = 889;
const itemsName = "Catalog";


export const CatalogPage = () => {
  const [isByRows, setIsByRows] = useState(true);

  return (
    <div>
      <hr/>
      <div className="m-width">
        <div className="page-title">
          <h1>{itemsName}</h1>
          <span>
            цены на {itemsCount} моделей
          </span>
        </div>

        <div className="filters-row">
          <div>Выводить</div>
          <DropdownMenu options={dropdownOptions} />
          <hr />
          <button className="btn-togle-to-row-table">
            <SvgByRows />
          </button>
          <button className="btn-togle-to-row-table">
            <SvgByTable />
          </button>
        </div>

        <div className={`catalogs-container${isByRows ? "" : " flex-view"}`}>
          {itemsMock.map (item => 
            <ItemsCard 
              key={item.id} 
              title={item.title}
              brand={item.brand}
              description={item.description}
              thumbnail={item.description}
              price={item.price}
            />
          )}
        </div>
      </div>
    </div>
  )
}
