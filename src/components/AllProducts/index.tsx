'use client';

import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllProducts } from '@/controllers/product';
import { IProduct } from '@/store/product/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setShowMobileFilter } from '@/store/modal';
import useRecentlyViewed from '../RecentlyViewed/useRecentlyViewed';
import MobileDropdown from '../CategoryComp/CategoryDropdown/MobileDropdown';
import ProductCard from '../ProductCard';
import ColorList from '../ColorList';
import PriceRange from '../PriceRange';
import PaginationComp from '../PaginationComp';
import FilterComponent from './FilterComponent';
import MobileFilterComp from './MobileFilterComp';
import ArrowRight from '../icons/ArrowRight';

const pageSize = 16;

interface Props {
  recentlyViewed?: IProduct[];
}

const AllProducts = ({
  recentlyViewed,
}: Props) => {
  // get queries from params and fetch products
  const router = useRouter();
  const search = router?.query?.search;
  const promo = router?.query?.promo;
  const page = router?.query?.page ? Number(router?.query?.page) : 1;

  const setPage = (page: number) => {
    // get current url
    const currentUrl = router.asPath.split('?')[0];
    const { query }: any = router;
    // get query params
    const params = new URLSearchParams(query);
    params.set('page', page.toString());
    console.log(query, page, params.toString());
    router.push(`${currentUrl}?${params.toString()}`);
  };

  const [products, setProducts] = React.useState<any>(null);
  const [selectedColor, setSelectedColor] = React.useState(undefined);
  const [priceRange, setPriceRange] = React.useState({
    minValue: 0,
    maxValue: 0,
  });
  const categories = useAppSelector((state) => state?.home?.categories);
  useRecentlyViewed(recentlyViewed);

  const fetchProducts = useCallback(async () => {
    // fetch product
    const result = await getAllProducts({
      search, pageSize, promo, page,
    });
    if (result) {
      setProducts(result);
      setPriceRange({
        minValue: result?.minPrice,
        maxValue: result?.maxPrice,
      });
    }
  }, [search, promo, page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, search, promo]);

  const handlePriceChange = (e: any) => {
    const { value, name } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useAppDispatch();
  const showFilterMenu = () => {
    dispatch(setShowMobileFilter(true));
  };

  return (
    <div className='w-full min-h-500px py-[80px]'>
      <div className="flex gap-4 justify-between">
        <div className="hidden sm:block">
          <FilterComponent
            categories={categories}
            minPrice={products?.minPrice}
            maxPrice={products?.maxPrice}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            colors={products?.colors}
          />
        </div>
        <div className='flex-grow'>
          <div
            onClick={showFilterMenu}
            className="filter-btn flex justify-between px-4 py-2 border rounded-md border-grey-light w-full max-w-[270px] mb-6 sm:hidden"
          >
            <span className='text-sm text-thrive-dark leading-6'>Filter Products</span>
            <ArrowRight />
          </div>
          <section className="flex-grow max-w-[800px] display: flex flex-wrap gap-6">
            {products?.data?.length && (
              products?.data?.map?.((item: IProduct, index: number) => (
                <ProductCard
                  key={index}
                  {...item}
                  width={172}
                  height={172}
                />
              )))}
          </section>
        </div>

      </div>
      <div className="pagination mt-8 w-full flex justify-end">
        <PaginationComp
          count={products?.count}
          pageSize={pageSize}
          page={page}
          setPage={setPage}
        />
      </div>
      <MobileFilterComp categories={categories}
        minPrice={products?.minPrice}
        maxPrice={products?.maxPrice}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        colors={products?.colors}/>
    </div>
  );
};

export default AllProducts;
