import { ICategories } from '@/store/home/types';
import React from 'react';
import MobileDropdown from '../CategoryComp/CategoryDropdown/MobileDropdown';
import ColorList from '../ColorList';
import PriceRange from '../PriceRange';

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

const FilterComponent = ({
  categories,
  minPrice,
  maxPrice,
  selectedColor,
  setSelectedColor,
  priceRange,
  handlePriceChange,
  colors,
}: Props) => (
  <section className='w-[270px]'>
    <h3 className='text-xl text-thrive-dark font-medium mb-6'>Category</h3>
    <MobileDropdown data={categories || []} />
    <h3 className='text-xl text-thrive-dark font-medium mt-8 mb-4'>Color</h3>
    <ColorList
      colors={colors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />
    <h3 className='text-xl text-thrive-dark font-medium mt-8 mb-4'>Price</h3>
    <PriceRange
      min={minPrice || 0}
      max={maxPrice || 123456}
      minValue={priceRange?.minValue}
      maxValue={priceRange?.maxValue}
      handleChange={handlePriceChange}
    />
  </section>
);

export default FilterComponent;
