import { PaginatedResponse } from "../../types/statics";
import IErrandConversation from "../../types/errand-conversation";
import {
  api,
  invalidateDynamicTags,
  providesDynamicList,
  providesList,
} from "./api";

const errandConversationsListIdFormatter = (id: number | string) =>
  `ERRAND-CONVERSATION-${id}`;

export const errandConversationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getErrandConversations: builder.query<
      PaginatedResponse<IErrandConversation[]>,
      any
    >({
      query: (params) => ({
        url: `errand-conversations`,
        params,
      }),
      providesTags: (result) => providesList(result, "ErrandConversation"),
    }),
    getConversationsForErrand: builder.query<
      PaginatedResponse<IErrandConversation[]>,
      any
    >({
      query: (errandId) => ({
        url: `errand-conversations`,
        params: { errandId },
      }),
      providesTags: (result, error, id) =>
        providesDynamicList(
          result,
          "ErrandConversation",
          errandConversationsListIdFormatter,
          (response) => response.errand.id
        ),
    }),
    createErrandConversation: builder.mutation<
      { success: boolean },
      Partial<any>
    >({
      query: (data) => ({
        url: `errand-conversations`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { errand }) => [
        { type: "ErrandConversation", id: `ERRAND-CONVERSATION-${errand}` },
        { type: "ErrandConversation", id: "LIST" },
      ],
    }),
    updateErrandConversation: builder.mutation<
      IErrandConversation,
      { id: string; data: Partial<IErrandConversation> }
    >({
      query: ({ id, data }) => ({
        url: `errand-conversations/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ErrandConversation", id },
      ],
    }),
    deleteErrandConversation: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `errand-conversations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "ErrandConversation", id },
        { type: "ErrandConversation", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateErrandConversationMutation,
  useUpdateErrandConversationMutation,
  useDeleteErrandConversationMutation,
  useGetConversationsForErrandQuery,
} = errandConversationsApi;
