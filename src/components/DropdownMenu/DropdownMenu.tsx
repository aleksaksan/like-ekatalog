import React, { useState, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import './DropdownMenu.scss';

export type DropdownOption = {
  id: number;
  name: string;
}

type DropdownMenuProps = {
  options: DropdownOption[];
  callback?: (item: DropdownOption) => void;
};




export const DropdownMenu = (props: DropdownMenuProps) => {
  const [selectedItem, setSelectedItem] = useState(props.options[0]);
  const [isHidden, setIsHidden] = useState(true);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsHidden(true));

  const onItemClick = (elem: DropdownOption) => {
    setSelectedItem(elem);
    props.callback?.(elem);
  };

  return (
    <div className="dropdown-wrapper"
      ref={ref}
      onClick={()=>setIsHidden(!isHidden)}
    >
      <div className="dropdown-selected-item">
        {selectedItem.name}
        <div className={`dropdown-icon${!isHidden ? " turned" : ""}`}></div>
      </div>
      <ul className={`dropdown-options-container${isHidden?" zero-height":""}`} >
      {props.options.map(item=>(
        <li className="dropdown-option"
          key={item.id}
          onClick={()=>onItemClick(item)}
        >
          {item.name}
        </li>
      ))}
      </ul>
      
    </div>
  );
};
