import { PaginatedResponse } from "../../types/statics";
import { ICustomer } from "../../types/customers";
import { api, providesList } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<PaginatedResponse<ICustomer[]>, any>({
      query: (params) => ({
        url: `customers`,
        params,
      }),
      providesTags: (result) => providesList(result, "Customer"),
    }),
    getCustomer: builder.query<ICustomer, string>({
      query: (id) => `customers/${id}`,
      providesTags: (result, error, id) => [{ type: "Customer", id }],
    }),
    createCustomer: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `customers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Customer", id: "LIST" }],
    }),
    updateCustomer: builder.mutation<
      ICustomer,
      { id: string; data: Partial<ICustomer> }
    >({
      query: ({ id, data }) => ({
        url: `customers/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Customer", id }],
    }),
    deleteCustomer: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Customer", id },
        { type: "Customer", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = userApi;
