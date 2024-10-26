import { IErrandRequest } from "../../types/errand-request";
import { PaginatedResponse } from "../../types/statics";
import { api, providesDynamicList, providesList } from "./api";

const errandRequestsListIdFormatter = (id: number | string) =>
  `ERRAND-REQUESTS-${id}`;

export const errandsRequestsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getErrandRequests: builder.query<PaginatedResponse<IErrandRequest[]>, any>({
      query: (params) => ({
        url: `errand-requests`,
        params,
      }),
      providesTags: (result) => providesList(result, "ErrandRequest"),
    }),
    getErrandRequestsForErrand: builder.query<
      PaginatedResponse<IErrandRequest[]>,
      any
    >({
      query: (params) => ({
        url: `errand-requests`,
        params,
      }),
      providesTags: (result, error, { errand }) => {
        const tags = result?.data
          ? result.data.map(({ id }) => ({
              type: "ErrandRequest",
              id: `ERRAND-REQUESTS-${errand}`, // changed this to refer to `errand`
            }))
          : [{ type: "ErrandRequest", id: `ERRAND-REQUESTS-${errand}` }];

        // Always provide the errand tag
        tags.push({ type: "ErrandRequest", id: `ERRAND-REQUESTS-${errand}` });

        console.log(tags);
        return tags;
      },
    }),
    getErrandRequest: builder.query<IErrandRequest, number>({
      query: (id) => `errand-requests/${id}`,
      providesTags: (result, error, id) => [{ type: "ErrandRequest", id }],
    }),
    createErrandRequest: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `errand-requests`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "ErrandRequest" }],
    }),
    updateErrandErrandRequestStatus: builder.mutation<
      { success: boolean },
      Partial<any>
    >({
      query: ({ id, data }) => ({
        url: `errand-requests/${id}/update-status`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ErrandRequest", id },
        { type: "Errand" },
        { type: "ErrandRequest", id: `ERRAND-REQUESTS-${result.errand?.id}` },
      ],
    }),
    updateErrandRequest: builder.mutation<
      IErrandRequest,
      { id: string; data: Partial<IErrandRequest> }
    >({
      query: ({ id, data }) => ({
        url: `errand-requests/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ErrandRequest", id },
        { type: "Errand" },
      ],
    }),
    deleteErrandRequest: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `errand-requests/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "ErrandRequest", id },
        { type: "ErrandRequest", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetErrandRequestsQuery,
  useGetErrandRequestQuery,
  useCreateErrandRequestMutation,
  useUpdateErrandRequestMutation,
  useDeleteErrandRequestMutation,
  useUpdateErrandErrandRequestStatusMutation,
  useGetErrandRequestsForErrandQuery,
} = errandsRequestsApi;
