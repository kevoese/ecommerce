'use client';

import { getAllProducts } from '@/controllers/product';
import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchProductCard from './SearchProductCard';

interface Props {
  search: string;
  setOpen?: any;
  className?: string;
}

const ProductSearchList = ({ search, setOpen, className }: Props) => {
  const [searchResults, setSearchResults] = React.useState<any>([]);
  const router = useRouter();

  const fetchProducts = useCallback(async () => {
    const result = await getAllProducts({ search, pageSize: 4, page: 1 }) || {};
    const { data, ...rest } = result;
    setSearchResults({
      products: data,
      ...rest,
    });
  }, [search]);

  useEffect(() => {
    if (search) {
      fetchProducts();
    }
  }, [fetchProducts, search]);

  return (
    <div className={`min-h-[400px] bg-white rounded-lg py-4 ${className || ''}`}>
      {search && <>
        <span className="mt-8 px-4 capitalize text-sm leading-6 font-medium ">
          {searchResults ? `${search} (${searchResults?.count || 0})` : 'Searching...'}
        </span>
        <div className="mt-2 mb-4 h-[40px] flex justify-between items-center bg-[#FCFCFC] pl-6 pr-4">
          <span className="text-xs font-medium text-grey-lightest-300 leading-5">Product</span>
          <span
            className="text-xs font-medium cursor-pointer text-thrive-blue leading-5"
            onClick={() => {
              setOpen(false);
              router.push(`/products?page=1&search=${search}`);
            }}
          >
            See All
          </span>
        </div>
        <div className="px-4">
          {
            searchResults?.products?.length ? (
              <div className="gap-y-4">
                {
                  searchResults?.products?.map((product: any, index: number) => (
                    <SearchProductCard
                      key={index}
                      product={product}
                      setOpen={setOpen}
                    />
                  ))
                }
              </div>
            )
              : (
                <div className="mt-8 capitalize text-sm leading-6 ">
                 No results found
                </div>
              )
          }
        </div>

      </>}
    </div>
  );
};

export default ProductSearchList;
