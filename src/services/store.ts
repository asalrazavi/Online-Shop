import { configureStore } from "@reduxjs/toolkit";
import { productsApi, singleProductApi } from "./ProductsService";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // ✅ Add API reducer
    [singleProductApi.reducerPath]: singleProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(singleProductApi.middleware),
});

// ✅ Export RootState & AppDispatch for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
