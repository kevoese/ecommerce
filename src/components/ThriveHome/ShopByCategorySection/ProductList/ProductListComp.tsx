/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard';
import 'react-multi-carousel/lib/styles.css';
import Carousel from '@/components/Carousel';
import Prev from '@/components/icons/Prev';
import Next from '@/components/icons/Next';

interface Props {
  data: any;
  customDimesions?: any;
}
const ButtonGroup = ({
  next, previous, buttonStatus,
}: any) => (
  <div className="carousel-button-group cntrl absolute flex top-0 right-0 z-50">
    <div onClick={previous} className={`prev mr-2 cursor-pointer ${buttonStatus?.prev ? '' : 'cursor-not-allowed opacity-30'}`}>
      <Prev />
    </div>
    <div onClick={next} className={`next cursor-pointer ${buttonStatus?.next ? '' : 'cursor-not-allowed opacity-30'}`}>
      <Next />
    </div>
  </div>
);
const ProductListComp = ({ data, customDimesions = {} }: Props) => (
  <div>
    <Carousel
      NavButtons={ButtonGroup}
      childClassName='w-screen sm:w-full sm:w-auto'
    >
      {
        data.map((product: any, index: number) => (
          <ProductCard
            key={index}
            {...product}
            className=''
            {...customDimesions}
          />
        ))
      }
    </Carousel>
  </div>
);

export default ProductListComp;
