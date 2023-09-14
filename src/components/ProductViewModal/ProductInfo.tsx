'use client';

import { IProduct } from '@/store/product/types';
import React from 'react';
import { formatCashInNaira, numberDigitsFormatter } from '@/utils/helpers';
import Button from '../Button';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import Rating from '../Rating';
import ColorList from '../ColorList';
import PromoComp from '../ProductCard/PromoComp';

interface Props {
  product: IProduct | null;
  quantity: number;
  setQuantity: any;
  setSelectedColor?: any;
  selectedColor?: string;
  showPromo?: boolean;
}

const ProductInfo = ({
  product,
  setQuantity,
  quantity,
  setSelectedColor,
  selectedColor,
  showPromo,
}: Props) => {
  const addQuantity = () => {
    if (product?.stock && quantity === product?.stock) {
      // Toast message
      return;
    }
    setQuantity((prev: number) => prev + 1);
  };

  const removeQuantity = () => {
    if (quantity === 1) {
      // Toast message
      return;
    }
    setQuantity((prev: number) => prev - 1);
  };

  const handleChange = (e: any) => {
    if (product?.stock && e.target.value > product?.stock) {
      // Toast message
      return;
    }
    if (e.target.value < 1) return;
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="flex-grow flex flex-col">
      <div className='w-full flex-grow bg-red'>
        <h3 className='font-medium text-xl text-thrive-dark mb-3'>{product?.name}</h3>
        <div className="rating mt-3">
          <Rating
            rate={product?.rate}
            reviews={product?.totalRates}
          />
        </div>
        <h5 className='my-6 font-medium text-lg text-thrive-dark'>{formatCashInNaira(product?.amount)}</h5>
        <div className="details flex flex-col">
          <span className="text-thrive-dark text-sm leading-6 mb-2">{`Code: ${product?.shortCode || product?.name}`}</span>
          <span className="text-thrive-dark text-sm leading-6 mb-2">Category: <span className="text-thrive-dark-blue cursor-pointer">{product?.categoryName}</span></span>
          <span className="text-thrive-dark text-sm leading-6 mb-4">Keyword:
            {
              product?.tags && product?.tags?.map?.((tag: string, index: number, arr) => (
                <span key={index} className="text-thrive-dark-blue cursor-pointer">{` ${tag}${arr.length - 1 === index ? '' : ','}`}</span>
              ))
            }
          </span>
        </div>
        <div className="pl-4">
          <ul className='list-disc'>
            {
              product?.specifications?.slice(0, 4).map((spec, index) => (
                <li key={index} className="text-thrive-dark text-sm leading-6 mb-2">{`${spec?.key}: ${spec?.value}`}</li>
              ))
            }
          </ul>
        </div>
      </div>
      {product?.colors && setSelectedColor && (<div className="colors mt-6 mb-4">
        <ColorList
          colors={product?.colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>)}
      <div className="w-full mb-4">
        <p className="text-thrive-dark text-sm leading-6 mb-2 font-medium">
       Qty:
        </p>
        <div className="buy flex">
          <div className="flex items-center">
            <div onClick={removeQuantity} className="remove cursor-pointer mr-4">
              <MinusIcon />
            </div>
            <input
              type="number"
              className="qty-input w-12 h-10 border border-grey-light rounded-lg text-center outline-none text-grey-lightest-400 text-sm leading-6"
              value={numberDigitsFormatter(quantity)}
              onChange={handleChange} />
            <div onClick={addQuantity} className="add cursor-pointer mx-4">
              <PlusIcon />
            </div>
          </div>
          <Button name='Buy' className='h-12 w-32 ml-2 rounded-lg' />
        </div>

      </div>
      {showPromo && <div className="promo w-full mb-4">
        <p className="text-thrive-dark text-sm leading-6 mb-2 font-medium">
         Special Offer:
        </p>
        <PromoComp
          product={product}
        />
      </div>}
    </div>
  );
};

export default ProductInfo;
