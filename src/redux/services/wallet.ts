import { PaginatedResponse } from "../../types/statics";
import Iwallet from "../../types/wallet";
import { api, providesList } from "./api";

export const walletsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<PaginatedResponse<Iwallet[]>, any>({
      query: (params) => ({
        url: `wallets/all`,
        params,
      }),
      providesTags: (result) => providesList(result, "Wallets"),
    }),
    getWallet: builder.query<Iwallet, any>({
      query: (id) => ({
        url: `wallets/all/${id}`,
      }),
    }),
  }),
});

export const { useGetWalletsQuery, useGetWalletQuery } = walletsApi;
