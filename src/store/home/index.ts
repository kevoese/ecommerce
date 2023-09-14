/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdsData, ICategories, ICategoryAds } from './types';

export interface IHomeState {
  categories: ICategories[];
  ads: IAdsData;
  categoryAds: ICategoryAds[];
}

const initialState: IHomeState = {
  categories: [],
  categoryAds: [],
  ads: {
    quickOrder: {},
    deals: [],
    billsProducts: [],
  },
};

export const userSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCategories: (state: IHomeState, action: PayloadAction<ICategories[]>) => {
      const { payload } = action;
      state.categories = payload;
    },
    setCategoryAds: (state: IHomeState, action: PayloadAction<ICategoryAds[]>) => {
      const { payload } = action;
      state.categoryAds = payload;
    },
    setAds: (state: IHomeState, action: PayloadAction<IAdsData>) => {
      const { payload } = action;
      state.ads = payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  setCategories, setAds, setCategoryAds,
} = actions;
export default reducer;
