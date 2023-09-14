import React from 'react';
import ShopByCategoryMobile from './ShopByCategoryMobile';
import ShopByCategoryWeb from './ShopByCategoryWeb';

type ShopByCategoryListProps = {
  selected: string;
  onSelect?: any;
  categories: any;
};

const ShopByCategoryList = ({ selected, onSelect, categories }: ShopByCategoryListProps) => (
  <div className=''>
    <ShopByCategoryMobile
      className='sm:hidden mb-8'
      onSelect={onSelect}
      selected={selected}
      data={categories}
    />
    <ShopByCategoryWeb
      onSelect={onSelect}
      selected={selected}
      className=''
      data={categories}
    />
  </div>
);

export default ShopByCategoryList;
