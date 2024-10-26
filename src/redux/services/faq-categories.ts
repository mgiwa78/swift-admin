import { IFaqCategory } from "../../types/faq-category";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const faqCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaqCategories: builder.query<PaginatedResponse<IFaqCategory[]>, any>({
      query: (params) => ({
        url: `faq-categories`,
        params,
      }),
      providesTags: (result) => providesList(result, "FaqCategory"),
    }),
    getFaqCategory: builder.query<IFaqCategory, string>({
      query: (id) => `faq-categories/${id}`,
      providesTags: (result, error, id) => [{ type: "FaqCategory", id }],
    }),
    createFaqCategory: builder.mutation<{ success: boolean }, Partial<any>>({
      query: ({ organizationId, data }) => ({
        url: `faq-categories/${organizationId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "FaqCategory", id: "LIST" }],
    }),
    updateFaqCategory: builder.mutation<
      IFaqCategory,
      { id: string; data: Partial<IFaqCategory> }
    >({
      query: ({ id, data }) => ({
        url: `faq-categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "FaqCategory", id }],
    }),
    deleteFaqCategory: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `faq-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "FaqCategory", id },
        { type: "FaqCategory", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetFaqCategoriesQuery,
  useGetFaqCategoryQuery,
  useCreateFaqCategoryMutation,
  useUpdateFaqCategoryMutation,
  useDeleteFaqCategoryMutation,
} = faqCategoryApi;
