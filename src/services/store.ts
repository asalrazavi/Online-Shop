import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, productsApi, singleProductApi } from "./ProductsService";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

type CartState = {
  cart: Product[];
};

const initialState: CartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [singleProductApi.reducerPath]: singleProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(singleProductApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const persistor = persistStore(store);
