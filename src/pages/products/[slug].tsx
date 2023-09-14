import React, { ReactElement } from 'react';
import SingleProduct from '@/components/SingleProduct';
import Layout from '@/components/Layout';
import { IProduct } from '@/store/product/types';
import RecentlyViewed from '@/components/RecentlyViewed';
import ContentBox from '@/components/ContentBox';
import { getRecentlyViewedInternal } from '@/controllers/product';

const SingleProductPage = ({ recentlyViewed }: { recentlyViewed: IProduct[]}) => (
  <ContentBox>
    <SingleProduct
      recentlyViewed={recentlyViewed}
    />
    <RecentlyViewed />
  </ContentBox>
);

export async function getServerSideProps() {
  // Fetch data from external API
  const [recentlyViewed] = await Promise.all([
    getRecentlyViewedInternal(),
  ]);

  // Pass data to the page via props
  return {
    props: {
      recentlyViewed,
    },
  };
}

export default SingleProductPage;
