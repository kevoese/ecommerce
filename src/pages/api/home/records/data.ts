import products, { featuredMovies, getCategoryProducts } from '../products/data';
import categories, { categoryAds } from '../categories/data';
import ads from '../ads/data';

const payload = {
  categories,
  ads,
  featuredMovies,
  promoProduct: products.filter((item: any) => !!item?.promoEndTime),
  categoryProducts: getCategoryProducts(),
  categoryAds,
};

export default payload;
