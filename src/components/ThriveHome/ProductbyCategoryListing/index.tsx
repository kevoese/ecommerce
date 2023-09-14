'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import ProductCategoryCard from './ProductCategoryCard';
import ContentBox from '../../ContentBox';

const ProductbyCategoryListing = () => {
  const categoryProducts = useAppSelector((state) => state?.product?.categoryProducts);
  return (
    <ContentBox>
      {
        categoryProducts?.map((rec: any, index: number) => (
          <ProductCategoryCard
            key={index}
            subCategories={rec?.subCategories || []}
            name={rec?.category}
            products={rec?.products}
          />
        ))}
    </ContentBox>
  );
};

export default ProductbyCategoryListing;
