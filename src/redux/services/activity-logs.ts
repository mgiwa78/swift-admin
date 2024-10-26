import IActivityLogLog from "../../types/activity";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const activityLogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getActivityLogs: builder.query<PaginatedResponse<IActivityLog[]>, any>({
      query: (params) => ({
        url: `activity-logs/user-logs`,
        params,
      }),
      providesTags: (result) => providesList(result, "ActivityLog"),
    }),
    getActivityLog: builder.query<IActivityLog, string>({
      query: (id) => `activity/${id}`,
      providesTags: (result, error, id) => [{ type: "ActivityLog", id }],
    }),
    createActivityLog: builder.mutation<{ success: boolean }, Partial<any>>({
      query: ({ organizationId, data }) => ({
        url: `activity/${organizationId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "ActivityLog", id: "LIST" }],
    }),
    updateActivityLog: builder.mutation<
      IActivityLog,
      { id: string; data: Partial<IActivityLog> }
    >({
      query: ({ id, data }) => ({
        url: `activity/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "ActivityLog", id }],
    }),
    deleteActivityLog: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `activity/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "ActivityLog", id },
        { type: "ActivityLog", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetActivityLogsQuery,
  useGetActivityQuery,
  useCreateActivityMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation,
} = activityLogsApi;
