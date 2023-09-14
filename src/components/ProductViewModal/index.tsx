import { IProduct } from '@/store/product/types';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setProductViewModal } from '@/store/modal';
import { fillOutImages, formatCashInNaira, numberDigitsFormatter } from '@/utils/helpers';
import ModalWrapComp from '../ModalWrapComp';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

const ProductViewModal = () => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state?.modal?.viewProductModal);

  const closeModal = () => {
    dispatch(setProductViewModal(null));
  };

  return (
    <ModalWrapComp
      closeModal={closeModal}
      className='md:flex hidden'
    >
      <div className="rounded-lg flex bg-white max-w-[808px] mx-auto h-[540px] p-6"
        style={{
          width: 'calc(100vw - 16px)',
        }}
      >
        <div className="mr-6">
          <ProductImages
            images={product?.images}
          />
        </div>

        <ProductInfo
          quantity={quantity}
          setQuantity={setQuantity}
          product={product}
        />
      </div>
    </ModalWrapComp>
  );
};

export default ProductViewModal;
