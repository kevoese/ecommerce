import { getRandomProducts } from '@/pages/api/home/products/data';
import payload from '@/pages/api/home/records/data';

export const getProductData = async ({ category }: any) => {
  let baseUrl = '/api/home/products';
  if (category) {
    baseUrl = `${baseUrl}?category=${category}`;
  }
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data?.data;
};

export const getCategorieAndAds = async () => {
  try {
    const res = await fetch('/api/home/categories');
    const data = await res?.json?.();
    return {
      categories: data?.data,
      ads: data?.categoryAds,
    };
  } catch (error) {
    return [];
  }
};

export const getHomeDataInternal = async () => {
  try {
    const data = payload;
    return data;
  } catch (error: any) {
    console.log(error?.message);
    return [];
  }
};

export const getProductTagStyle = (product: any) => {
  if (product?.stock === 0) {
    return {
      style: 'bg-grey-light text-black',
      text: 'Out of Stock',
    };
  }
  if (product?.discount) {
    return {
      style: 'bg-discount-orange text-white',
      text: `- ${product?.discount}%`,
    };
  }
  if (product?.tag?.toLowerCase?.() === 'new') {
    return {
      style: 'bg-thrive-blue text-white',
      text: 'New',
    };
  }
  return {
    style: 'hidden',
    text: '',
  };
};

export const getAmountAndDiscountedAmount = (product: any) => ({
  productAmount: product?.amount,
  discountedAmount: product?.discount
    ? product.amount - ((product.amount * product.discount) / 100) : null,
});
