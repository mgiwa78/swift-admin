import IInvoice from "../../types/invoice";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const invoicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query<PaginatedResponse<IInvoice[]>, any>({
      query: (params) => ({
        url: `invoices`,
        params,
      }),
      providesTags: (result) => providesList(result, "Invoices"),
    }),
    getInvoice: builder.query<IInvoice, string>({
      query: (id) => `invoices/${id}`,
      providesTags: (result, error, id) => [{ type: "Invoices", id }],
    }),
    createInvoice: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `invoices`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Invoices", id: "LIST" }],
    }),
    updateInvoice: builder.mutation<
      IInvoice,
      { id: string; data: Partial<IInvoice> }
    >({
      query: ({ id, data }) => ({
        url: `invoices/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Invoices", id }],
    }),
    deleteInvoice: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `invoices/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Invoices", id },
        { type: "Invoices", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetInvoiceQuery,
  useCreateInvoiceMutation,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = invoicesApi;
