import { PaginatedResponse } from "../../types/statics";
import { IZone } from "../../types/zone";
import { api, providesList } from "./api";

export const errandsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getZones: builder.query<PaginatedResponse<IZone[]>, any>({
      query: (params) => ({
        url: `zones`,
        params,
      }),
      providesTags: (result) => providesList(result, "Zone"),
    }),
    getZone: builder.query<IZone, string>({
      query: (id) => `zones/${id}`,
      providesTags: (result, error, id) => [{ type: "Zone", id }],
    }),
    createZone: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `zones`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Zone", id: "LIST" }],
    }),
    updateZone: builder.mutation<IZone, { id: string; data: Partial<IZone> }>({
      query: ({ id, data }) => ({
        url: `zones/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Zone", id }],
    }),
    deleteZone: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `zones/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Zone", id },
        { type: "Zone", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetZonesQuery,
  useGetZoneQuery,
  useCreateZoneMutation,
  useUpdateZoneMutation,
  useDeleteZoneMutation,
} = errandsApi;
