import React, { useState } from 'react';
import { DropdownMenu, DropdownOption } from '../../components/DropdownMenu/DropdownMenu';
import { ItemsCard } from '../../components/ItemsCard/ItemsCard';
import { useSortedItems } from '../../hooks/useSortedItems';
import './CatalogPage.scss';
import { itemsMock } from './itemsMock';
import { TogleButton } from './TogleButton/TogleButton';

const dropdownOptions: DropdownOption[] = [
  { id: 0, name: 'от дешёвых к дорогим'},
  { id: 1, name: 'от дорогих к дешёвым'},
]
//TODO items count from store
const itemsCount = 889;
const itemsName = "Catalog";


export const CatalogPage = () => {
  const [isByRows, setIsByRows] = useState(true);
  const [sortOption, setSortOption] = useState(dropdownOptions[0]);

  const sortedItems = useSortedItems(itemsMock, sortOption.id)

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
          <DropdownMenu options={dropdownOptions} callback={setSortOption}/>
          <hr />
          <TogleButton callback={()=>{setIsByRows(!isByRows)}}/>
        </div>

        <div className={`catalogs-container${isByRows ? "" : " flex-view"}`}>
          {sortedItems.map (item => 
            <ItemsCard 
              key={item.id} 
              isByRow={isByRows}
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
