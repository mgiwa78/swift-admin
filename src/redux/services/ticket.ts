import ITicket from "../../types/ticket";
import { PaginatedResponse } from "../../types/statics";
import { api, providesList } from "./api";

export const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<PaginatedResponse<ITicket[]>, any>({
      query: (params) => ({
        url: `tickets`,
        params,
      }),
      providesTags: (result) => providesList(result, "Ticket"),
    }),
    getTicket: builder.query<ITicket, string>({
      query: (id) => `tickets/${id}`,
      providesTags: (result, error, id) => [{ type: "Ticket", id }],
    }),
    createTicket: builder.mutation<{ success: boolean }, Partial<any>>({
      query: (data) => ({
        url: `tickets`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Ticket", id: "LIST" }],
    }),
    updateTicket: builder.mutation<
      ITicket,
      { id: string; data: Partial<ITicket> }
    >({
      query: ({ id, data }) => ({
        url: `tickets/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Ticket", id }],
    }),
    deleteTicket: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Ticket", id },
        { type: "Ticket", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
} = ticketsApi;
