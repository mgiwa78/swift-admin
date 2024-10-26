import ITicketCategory from "../../types/ticket-categories";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const TicketCategoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTicketCategoriess: builder.query<
      PaginatedResponse<ITicketCategory[]>,
      any
    >({
      query: (params) => ({
        url: `ticket-categories`,
        params,
      }),
      providesTags: (result) => providesList(result, "TicketCategories"),
    }),
    getTicketCategories: builder.query<ITicketCategory, string>({
      query: (id) => `ticket-categories/${id}`,
      providesTags: (result, error, id) => [{ type: "TicketCategories", id }],
    }),
    createTicketCategories: builder.mutation<
      { success: boolean },
      Partial<any>
    >({
      query: ({ organizationId, data }) => ({
        url: `ticket-categories/${organizationId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "TicketCategories", id: "LIST" }],
    }),
    updateTicketCategories: builder.mutation<
      ITicketCategory,
      { id: string; data: Partial<ITicketCategory> }
    >({
      query: ({ id, data }) => ({
        url: `ticket-categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "TicketCategories", id },
      ],
    }),
    deleteTicketCategories: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `ticket-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "TicketCategories", id },
        { type: "TicketCategories", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTicketCategoriessQuery,
  useGetTicketCategoriesQuery,
  useCreateTicketCategoriesMutation,
  useUpdateTicketCategoriesMutation,
  useDeleteTicketCategoriesMutation,
} = TicketCategoriesApi;
