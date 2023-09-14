export interface IProduct {
  name: string;
  shortCode?: string;
  rate?: number;
  description?: string;
  totalRates?: number;
  image?: string;
  images?: string[];
  amount: number;
  merchant: string;
  width?: number;
  className?: string;
  height?: number;
  discount?: number;
  sold?: number;
  stock?: number;
  promoEndTime?: number;
  id: string | number;
  categoryId?: string | number;
  categoryName?: string;
  subCategoryId?: string | number;
  subCategoryName?: string;
  brandId: string | number;
  brandName: string;
  tag: string;
  tags?: string[];
  specifications?: {
    [key: string]: string;
  }[];
  slug: string;
  colors?: string[];
}

export interface IFeaturedMovies {
  id: string | number;
  title: string;
  image: string;
  date: string;
}

export interface ICategoryProducts {
  category: string;
  products: IProduct[];
}
