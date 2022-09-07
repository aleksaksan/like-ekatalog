import React from 'react'
import './SearchInput.scss';

export const SearchInput = () => {
  return (
    <form className="input-container">
      <input type={"text"}/>
      <button>
        Найти
      </button>
    </form>
  )
};
