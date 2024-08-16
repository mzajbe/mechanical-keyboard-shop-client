

import { TProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mechanical-keyboard-shop-server-five.vercel.app/api" }),
  tagTypes: ["Products"], // Add this line to manage cache invalidation
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
      providesTags: ["Products"],
    }),
    updateProduct: builder.mutation<TProduct, { id: string; data: TProduct }>({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"], // Invalidate the cache to refetch updated data
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"], // Invalidate the cache to refetch the updated product list
    }),
    createProduct: builder.mutation<TProduct, Partial<TProduct>>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ["Products"], // Invalidate the cache to refetch the updated product list
    }),
  }),
});

export const { useGetProductsQuery, useUpdateProductMutation, useDeleteProductMutation,useCreateProductMutation } = baseApi;
