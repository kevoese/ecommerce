import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setProductViewModal } from '@/store/modal';
import { IProduct } from '@/store/product/types';
import { formatCashInNaira } from '@/utils/helpers';
import { useRouter } from 'next/router';
import { getAmountAndDiscountedAmount, getProductTagStyle } from '../ThriveHome/utils';
import Button from '../Button';
import HeartIcon from '../icons/HeartIcon';
import ProductViewEyeIcon from '../icons/ProductViewEyeIcon';

interface Props {
  name: string;
  images?: string;
  amount: number;
  merchant: string;
  width?: number;
  className?: string;
  height?: number;
}

const ProductCard = (props: IProduct) => {
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
  const router = useRouter();
  const tagStyle = getProductTagStyle(rest);
  const dispatch = useAppDispatch();
  const webProductView = () => {
    dispatch(setProductViewModal(props));
  };
  const { productAmount, discountedAmount } = getAmountAndDiscountedAmount(props);
  return (
    <div className='flex flex-col product-card'
      style={{
        width: width ? `${width}px` : '172px',
      }}
    >
      <div className={`product-card-image rounded-lg min-w-[${width || '172'}px] min-h-[${height || '172'}px] bg-grey-lightest-200 relative ${className || ''}`}
        style={{
          width: width ? `${width}px` : '172px',
          height: height ? `${height}px` : '172px',
          backgroundImage: `url(${images?.[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`tag absolute top-2 left-2 rounded-md leading-4 font-medium text-xs px-3 py-1 ${tagStyle?.style || ''}`}>{tagStyle.text}</div>
        <div className="item-pay absolute inset-0 flex items-center justify-center bg-modal-dark-purple">
          <div className="item-pay-content flex items-center flex-col w-full max-w-[156px]">
            <div className="flex justify-between w-full mb-8">
              <div className="rounded-lg bg-black h-10 w-16 flex items-center justify-center cursor-pointer">
                <HeartIcon />
              </div>
              <div onClick={webProductView} className="rounded-lg bg-black h-10 w-16 flex items-center justify-center cursor-pointer">
                <ProductViewEyeIcon />
              </div>
            </div>
            <Button
              className='w-full h-10 rounded-lg'
              name="Buy now"
              onClick={() => {
                router?.push(`/products/${slug}`);
              }}
            />
          </div>

        </div>
      </div>
      <span className='text-sm leading-6 mb-1 mt-2'>{name}</span>
      <strong className='text-sm font-semibold leading-6'>{`${formatCashInNaira(discountedAmount || productAmount)}`}</strong>
      {discountedAmount && <span className='text-xs text-grey-lightest-300 leading-6 mb-4 line-through'>{`${formatCashInNaira(productAmount)}`}</span>}
      <div className="text-xs text-thrive-blue"><small className=" text-grey-lightest-300">by</small>{` ${merchant}`}</div>
    </div>
  );
};

export default ProductCard;
