'use client';

import React, { use, useCallback, useEffect } from 'react';
import { Work_Sans, Inter } from 'next/font/google';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAds, setCategories, setCategoryAds } from '@/store/home';
import { setCategoryProducts, setFeaturedMovies, setPromoProducts } from '@/store/product';
import { setShowMobileMenu } from '@/store/modal';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SideMenu from '../SideMenu';
import { getCategorieAndAds } from '../ThriveHome/utils';
import ProductViewModal from '../ProductViewModal';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type Props = {
  children: React.ReactNode,
  homeDataInp?: any,
}

const Layout = ({ children, homeDataInp }: Props) => {
  const { home: homeData, modal } = useAppSelector((state) => state);
  const showMobileMenu = modal?.showMobileMenu;
  const dispatch = useAppDispatch();
  const handleMenuClick = () => {
    dispatch(setShowMobileMenu(!showMobileMenu));
  };

  const handleMenuClose = () => {
    dispatch(setShowMobileMenu(false));
  };

  // set global variable with redux
  const setGlobalHomeData = useCallback(() => {
    const {
      categories,
      ads,
      promoProduct,
      categoryProducts,
      featuredMovies,
      categoryAds,
    } = homeDataInp;
    dispatch(setCategories(categories));
    dispatch(setCategoryAds(categoryAds));
    dispatch(setAds(ads));
    dispatch(setPromoProducts(promoProduct));
    dispatch(setCategoryProducts(categoryProducts));
    dispatch(setFeaturedMovies(featuredMovies));
  }, [dispatch, homeDataInp]);

  useEffect(() => {
    if (homeDataInp) {
      setGlobalHomeData();
    }
  }, [setGlobalHomeData, homeDataInp]);

  const processCategoryData = useCallback(async () => {
    const result: any = await getCategorieAndAds();
    dispatch(setCategories(result?.categories));
    dispatch(setCategoryAds(result?.ads));
  }, [dispatch]);

  useEffect(() => {
    if (!homeData?.categories || !homeData?.categoryAds) {
      processCategoryData();
    }
  }, [homeData?.categories, homeData?.categoryAds, processCategoryData]);

  return (
    <div className={`${workSans.variable} ${inter.variable} font-worksans`}>
      <SideMenu
        closeMenu={handleMenuClose}
        showMenu={showMobileMenu}
      />
      <div id="scrollLayout" className="h-screen min-h-screen flex flex-col overflow-y-scroll">
        <Navbar onMenuClick={handleMenuClick} />
        <div className='flex-grow flex flex-col'>
          <div className="flex-grow flex">
            { children }
          </div>
          <Footer />
        </div>
      </div>
      {modal?.viewProductModal && <ProductViewModal />}
    </div>

  );
};

export default Layout;
