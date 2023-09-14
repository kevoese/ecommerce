/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../product/types';

export interface IModalState {
  viewProductModal: IProduct | null;
  showMobileMenu: boolean;
  showMobileFilter: boolean;
}

const initialState: IModalState = {
  viewProductModal: null,
  showMobileMenu: false,
  showMobileFilter: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setProductViewModal: (state: IModalState, action: PayloadAction<IProduct | null>) => {
      const { payload } = action;
      state.viewProductModal = payload;
    },
    setShowMobileMenu: (state: IModalState, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.showMobileMenu = payload;
    },
    setShowMobileFilter: (state: IModalState, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.showMobileFilter = payload;
    },
  },
});

const { actions, reducer } = modalSlice;
export const {
  setProductViewModal,
  setShowMobileMenu,
  setShowMobileFilter,
} = actions;

export default reducer;
