'use client';

import React, { useCallback, useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import DropdownIcon from '../../icons/DropdownIcon';
import MobileDropdown from './MobileDropdown';

const CategoryDropdown = () => {
  const [open, setOpen] = React.useState(false);
  const categories = useAppSelector((state) => state?.home?.categories);
  const dropdownRef: any = React.useRef(null);
  const handleDropdown = (e: any) => {
    if (dropdownRef?.current?.contains?.(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleDropdown);
    return () => {
      window.removeEventListener('click', handleDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='relative'>
      <div onClick={() => setOpen((prev) => !prev)} className='flex justify-between items-center w-fit md:w-[196px] bg-grey-lightest-100 px-4 rounded-lg h-12 cursor-pointer'>
        <span className='text-sm leading-6 text-grey-lightest-400'>Category</span>
        <DropdownIcon />
      </div>
      {open && <div className="bg-white absolute w-[246px] top-[48px] z-10 rounded-lg rounded-ss-none h-[416px] p-4 overflow-scroll shadow-nav-menu">
        <MobileDropdown data={categories || []} hidedropdown />
      </div>}
    </div>

  );
};

export default CategoryDropdown;
