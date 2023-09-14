import React from 'react';
import { useAppSelector } from '@/store/hooks';
import ProductCategoryCard from '../ThriveHome/ProductbyCategoryListing/ProductCategoryCard';

const RecentlyViewed = () => {
  const products = useAppSelector((state) => state?.product?.recentlyViewed);
  return (
    <div>
      <ProductCategoryCard
        subCategories={ []}
        name="Recently Viewed"
        products={products}
      />
    </div>
  );
};

export default RecentlyViewed;
