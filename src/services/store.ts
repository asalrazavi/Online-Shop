import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./ProductsService";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // ✅ Add API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // ✅ Add API middleware
});

// ✅ Export RootState & AppDispatch for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
