import { IFaq } from "../../types/faq";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query<PaginatedResponse<IFaq[]>, any>({
      query: (params) => ({
        url: `faqs`,
        params,
      }),
      providesTags: (result) => providesList(result, "Faq"),
    }),
    getFaq: builder.query<IFaq, string>({
      query: (id) => `faqs/${id}`,
      providesTags: (result, error, id) => [{ type: "Faq", id }],
    }),
    createFaq: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `faqs`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        { type: "Faq", id: "LIST" },
        { type: "FaqCategory", id: "LIST" },
      ],
    }),
    updateFaq: builder.mutation<IFaq, { id: string; data: Partial<IFaq> }>({
      query: ({ id, data }) => ({
        url: `faqs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Faq", id }],
    }),
    deleteFaq: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Faq", id },
        { type: "Faq", id: "LIST" },
        { type: "FaqCategory", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetFaqsQuery,
  useGetFaqQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
