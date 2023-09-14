'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import ProductPromoCard from '../../ProductCard/ProductPromoCard';
import ContentBox from '../../ContentBox';

const PromoCard = () => {
  const data = useAppSelector((state) => state?.product?.promoProducts);
  return (
    <ContentBox parentClassName='mb-8' >
      <h4 className='text-xl leading-7 mr-6'>Promo Product</h4>
      <div className='flex gap-6 mt-9 flex-wrap'>
        {
          data?.slice(0, 2).map((product: any, index: number) => (
            <ProductPromoCard
              key={index}
              {...product}
              className=''
            />
          ))
        }
      </div>

    </ContentBox>
  );
};

export default PromoCard;
