import { IAdmin } from "../../types/admin";

import { setUserPermissions, setUserRole } from "../slice/authSlice";
import { api } from "./api";

export const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ email: string; password: string }, Partial<any>>({
      query(credentials) {
        return {
          url: `auth/signin`,
          method: "POST",
          body: credentials,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    getProfile: builder.query<IAdmin, void>({
      query: () => `auth/me`,
      providesTags: (result, error, id) => [{ type: "Auth" }],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to fulfill
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      },
    }),
    getNotificationSettings: builder.query<
      {
        newErrandNotification: boolean;
        newErrandRequestNotification: boolean;
        sendEmailNotifications: boolean;
      },
      void
    >({
      query: () => `auth/notification-settings`,
      providesTags: (result, error, id) => [{ type: "NotificationSettings" }],
    }),
    updateProfile: builder.mutation<Partial<IAdmin>, Partial<any>>({
      query(data) {
        return {
          url: `auth/me`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Auth" }, { type: "ActivityLog" }],
    }),
    updateNotificationSettings: builder.mutation<Partial<IAdmin>, Partial<any>>(
      {
        query(data) {
          return {
            url: `auth/notification-settings`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: [
          { type: "NotificationSettings" },
          { type: "ActivityLog" },
        ],
      }
    ),
    updateWorkDetails: builder.mutation<Partial<IAdmin>, Partial<any>>({
      query(data) {
        return {
          url: `auth/me-work`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Auth" }, { type: "ActivityLog" }],
    }),
    updatePassword: builder.mutation<
      { currentPassword: string; newPassword: string; confirmPassword: string },
      Partial<any>
    >({
      query(data) {
        return {
          url: `auth/update-password`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Auth" }, { type: "ActivityLog" }],
    }),
    fogotPassword: builder.mutation<{ email: string }, Partial<any>>({
      query(data) {
        return {
          url: `auth/forgot-password`,
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation<{ enail: string }, Partial<any>>({
      query(data) {
        return {
          url: `auth/forgot-password`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useGetProfileQuery,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useFogotPasswordMutation,
  useUpdateWorkDetailsMutation,
  useUpdateNotificationSettingsMutation,
  useGetNotificationSettingsQuery,
} = AuthApi;
