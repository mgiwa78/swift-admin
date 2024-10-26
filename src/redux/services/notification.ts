import INotification from "../../types/notification";
import { PaginatedResponse } from "../../types/statics";

import { api, providesList } from "./api";

export const notificationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<PaginatedResponse<INotification[]>, any>({
      query: (params) => ({
        url: `notifications`,
        params,
      }),
      providesTags: (result) => providesList(result, "Notification"),
    }),
    getNotification: builder.query<INotification, string>({
      query: (id) => `notifications/${id}`,
      providesTags: (result, error, id) => [{ type: "Notification", id }],
    }),
    createNotification: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `notifications`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Notification", id: "LIST" }],
    }),
    updateNotification: builder.mutation<
      INotification,
      { id: string; data: Partial<INotification> }
    >({
      query: ({ id, data }) => ({
        url: `notifications/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Notification", id },
      ],
    }),
    deleteNotification: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Notification", id },
        { type: "Notification", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetNotificationQuery,
  useCreateNotificationMutation,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
} = notificationsApi;
