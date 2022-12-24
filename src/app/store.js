import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});
