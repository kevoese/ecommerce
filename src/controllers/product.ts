import products, { getRandomProducts } from '@/pages/api/home/products/data';
import payload from '@/pages/api/home/records/data';

export const getAllProducts = async ({
  category, search, price, color, subCategory, brand, page, pageSize, promo,
}: any) => {
  let baseUrl = '/api/home/products';
  // using URLSearchParams to attach search as query params to the current baseUrl
  const params = new URLSearchParams();
  if (search) {
    params.append('search', search);
  }

  if (category) {
    params.append('category', category);
  }

  if (price) {
    params.append('min_price', price?.min);
    params.append('max_price', price?.max);
  }

  if (color) {
    params.append('color', color);
  }

  if (subCategory) {
    params.append('subCategory', subCategory);
  }

  if (brand) {
    params.append('brand', brand);
  }

  if (page) {
    params.append('page', page);
  }

  if (promo) {
    params.append('promo', promo);
  }

  if (pageSize) {
    params.append('pageSize', pageSize);
  }

  baseUrl = `${baseUrl}?${params.toString()}`;

  // attach search as query params to the current baseUrl

  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
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

export const getProductBySlug = async ({ slug }: any) => {
  const baseUrl = `/api/home/product/${slug}`;
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data?.data?.product;
};

export const getProductBySlugInternal = async ({ slug }: any) => {
  const prod = products.find((item: any) => item.slug === slug);
  return prod;
};

export const getRecentlyViewedInternal = async () => {
  try {
    const data = getRandomProducts(8);
    return data;
  } catch (error: any) {
    console.log(error?.message);
    return [];
  }
};

export const getRecentlyViewed = async () => {
  try {
    const baseUrl = '/api/home/products?recentlyViewed=true';
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data?.data;
  } catch (error: any) {
    console.log(error?.message);
    return [];
  }
};
