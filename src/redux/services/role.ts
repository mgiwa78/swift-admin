import IRole from "../../types/role";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const rolesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query<PaginatedResponse<IRole[]>, any>({
      query: (params) => ({
        url: `roles`,
        params,
      }),
      providesTags: (result) => providesList(result, "Role"),
    }),
    getRole: builder.query<IRole, string>({
      query: (id) => `roles/${id}`,
      providesTags: (result, error, id) => [{ type: "Role", id }],
    }),
    createRole: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `roles`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Role", id: "LIST" }],
    }),
    updateRole: builder.mutation<IRole, { id: string; data: Partial<IRole> }>({
      query: ({ id, data }) => ({
        url: `roles/${id}/permissions`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Role", id }],
    }),
    deleteRole: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `roles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Role", id },
        { type: "Role", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetRolesQuery,
  useGetRoleQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
} = rolesApi;
