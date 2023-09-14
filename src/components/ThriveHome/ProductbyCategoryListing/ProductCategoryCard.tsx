'use client';

import React from 'react';
import ProductListWithProps from '../ShopByCategorySection/ProductList/ProductListWithProps';

interface Props {
  subCategories: any;
  name: string;
  products: any;
}

const dimesions: any = {
  movies: {
    width: 270,
    height: 270,
  },
  technology: {
    width: 270,
    height: 180,
  },
  'luxury food': {
    width: 270,
    height: 180,
  },
};

const ProductCategoryCard = ({ products, name }: Props) => {
  const [subCategory] = React.useState('movies');

  // const handleSelect = (rec: string) => {
  //   setSubCategory(rec);
  // };
  return (
    <div className='relative mb-16'>
      <div className="flex justify-start items-center mb-4">
        <h4 className='text-xl leading-7 mr-6'>{name}</h4>
        {/* <ShopByCategoryMobile
          onSelect={handleSelect}
          selected={subCategory}
          data={subCategories}
        /> */}
      </div>
      <ProductListWithProps
        subcategory={subCategory}
        customDimesions={dimesions[name?.toLowerCase?.()]}
        products={products}
      />
    </div>
  );
};

export default ProductCategoryCard;
