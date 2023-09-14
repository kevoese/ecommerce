'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  data: any;
  selected: string;
  onSelect: any;
}

const getSelectedStyle = (selected: string, name: string) => {
  if (selected?.toLowerCase?.() === name?.toLowerCase()) {
    return 'border border-thrive-blue bg-thrive-blue-light-100';
  }
  return '';
};

const ShopByCategoryWeb = ({
  className, data, selected, onSelect,
}: Props) => (
  <div className={`${className || ''} hidden sm:flex flex-row gap-6 overflow-x-scroll flex-nowrap w-full mb-6`}>
    {
      data?.map((item: any) => (
        <div
          onClick={() => onSelect(item.name?.toLowerCase?.())}
          key={item.id}
          className={`cursor-pointer flex flex-col justify-center h-43 w-43 py-8 px-1 items-center rounded-lg border border-grey-lightest-100 ${getSelectedStyle(selected, item.name)}`}
        >
          <Image width={48} height={48} src={item.icon} alt={item.name} />
          <span className='leading-6 font-semibold mt-5 text-center text-black'>{item.name}</span>
        </div>
      ))
    }
  </div>
);

export default ShopByCategoryWeb;
