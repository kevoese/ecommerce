import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setShowMobileFilter } from '@/store/modal';
import React from 'react';
import { ICategories } from '@/store/home/types';
import CloseIcon from '../icons/CloseIcon';
import FilterComponent from './FilterComponent';

interface Props {
  categories: ICategories[];
  selectedColor: string | undefined;
  setSelectedColor: any;
  priceRange: {
    minValue: number;
    maxValue: number;
  }
  handlePriceChange: any;
  colors: string[];
  minPrice: number;
  maxPrice: number;
}

const MobileFilterComp = (props: Props) => {
  const dispatch = useAppDispatch();
  const showFilte = useAppSelector((state) => state?.modal?.showMobileFilter);
  const closeMenu = () => {
    dispatch(setShowMobileFilter(false));
  };
  return (
    <div className={`flex fixed top-0 left-0 right-0 bottom-0 sm:hidden overflow-hidden  z-50 ${showFilte ? 'visible' : 'invisible'}`}>
      <div className='h-screen w-full max-w-[320px] bg-white z-30' >
        <div className="flex items-center w-full justify-between py-2 px-6 h-[56px] bg-thrive-dark">
          <h3 className='text-xl text-white font-medium '>Sort</h3>
          <div onClick={closeMenu} className="close cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <div className="p-6 pb-12 overflow-y-scroll h-full"
          style={{
            height: 'calc(100vh - 56px)',
          }}
        >
          <FilterComponent
            {...props}
          />
        </div>

      </div>
      <div onClick={closeMenu} className="absolute bg-black-opaque top-0 left-0 right-0 bottom-0 cursor-pointer" />
    </div>
  );
};

export default MobileFilterComp;
