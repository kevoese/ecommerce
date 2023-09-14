'use client';

import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import Prev from '../icons/Prev';
import Next from '../icons/Next';

interface Props {
  children: any
  autoPlay?: boolean;
  className?: string;
  gap?: number;
  NavButtons?: any;
  childClassName?: string;
}

const Carousel = ({
  children,
  gap = 16,
  NavButtons,
  className,
  childClassName,
}: Props) => {
  const [dragStarted, setDragStarted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [slideDetails, setSlideDetails] = useState({
    prevPageX: 0,
    prevScrollLeft: 0,
  });
  const sliderRef = useRef<any>();
  const [buttonStatus, setButtonStatus] = useState({
    next: false,
    prev: false,
  });

  const getChildWidth = () => {
    const child = sliderRef.current?.children[0];
    if (!child) return 0;
    const { width } = child.getBoundingClientRect();
    return width;
  };

  const shouldShowNext = useCallback((customScrollLeft: number | undefined = undefined) => {
    if (!sliderRef?.current) return false;
    const { scrollLeft: scrollLeftNew, scrollWidth, clientWidth } = sliderRef.current;
    const scrollLeft = !Number.isNaN(Number(customScrollLeft)) ? customScrollLeft : scrollLeftNew;
    return scrollLeft + clientWidth < scrollWidth;
  }, []);

  const shouldShowPrev = useCallback((customScrollLeft: number | undefined = undefined) => {
    if (!sliderRef?.current) return false;
    const { scrollLeft: scrollLeftNew } = sliderRef.current;
    const scrollLeft = !Number.isNaN(Number(customScrollLeft)) ? customScrollLeft : scrollLeftNew;
    return scrollLeft > 0;
  }, []);

  const buttonHandler = useCallback((scrollLeft: number | undefined = undefined) => {
    const newNext = shouldShowNext(scrollLeft);
    const newPrev = shouldShowPrev(scrollLeft);
    if (newNext !== buttonStatus.next || newPrev !== buttonStatus.prev) {
      setButtonStatus({
        next: newNext,
        prev: newPrev,
      });
    }
  }, [buttonStatus.next, buttonStatus.prev, shouldShowNext, shouldShowPrev]);

  const handleNext = useCallback(() => {
    const childWidth = getChildWidth();
    if (!shouldShowNext()) return;
    const expectedPos = sliderRef.current.scrollLeft + childWidth;
    const maxScrollWidth = sliderRef.current.scrollWidth;
    const newScrollLeft = expectedPos > maxScrollWidth ? maxScrollWidth : expectedPos;
    sliderRef.current.scrollLeft = newScrollLeft;
    buttonHandler(newScrollLeft);
  }, [shouldShowNext, buttonHandler]);

  const handlePrev = useCallback(() => {
    if (!shouldShowPrev()) return;
    buttonHandler();
    const childWidth = getChildWidth();
    const newScrollLeft = sliderRef.current.scrollLeft - childWidth;
    sliderRef.current.scrollLeft = newScrollLeft;
    buttonHandler(newScrollLeft);
  }, [shouldShowPrev, buttonHandler]);

  const startDrag = (e: any) => {
    buttonHandler();
    setDragging(true);
    setDragStarted(true);
    setSlideDetails({
      prevPageX: e.pageX || e?.touches?.[0]?.pageX || 0,
      prevScrollLeft: sliderRef.current.scrollLeft,
    });
    // set if show next is true or false
  };

  const handleDrag = (e: any) => {
    if (!dragStarted) return;
    buttonHandler();
    if (e.cancelable) e.preventDefault();
    const { prevPageX, prevScrollLeft } = slideDetails;
    const touchedPageX = e?.touches?.[0]?.pageX || 0;
    const diff = (e?.pageX || touchedPageX) - prevPageX;
    const scrollLeft = prevScrollLeft - diff;
    sliderRef.current.scrollLeft = scrollLeft;
  };

  const stopDrag = () => {
    setDragStarted(false);
    setDragging(false);
    buttonHandler();
  };

  useEffect(() => {
    buttonHandler();
  }, [buttonHandler, children?.length]);

  return (
    <div className="">
      {NavButtons && (<NavButtons
        next={handleNext}
        previous={handlePrev}
        buttonStatus={buttonStatus}
      />)}
      <div
        id="slider"
        className={`w-full mx-auto overflow-hidden flex flex-row ${dragging ? 'cursor-grap' : 'scroll-smooth'} ${className || ''}`}
        // onMouseUp={stopDrag}
        // onMouseMove={handleDrag}
        // onMouseDown={startDrag}
        // onTouchStart={startDrag}
        // onTouchMove={handleDrag}
        // onTouchEnd={stopDrag}
        ref={sliderRef}
        // when mouse is out of the slider, the drag should stop
        // onMouseLeave={stopDrag}
      >
        {children?.map((child: any, index: number) => (
          <div key={index} className={` ${childClassName || ''}`}
            style={{
              paddingRight: index < children.length - 1 ? `${gap}px` : '0',
            }}
          >
            {child}
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Carousel;
