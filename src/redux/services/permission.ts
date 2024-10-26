import IPermission from "../../types/permission";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const permissionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPermissions: builder.query<PaginatedResponse<IPermission[]>, any>({
      query: (params) => ({
        url: `permissions`,
        params,
      }),
      providesTags: (result) => providesList(result, "Permission"),
    }),
    getPermission: builder.query<IPermission, string>({
      query: (id) => `permissions/${id}`,
      providesTags: (result, error, id) => [{ type: "Permission", id }],
    }),
    createPermission: builder.mutation<{ success: boolean }, Partial<any>>({
      query: ({ organizationId, data }) => ({
        url: `permissions/${organizationId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Permission", id: "LIST" }],
    }),
    updatePermission: builder.mutation<
      IPermission,
      { id: string; data: Partial<IPermission> }
    >({
      query: ({ id, data }) => ({
        url: `permissions/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Permission", id }],
    }),
    deletePermission: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `permissions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Permission", id },
        { type: "Permission", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetPermissionsQuery,
  useGetPermissionQuery,
  useCreatePermissionMutation,
  useUpdatePermissionMutation,
  useDeletePermissionMutation,
} = permissionsApi;
