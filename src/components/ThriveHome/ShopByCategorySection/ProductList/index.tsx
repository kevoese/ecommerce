'use client';

import React, { useCallback, useEffect } from 'react';
import { getProductData } from '../../utils';
import ProductListComp from './ProductListComp';

interface Props {
  category?: string;
  brand?: string;
  subcategory?: string;
  customDimesions?: any;
}

const ProductList = ({ category, customDimesions = {} }: Props) => {
  const [data, setData] = React.useState([]);
  const fetchProduct = useCallback(async () => {
    const res = await getProductData({ category } || {});
    setData(res);
  }, [category]);

  useEffect(() => {
    fetchProduct();
  }, [category, fetchProduct]);

  return (
    <ProductListComp data={data} customDimesions={customDimesions} />
  );
};

export default ProductList;
