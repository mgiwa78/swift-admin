import { PaginatedResponse } from "../../types/statics";
import { IErrand } from "../../types/errand";
import { api, providesList } from "./api";

export const errandsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getErrands: builder.query<PaginatedResponse<IErrand[]>, any>({
      query: (params) => ({
        url: `errands`,
        params,
      }),
      providesTags: (result) => providesList(result, "Errand"),
    }),
    getErrand: builder.query<IErrand, string>({
      query: (id) => `errands/${id}`,
      providesTags: (result, error, id) => [{ type: "Errand", id }],
    }),
    createErrand: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `errands`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Errand", id: "LIST" }],
    }),
    updateErrand: builder.mutation<
      IErrand,
      { id: string; data: Partial<IErrand> }
    >({
      query: ({ id, data }) => ({
        url: `errands/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Errand", id }],
    }),
    deleteErrand: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `errands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Errand", id },
        { type: "Errand", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetErrandsQuery,
  useGetErrandQuery,
  useCreateErrandMutation,
  useUpdateErrandMutation,
  useDeleteErrandMutation,
} = errandsApi;
