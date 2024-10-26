import { PaginatedResponse } from "../../types/statics";
import ITicketResponse from "../../types/ticket-response";
import {
  api,
  invalidateDynamicTags,
  providesDynamicList,
  providesList,
} from "./api";

const ticketResponsesListIdFormatter = (id: number | string) =>
  `TICKET-RESPONSE-${id}`;

export const ticketResponsesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTicketResponses: builder.query<
      PaginatedResponse<ITicketResponse[]>,
      any
    >({
      query: (params) => ({
        url: `ticket-responses`,
        params,
      }),
      providesTags: (result) => providesList(result, "TicketResponse"),
    }),
    getTicketResponsesForTicket: builder.query<
      PaginatedResponse<ITicketResponse[]>,
      any
    >({
      query: (ticketId) => ({
        url: `ticket-responses`,
        params: { ticket: ticketId },
      }),
      providesTags: (result, error, id) =>
        providesDynamicList(
          result,
          "TicketResponse",
          ticketResponsesListIdFormatter,
          (response) => response.ticket.id
        ),
    }),
    getTicketResponse: builder.query<ITicketResponse, string>({
      query: (id) => `ticket-responses/${id}`,
      providesTags: (result, error, id) => [{ type: "TicketResponse", id }],
    }),
    createTicketResponse: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `ticket-responses`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { ticket }) => [
        { type: "TicketResponse", id: `TICKET-RESPONSE-${ticket}` },
        { type: "TicketResponse", id: "LIST" },
      ],
    }),
    updateTicketResponse: builder.mutation<
      ITicketResponse,
      { id: string; data: Partial<ITicketResponse> }
    >({
      query: ({ id, data }) => ({
        url: `ticket-responses/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "TicketResponse", id },
      ],
    }),
    deleteTicketResponse: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `ticket-responses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "TicketResponse", id },
        { type: "TicketResponse", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetTicketResponsesQuery,
  useGetTicketResponsesForTicketQuery,
  useGetTicketResponseQuery,
  useCreateTicketResponseMutation,
  useUpdateTicketResponseMutation,
  useDeleteTicketResponseMutation,
} = ticketResponsesApi;
