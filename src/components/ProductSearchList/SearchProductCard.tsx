'use client';

import { IProduct } from '@/store/product/types';
import React from 'react';
import { formatCashInNaira } from '@/utils/helpers';
import { useRouter } from 'next/router';
import DivImage from '../ProductViewModal/DivImage';

interface Props {
  product: IProduct
  setOpen?: any;
}

const SearchProductCard = ({ product, setOpen }: Props) => {
  const routet = useRouter();
  return (
    <div className='flex mt-4 gap-4 cursor-pointer'
      onClick={() => {
        routet.push(`/products/${product?.slug}`);
        setOpen?.(false);
      }}
    >
      <DivImage
        src={product?.images?.[0] || ''}
        className='h-[124px] w-[124px] rounded-lg bg-grey-lightest-100 bg-cover'
      />
      <div className="flex-grow flex flex-col items-start justify-start">
        <span className="leading-6 text-sm text-thrive-dark">{product?.name}</span>
        <strong className="leading-7 text-lg font-semibold text-thrive-dark mt-1 mb-5">
          {formatCashInNaira(product?.amount)}
        </strong>
        <div className="text-xs text-thrive-blue"><small className=" text-grey-lightest-300">by</small>{` ${product?.merchant}`}</div>
      </div>
    </div>
  );
};

export default SearchProductCard;
