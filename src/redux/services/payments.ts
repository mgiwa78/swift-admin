import { IPayment } from "../../types/payment";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const paymentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    initializePayment: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `payments/initialize`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Payments", id: "LIST" }],
    }),
    getPayments: builder.query<PaginatedResponse<IPayment[]>, Partial<any>>({
      query: (params) => ({
        url: `payments`,
        params,
      }),
      providesTags: [{ type: "Payments", id: "LIST" }],
    }),
    verifyPayment: builder.mutation<{ success: boolean }, any>({
      query: (reference) => ({
        url: `payments/verify/${reference}`,
        method: "POST",
      }),
      invalidatesTags: (result, error) => [
        { type: "Payments", id: "LIST" },
        "Errand",
      ],
    }),
  }),
});

export const {
  useInitializePaymentMutation,
  useVerifyPaymentMutation,
  useGetPaymentsQuery,
} = paymentsApi;
