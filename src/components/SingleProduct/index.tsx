'use client';

import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProductBySlug } from '@/controllers/product';
import { setSingleProductView } from '@/store/product';
import ProductImages from '@/components/ProductViewModal/ProductImages';
import ProductInfo from '@/components/ProductViewModal/ProductInfo';
import ProductSpec from '@/components/ProductSpec';
import { IProduct } from '@/store/product/types';
import { useAppDispatch } from '@/store/hooks';
import useRecentlyViewed from '../RecentlyViewed/useRecentlyViewed';

interface Props {
  recentlyViewed: IProduct[];
}

const SingleProduct = ({
  recentlyViewed,
}: Props) => {
  // get slug from params and fetch product
  const router = useRouter();
  const [product, setProduct] = React.useState<any>(null);
  const slug = router?.query?.slug;
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState(undefined);
  useRecentlyViewed(recentlyViewed);

  const dispatch = useAppDispatch();

  const fetchProduct = useCallback(async () => {
    // fetch product
    const result = await getProductBySlug({ slug });
    if (result) {
      setProduct(result);
      dispatch(setSingleProductView(result));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [fetchProduct, slug]);

  return (
    <div className='w-full'>
      <section className="flex w-full mt-12 gap-y-8 gap-x-20 justify-center flex-wrap">
        <div className="flex justify-center min-w-[320px] sm:min-w-[400px]">
          <ProductImages
            images={product?.images}
          />
        </div>
        <div className="flex justify-center min-w-[320px] sm:min-w-[400px]">
          <ProductInfo
            quantity={quantity}
            setQuantity={setQuantity}
            product={product}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            showPromo
          />
        </div>
      </section>
      <section className='max-w-[800px] mx-auto mt-16'>
        <ProductSpec
          product={product}
        />
      </section>
    </div>
  );
};

export default SingleProduct;
