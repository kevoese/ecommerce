import { IProduct } from '@/store/product/types';
import React from 'react';
import Desc from './Desc';
import Spec from './Spec';
import NavSelect from './NavSelect';

interface Props {
  product: IProduct | undefined;
}

const ProductSpec = ({ product }: Props) => {
  const navData = [
    {
      name: 'Description',
      route: 'desc',
      Component: Desc,
      props: {
        desc: product?.description,
      },
    },
    {
      name: 'Specifications',
      route: 'spec',
      Component: Spec,
      props: {
        spec: product?.specifications,
      },
    },
  ];
  return (
    <div>
      <NavSelect data={navData} />
    </div>
  );
};

export default ProductSpec;
