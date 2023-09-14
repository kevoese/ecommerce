import React from 'react';
import { formatCashInNaira } from '@/utils/helpers';
import { useRouter } from 'next/router';
import { getAmountAndDiscountedAmount, getProductTagStyle } from '../ThriveHome/utils';
import Button from '../Button';
import SoldStockComp from '../SoldStockComp';
import TimerCountDown from '../TimerCountDown';
import PromoComp from './PromoComp';

interface Props {
  name: string;
  images?: string;
  amount: number;
  merchant: string;
  width?: number;
  className?: string;
  height?: number;
  discount?: number;
  sold?: number;
  stock?: number;
  promoEndTime?: number;
  slug?: string;
}

const ProductPromoCard = (props: Props) => {
  const router = useRouter();
  const {
    name,
    images,
    amount,
    merchant,
    width,
    height,
    className,
    slug,
    ...rest
  } = props;
  const tagStyle = getProductTagStyle(rest);
  const { productAmount, discountedAmount } = getAmountAndDiscountedAmount(props);
  return (
    <div className='flex flex-col xsm2:flex-row gap-6 mx-auto' >
      <div className={`rounded-lg shadow-nav-menu w-[270px] h-[270px] bg-grey-lightest-200 relative ${className || ''}`}
        style={{
          backgroundImage: `url(${images?.[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`tag absolute top-2 left-2 rounded-md leading-4 font-medium text-xs px-3 py-1 ${tagStyle?.style || ''}`}>{tagStyle.text}</div>
        <div className="item-pay">

        </div>
      </div>
      <div className="card-info flex flex-col justify-between w-[270px] h-[270px] ">
        <div className="flex flex-col justify-start">
          <span className='text-sm leading-6 mb-2 h-12'>{name}</span>
          <div className="flex items-end">
            <strong className='text-lg font-semibold leading-6'>{`${formatCashInNaira(discountedAmount || productAmount)}`}</strong>
            {discountedAmount && <span className="text-xs text-grey-lightest-300 leading-6 ml-4 line-through">{`${formatCashInNaira(productAmount)}`}</span>}
          </div>
          <PromoComp
            product={props}
          />
        </div>
        <Button
          onClick={() => {
            router?.push(`/products/${slug}`);
          }}
          className='w-full h-10 rounded-lg' name="Buy now" />
      </div>
    </div>
  );
};

export default ProductPromoCard;
