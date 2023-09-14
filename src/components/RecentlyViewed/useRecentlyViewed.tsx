'use client';

import { useCallback, useEffect } from 'react';
import { IProduct } from '@/store/product/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRecentlyViewed } from '@/store/product';
import { getRecentlyViewed } from '@/controllers/product';

const useRecentlyViewed = (recentlyViewed: IProduct[] | undefined) => {
  const dispatch = useAppDispatch();
  const appRecentlyViewed = useAppSelector((state) => state?.product?.recentlyViewed);

  const fetchRecentlyViewed = useCallback(async () => {
    // fetch recently viewed
    const result = await getRecentlyViewed();
    if (result) {
      dispatch(setRecentlyViewed(result));
    }
  }, [dispatch]);

  const setRecentlyViewedData = useCallback(() => {
    if (recentlyViewed) {
      dispatch(setRecentlyViewed(recentlyViewed));
    }
  }, [dispatch, recentlyViewed]);

  useEffect(() => {
    if (recentlyViewed) {
      setRecentlyViewedData();
    } else if (!appRecentlyViewed?.length) {
      // fetch recently viewed
      fetchRecentlyViewed();
    }
  }, [recentlyViewed, setRecentlyViewedData, appRecentlyViewed, fetchRecentlyViewed]);

  return ({
    recentlyViewed,
  }
  );
};

export default useRecentlyViewed;
