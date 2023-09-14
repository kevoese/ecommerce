'use client';

import React from 'react';
import Button from '../../Button';
import useCarousel from './useCarousel';
import Prev from '../../icons/Prev';
import Next from '../../icons/Next';

interface Props {
  payload: any
}

const Deals = ({ payload }: Props) => {
  const {
    entireWidth,
    width,
    pos,
    current,
    handleNext,
    handlePrev,
    shouldShowNext,
    shouldShowPrev,
    length,
    handleQuickSet,
  } = useCarousel({ length: payload?.length });

  return (
    <div className='w-full h-[367px] flex mb-6 pl-6 pr-6 sm:pl-0 lg:pr-[80px]'>
      <div className='rounded-lg bg-grey-lightest-100 overflow-x-hidden flex relative'>
        <div className="cntrl absolute flex top-5 right-5 z-10">
          <div onClick={handlePrev} className={`prev mr-2 cursor-pointer ${!shouldShowPrev ? 'opacity-30 cursor-not-allowed' : ''}`}>
            <Prev />
          </div>
          <div onClick={handleNext} className={`next cursor-pointer ${!shouldShowNext ? 'opacity-30 cursor-not-allowed' : ''}`}>
            <Next />
          </div>
        </div>
        <div
          className="flex-start flex relative"
          style={{
            minWidth: `${entireWidth}%`,
            transform: `translateX(-${pos}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          {payload?.map(({
            title, campaign, promotion, image,
          }: any, index: any) => (
            <div
              key={index}
              className="p-6 xsm:p-10 sm:p-12 flex flex-col justify-end bg-grey-ash"
              style={{
                width: `${width}%`,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
              }}
            >
              <div className="fit-content flex flex-col justify-end items-start">
                <span className='text-white font-medium leading-6 mb-2 md:mb-4 mix-blend-luminosity'>{title}</span>
                <span className='text-white font-medium leading-6 2md:leading-10 mb-2 2md:mb-4 text-xl xsm:text-2xl 2md:text-4xl mix-blend-luminosity'>{campaign}</span>
                <span className='text-white font-medium leading-6 2md:leading-10 mb-4 2md:mb-8 text-xl xsm:text-2xl 2md:text-4xl mix-blend-luminosity'>{promotion}</span>
                <Button name='Buy Now' className='h-10 w-28 rounded-lg' />
              </div>

            </div>
          ))}
        </div>
        <div className="absolute flex bottom-5 right-5 z-10 gap-2">
          {
            Array(length).fill(0).map((_, index) => (
              <div
                key={index}
                onClick={() => handleQuickSet(index + 1)}
                className={`w-1 h-1 cursor-pointer rounded-3xl bg-white ${current === (index + 1) ? 'w-6' : ''}`}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Deals;
