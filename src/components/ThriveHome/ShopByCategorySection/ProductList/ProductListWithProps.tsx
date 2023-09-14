'use client';

import React from 'react';
import ProductListComp from './ProductListComp';

interface Props {
  category?: string;
  brand?: string;
  subcategory?: string;
  customDimesions?: any;
  products?: any;
}

const ProductListWithProps = ({ customDimesions = {}, products }: Props) => (
  <ProductListComp data={products} customDimesions={customDimesions} />
);

export default ProductListWithProps;
