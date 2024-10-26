import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<any, void>({
      query: () => ({
        url: `dashboard`,
      }),
      providesTags: (result) => ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
