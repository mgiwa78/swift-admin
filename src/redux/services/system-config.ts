import { PaginatedResponse } from "../../types/statics";
import { ISystemConfig } from "../../types/system-config";
import { api, providesList } from "./api";

export const ConfigApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getConfigs: builder.query<PaginatedResponse<ISystemConfig[]>, any>({
      query: (params) => ({
        url: `config`,
        params,
      }),
      providesTags: (result) => providesList(result, "Config"),
    }),
    getConfig: builder.query<ISystemConfig, string>({
      query: (id) => `config/${id}`,
      providesTags: (result, error, id) => [{ type: "Config", id }],
    }),
    updateConfig: builder.mutation<
      ISystemConfig,
      { key: string; data: Partial<ISystemConfig> }
    >({
      query: ({ key, data }) => ({
        url: `config/${key}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { key }) => [
        { type: "Config", id: key },
      ],
    }),
  }),
});

export const {
  useGetConfigsQuery,
  useGetConfigQuery,
  useUpdateConfigMutation,
} = ConfigApi;
