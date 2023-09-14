'use client';

import React from 'react';
import SoldStockComp from '../SoldStockComp';
import TimerCountDown from '../TimerCountDown';

interface Props {
 product : any;
}

const PromoComp = ({ product }: Props) => (
  <div>
    <SoldStockComp
      sold={product?.sold || 0}
      stock={product?.stock || 0}
      className='mt-4'
    />
    <TimerCountDown
      countdown={product?.promoEndTime}
      className='mt-6'
    />
  </div>
);

export default PromoComp;
