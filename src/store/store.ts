/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';
import productReducer from './product';
import modalReducer from './modal';

export const store = configureStore({
  reducer: {
    // reference reducers here
    home: homeReducer,
    product: productReducer,
    modal: modalReducer,
  },
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
