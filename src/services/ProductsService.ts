import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  images: string;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),

    getCategories: builder.query<string[], void>({
      query: () => "/products",
      transformResponse: (response: { products: Product[] }) => {
        return Array.from(new Set(response.products.map((p) => p.category)));
      },
    }),
  }),
});

export const singleProductApi = createApi({
  reducerPath: "singleProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getSingleProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
export const { useGetSingleProductQuery } = singleProductApi;
