/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryProducts, IFeaturedMovies, IProduct } from './types';

export interface IProductState {
  promoProducts: IProduct[];
  categoryProducts: ICategoryProducts[];
  featuredMovies: IFeaturedMovies[];
  singleProductView?: IProduct;
  recentlyViewed: IProduct[];
}

const initialState: IProductState = {
  promoProducts: [],
  categoryProducts: [],
  featuredMovies: [],
  singleProductView: undefined,
  recentlyViewed: [],
};

export const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPromoProducts: (state: IProductState, action: PayloadAction<IProduct[]>) => {
      const { payload } = action;
      state.promoProducts = payload;
    },
    setCategoryProducts: (state: IProductState, action: PayloadAction<ICategoryProducts[]>) => {
      const { payload } = action;
      state.categoryProducts = payload;
    },
    setFeaturedMovies: (state: IProductState, action: PayloadAction<IFeaturedMovies[]>) => {
      const { payload } = action;
      state.featuredMovies = payload;
    },
    setSingleProductView: (state: IProductState, action: PayloadAction<IProduct>) => {
      const { payload } = action;
      state.singleProductView = payload;
    },
    setRecentlyViewed: (state: IProductState, action: PayloadAction<IProduct[]>) => {
      const { payload } = action;
      state.recentlyViewed = payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  setCategoryProducts, setFeaturedMovies, setPromoProducts, setSingleProductView, setRecentlyViewed,
} = actions;

export default reducer;
