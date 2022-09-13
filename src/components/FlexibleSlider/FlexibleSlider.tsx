import React, { useEffect, useRef, useState } from 'react';
import { exampleSlides } from './exampleSlides';
import './FlexibleSlider.css';

export type FlexSliderProps = {
  children?: JSX.Element[];
  isByContent?: boolean;
  isLooped?: boolean;
  customArrowButtonRight?: JSX.Element;
  isHaveArrows?: boolean;
  isArrowButtonsOnHover?: boolean;
  customDotsButtton?: JSX.Element;
  isHaveDots?: boolean;
  isDotsButtonsOnHover?: boolean;
};

export const FlexibleSlider = (props: FlexSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [windowsWidth, setWindowsWidth] = useState<number>(0);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [stepWidth, setStepWidth] = useState<number>(0);
  const [dotsCount, setDotsCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [maxOffset, setMaxOffset] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [slides] = useState<JSX.Element[]>(props.children?.length?[...props.children]:[...exampleSlides]);
  const [isLADisabled, setIsLADisabled] = useState(true);
  const [isRADisabled, setIsRADisabled] = useState(false);
  const [isBtnsNotVisible, setIsBtnsNotVisible] = useState(props.isArrowButtonsOnHover? true : false);
  const [isDotsBtnsNotVisible, setIsDotsBtnsNotVisible] = useState(props.isDotsButtonsOnHover? true : false);

  useEffect(() => {
    let countItemsInSingleSlide = 1;
    if (ref.current) {
      setContentWidth(ref.current.children[0].children[0].clientWidth);
      if (props.isByContent) {
        setWindowsWidth(ref.current.children[0].clientWidth);
      }
      else {
        setWindowsWidth(ref.current.clientWidth);
        countItemsInSingleSlide = Math.trunc(windowsWidth/contentWidth);
      }
    };
    // setStepWidth(countItemsInSingleSlide*contentWidth);
    setStepWidth(100);
    setMaxOffset(contentWidth*slides.length-windowsWidth);
    setDotsCount(Math.ceil(slides.length/countItemsInSingleSlide));
    console.log("stepWidth", stepWidth);
    console.log("contentWidth", contentWidth);
    console.log("countItemsInSingleSlide", countItemsInSingleSlide);

  },[slides, contentWidth, windowsWidth, slides.length, stepWidth, dotsCount, props.isByContent]);

  useEffect(() => {
    if (props.isLooped) {
      setIsLADisabled(false);
      return;
    } else {
      if (activeIdx === 0) {
        setIsLADisabled(true);
      } else {
        setIsLADisabled(false);
      };
      if (activeIdx === dotsCount-1) {
        setIsRADisabled(true);
      } else {
        setIsRADisabled(false);
      };
    };
  },[activeIdx, dotsCount, props.isLooped]);

  const onClickLeft = () => {
    if (offset + stepWidth <= 0) {
      setOffset(offset + stepWidth);
      setActiveIdx(activeIdx-1);
    } else if (props.isLooped) {
      setOffset(-maxOffset);
      setActiveIdx(slides.length-1);
    } else {
      setOffset(0);
      setActiveIdx(0);
    };
  };

  const onClickRight = () => {
    if (offset - stepWidth >= -maxOffset) {
      setOffset(offset - stepWidth);  
      setActiveIdx(activeIdx+1);
    } else if (props.isLooped) {
      setOffset(0);
      setActiveIdx(0);
    } else {
      setOffset(-maxOffset);
      setActiveIdx(dotsCount-1);
    };
  };

  const onDotClick = (index: number) => {
    setActiveIdx(index);
    if (Math.abs(index*stepWidth) < maxOffset) {
      setOffset(-index*stepWidth); 
    } else {
      setOffset(-maxOffset);
    };
  };

  const switchOnOnHover = () => {
    if (props.isArrowButtonsOnHover)
      setIsBtnsNotVisible(true);
    if (props.isDotsButtonsOnHover) 
      setIsDotsBtnsNotVisible(true);
  };

  const switchOffOnHover = () => {
    if (props.isArrowButtonsOnHover)
      setIsBtnsNotVisible(false);
    if (props.isDotsButtonsOnHover) 
      setIsDotsBtnsNotVisible(false);
  };

  return (
    <div className="flexible-slider-container">
      <div className="flexible-slider"
        onMouseEnter={switchOffOnHover}
        onMouseLeave={switchOnOnHover}
      >
        <span
          className={props.customArrowButtonRight ?
          `fxs-btn fxs-arrow left-fxs-arrow custom${isLADisabled ? " disabled" :""}${isBtnsNotVisible? " btn-hidden" : ""}` :
          `fxs-btn fxs-arrow left-fxs-arrow default${isLADisabled ? " disabled":""}${isBtnsNotVisible? " btn-hidden" : ""}`}
          onClick={onClickLeft}
        >
          {props.customArrowButtonRight}
        </span>
        
        <div className="sliders-window"
          style={props.isByContent?{width: `${windowsWidth}px`}:{}}
        >
          <div ref={ref} className="slides-container" style={{transform: `translateX(${offset}%)`}}>
            {slides.map((slide, index) => (
              <div className="slide-item" key={index}>{slide}</div>))
            }
          </div>
        </div>
        
        <span
          className={props.customArrowButtonRight ?
          `fxs-btn fxs-arrow right-fxs-arrow custom${isRADisabled ? " disabled" :""}${isBtnsNotVisible? " btn-hidden" : ""}`
          : `fxs-btn fxs-arrow right-fxs-arrow default${isRADisabled ? " disabled" :""}${isBtnsNotVisible? " btn-hidden" : ""}`}
          onClick={onClickRight}
        >
          {props.customArrowButtonRight}
        </span>
        
      </div>
      
      {props.isHaveDots && props.customDotsButtton ?
        <div className="dots-container">
          {slides.filter((slide, index)=>{return index < dotsCount}).map((slide, index)=>(
              <span
                className={`${index === activeIdx ? "fxs-btn active" : "fxs-btn"}${isDotsBtnsNotVisible? " btn-hidden" : ""}`}
                key={index}
                onClick={()=>onDotClick(index)}
              >
                {props.customDotsButtton}
              </span>
          ))}
        </div>
        : props.isHaveDots &&
        <div className="dots-container">
          {slides.filter((slide, index)=>{return index < dotsCount}).map((slide, index)=>(
            <span
              className={`${index === activeIdx ? "fxs-btn dot active" : "fxs-btn dot"}${isDotsBtnsNotVisible? " btn-hidden" : ""}`}
              key={index}
              onClick={()=>onDotClick(index)}
            >
            </span>
          ))}
        </div>
      }
      </div>
  );
};
