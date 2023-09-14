import AllProducts from '@/components/AllProducts';
import ContentBox from '@/components/ContentBox';
import RecentlyViewed from '@/components/RecentlyViewed';
import React from 'react';

interface Props {
  recentlyViewed : any;
}

const ProductListings = () => (
  <ContentBox>
    <AllProducts />
    <RecentlyViewed />
  </ContentBox>
);

export default ProductListings;
