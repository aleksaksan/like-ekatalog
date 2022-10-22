import { useState } from 'react';
import { SvgByRows } from '../../../components/Svg/SvgFuncs/shared/SvgByRows';
import { SvgByTable } from '../../../components/Svg/SvgFuncs/shared/SvgByTable';

export type TogleButtonProps = {
  callback: ()=>void;
}

export const TogleButton = (props: TogleButtonProps) => {
const [isActive, setIsActive] = useState(true);

const toggle = () => {
  setIsActive(!isActive);
  props.callback();
}

  return (
    <div className="btn-togle">
      <button className={`btn-togle-to-row-table${isActive ? " active" :""}`} onClick={toggle}>
        <SvgByRows />
      </button>
      <button className={`btn-togle-to-row-table${isActive ? "" :" active"}`} onClick={toggle}>
        <SvgByTable />
      </button>
    </div>
  );
};
