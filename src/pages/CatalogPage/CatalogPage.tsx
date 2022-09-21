import React from 'react';
import { DropdownMenu, DropdownOption } from '../../components/DropdownMenu/DropdownMenu';
import './CatalogPage.scss';

const dropdownOptions: DropdownOption[] = [
  { id: 0, name: 'от дешёвых к дорогим'},
  { id: 1, name: 'от дорогих к дешёвым'},
]

export const CatalogPage = () => {
  return (
    <div>
      <hr/>
      <div className="m-width">
        <div className="page-title">
          <h1>Catalog</h1>
        </div>
        <DropdownMenu options={dropdownOptions} />
      </div>
    </div>
  )
}
