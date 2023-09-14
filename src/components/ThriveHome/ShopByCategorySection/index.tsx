'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import ShopByCategoryList from '../../CategoryComp/ShopByCategoryList';
import ContentBox from '../../ContentBox';
import ProductList from './ProductList';

const ShopByCategorySection = () => {
  const categories = useAppSelector((state) => state?.home?.categories);
  const [category, setCategory] = React.useState('movies');

  const handleSelect = (category: string) => {
    setCategory(category);
  };

  return (
    <ContentBox parentClassName='my-10' className='relative'>
      <h4 className='text-xl leading-7 mb-4'>Shop By Category</h4>
      <ShopByCategoryList
        selected={category}
        onSelect={handleSelect}
        categories={categories}
      />
      <ProductList category={category} />
    </ContentBox>
  );
};

export default ShopByCategorySection;
