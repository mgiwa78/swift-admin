import { PaginatedResponse } from "../../types/statics";
import { IErrandCategory } from "../../types/errand-category";
import { api, providesList } from "./api";

export const errandsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getErrandCategories: builder.query<
      PaginatedResponse<IErrandCategory[]>,
      any
    >({
      query: (params) => ({
        url: `errand-categories`,
        params,
      }),
      providesTags: (result) => providesList(result, "ErrandCategory"),
    }),
    getErrandCategory: builder.query<IErrandCategory, string>({
      query: (id) => `errand-categories/${id}`,
      providesTags: (result, error, id) => [{ type: "ErrandCategory", id }],
    }),
    createErrandCategory: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `errand-categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "ErrandCategory", id: "LIST" }],
    }),
    updateErrandCategory: builder.mutation<
      IErrandCategory,
      { id: string; data: Partial<IErrandCategory> }
    >({
      query: ({ id, data }) => ({
        url: `errand-categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ErrandCategory", id },
      ],
    }),
    deleteErrandCategory: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `errand-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "ErrandCategory", id },
        { type: "ErrandCategory", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetErrandCategoriesQuery,
  useGetErrandCategoryQuery,
  useCreateErrandCategoryMutation,
  useUpdateErrandCategoryMutation,
  useDeleteErrandCategoryMutation,
} = errandsApi;
