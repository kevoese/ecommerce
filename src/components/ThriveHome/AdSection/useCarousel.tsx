'use client';

import React, { useEffect } from 'react';

interface Props {
  length: number;
}

const useCarousel = ({ length }: Props) => {
  const entireWidth = 100 * length;
  const width = 100 / length;
  const [pos, setPos] = React.useState(0);
  const [current, setCurrent] = React.useState(1);
  const [isFowrard, setIsForward] = React.useState(true);

  // set a timer every 3s to move to the next slide

  useEffect(() => {
    const timer = setInterval(() => {
      // slide to the last and slide backwards
      if (current === length) {
        setIsForward(false);
        setCurrent(current - 1);
        return;
      }
      if (current === 1) {
        setIsForward(true);
        setCurrent(current + 1);
        return;
      }
      if (isFowrard) {
        setCurrent(current + 1);
      } else {
        setCurrent(current - 1);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [current, isFowrard, length]);

  useEffect(() => {
    if (current) {
      setPos((current - 1) * width);
    }
  }, [current, width]);

  const handleNext = () => {
    if (current < length) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const handleQuickSet = (index: number) => {
    if (index > length || index < 1) return;
    setCurrent(index);
  };

  return {
    entireWidth,
    width,
    pos,
    current,
    handleNext,
    handlePrev,
    shouldShowNext: current < length - 1,
    shouldShowPrev: current > 1,
    length,
    handleQuickSet,
  };
};

export default useCarousel;
