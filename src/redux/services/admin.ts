import { PaginatedResponse } from "../../types/statics";
import { IAdmin } from "../../types/admin";
import { api, providesList } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdmins: builder.query<PaginatedResponse<IAdmin[]>, any>({
      query: (params) => ({
        url: `admins`,
        params,
      }),
      providesTags: (result) => providesList(result, "Admin"),
    }),
    getAdmin: builder.query<IAdmin, string>({
      query: (id) => `admins/${id}`,
      providesTags: (result, error, id) => [{ type: "Admin", id }],
    }),
    createAdmin: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `admins`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Admin", id: "LIST" }],
    }),
    updateAdmin: builder.mutation<
      IAdmin,
      { id: string; data: Partial<IAdmin> }
    >({
      query: ({ id, data }) => ({
        url: `admins/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Admin", id }],
    }),
    deleteAdmin: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `admins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Admin", id },
        { type: "Admin", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAdminsQuery,
  useGetAdminQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = userApi;
