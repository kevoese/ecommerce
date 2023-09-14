export interface ICategories {
  id?: string;
  name: string;
  icon?: string;
  subcategories?: {
    id?: string;
    name: string;
    brands?: {
      id?: string;
      name: string;
    }[];
  }[];
}

export interface IQucikOrder {
  category?: string;
  brand?: string;
  campaign?: string;
  image?: string;
}

export interface IDeals {
  title: string;
  campaign: string;
  promotion: string;
  image: string;
}

export interface IBillsProducts {
  title: string;
  info: string;
  detals: string;
  image: string;
}

export interface ICategoryAds {
  category: string;
  info: string;
  detals: string;
  image: string;
}

export interface IAdsData {
  quickOrder: IQucikOrder;
  deals: IDeals[];
  billsProducts: IBillsProducts[];
}
