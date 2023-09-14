'use client';

import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setAds, setCategories, setCategoryAds } from '@/store/home';
import { setCategoryProducts, setFeaturedMovies, setPromoProducts } from '@/store/product';
import AdSection from './AdSection/index';
import ShopByCategorySection from './ShopByCategorySection';
import MovieTicketSection from './MovieTicketSection';
import ProductbyCategoryListing from './ProductbyCategoryListing';
import PromoCard from './Promo';

const ThriveHome = () => (
  <div className='max-w-[2000px] mx-auto'>
    <AdSection />
    <ShopByCategorySection />
    <PromoCard />
    <MovieTicketSection />
    <ProductbyCategoryListing />
  </div>
);
export default ThriveHome;
