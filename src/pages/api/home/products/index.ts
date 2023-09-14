import { NextApiRequest, NextApiResponse } from 'next';
import data, { getRandomProducts } from './data';

const getMaxAndMinPrice = (products: any) => {
  const prices = products.map((item: any) => item?.amount);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  return {
    maxPrice,
    minPrice,
  };
};
const getAllAvailableColors = (products: any) => {
  const colors:any = [];
  products.forEach((item: any) => {
    if (item?.colors) {
      colors.push(item?.colors);
    }
  });
  const allColors = colors.flat();
  // remove duplicates
  const colors_set: any = new Set(allColors);
  const uniqueColors = [...colors_set];
  return uniqueColors;
};

const paginate = ({
  data, pageSize, page,
}:{data: any; pageSize: number; page: number;}) => {
  const offset = (page - 1) * pageSize;
  const paginatedItems = data.slice(offset).slice(0, pageSize);
  const totalPages = Math.ceil(data.length / pageSize);
  return {
    page,
    perPage: pageSize,
    prePage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    total: data.length,
    totalPages,
    data: paginatedItems,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    category,
    subcategory,
    promo,
    brands,
    featured_movies,
    min_price,
    max_price,
    search,
    color,
    pageSize = 10,
    page = 1,
    recentlyViewed,
  }: any = req.query;
  let formated = data;

  if (category) {
    formated = formated.filter((item: any) => item?.categoryName?.toLowerCase?.()
    === category?.toLowerCase?.());
  }

  if (subcategory) {
    formated = formated.filter((item: any) => item?.subcategory?.toLowerCase?.()
    === subcategory?.toLowerCase?.());
  }

  if (brands) {
    formated = formated.filter((item: any) => item?.brand?.toLowerCase?.()
    === brands?.toLowerCase?.());
  }

  if (promo) {
    formated = formated.filter((item: any) => !!item?.promoEndTime);
  }

  if (featured_movies) {
    formated = featured_movies;
  }

  if (min_price && max_price) {
    formated = formated.filter(
      (item: any) => item?.amount >= min_price && item?.amount <= max_price,
    );
  }

  if (search) {
    formated = formated.filter(
      (item: any) => item?.name?.toLowerCase?.().includes(search?.toLowerCase?.()),
    );
  }

  if (color) {
    formated = formated.filter(
      (item: any) => item?.colors?.includes(color),
    );
  }

  if (recentlyViewed) {
    formated = getRandomProducts(10);
  }

  const paginatedRes = paginate({
    data: formated,
    pageSize,
    page,
  });
  const payload = {
    message: 'Products retried successfully',
    data: paginatedRes?.data,
    page: paginatedRes?.page,
    perPage: paginatedRes?.perPage,
    prePage: paginatedRes?.prePage,
    nextPage: paginatedRes?.nextPage,
    count: paginatedRes?.total,
    totalPages: paginatedRes?.totalPages,
    ...getMaxAndMinPrice(data),
    colors: getAllAvailableColors(data),
  };
  res.status(200).json(payload);
}
