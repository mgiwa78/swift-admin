import { PaginatedResponse } from "../../types/statics";
import { ISubscription } from "../../types/subscription";
import { api, providesList } from "./api";

export const subscriptionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query<PaginatedResponse<ISubscription[]>, any>({
      query: (params) => ({
        url: `subscriptions`,
        params,
      }),
      providesTags: (result) => providesList(result, "Subscription"),
    }),
    getSubscription: builder.query<ISubscription, string>({
      query: (id) => `subscriptions/${id}`,
      providesTags: (result, error, id) => [{ type: "Subscription", id }],
    }),
    createSubscription: builder.mutation<{ success: boolean }, Partial<any>>({
      query: ({ organizationId, data }) => ({
        url: `subscriptions/${organizationId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Subscription", id: "LIST" }],
    }),
    updateSubscription: builder.mutation<
      ISubscription,
      { id: string; data: Partial<ISubscription> }
    >({
      query: ({ id, data }) => ({
        url: `subscriptions/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Subscription", id },
      ],
    }),
    deleteSubscription: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `subscriptions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Subscription", id },
        { type: "Subscription", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionQuery,
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
  useDeleteSubscriptionMutation,
} = subscriptionApi;
