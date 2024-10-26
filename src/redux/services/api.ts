import { API_BASE_URL } from "../../constants/api";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
console.log(API_BASE_URL);

export function invalidateDynamicTags<T extends string>(
  ticketIds: string | number,
  tagType: T,
  dynamicIdFormatter: (id: number | string) => string
) {
  return { type: tagType, id: dynamicIdFormatter(ticketIds) };
}
export function providesDynamicList<
  R extends { data: any[]; total: number; page: number }, // API response shape
  T extends string, // Tag type (e.g., 'tickets', 'projects')
  K extends keyof R["data"][number] // Dynamic key to extract ID (e.g., 'ticket', 'project')
>(
  resultsWithIds: R | undefined, // API result object (or undefined)
  tagType: T, // The tag type string (e.g., 'Ticket', 'Project')
  dynamicIdFormatter: (id: number | string) => string, // Function to format the IDs
  keyExtractor: (item: R["data"][number]) => number | string // Function to extract the key dynamically
) {
  return resultsWithIds
    ? [
        // Add the LIST identifier tag
        { type: tagType, id: dynamicIdFormatter("LIST") },
        // Map through the data and dynamically extract IDs using the keyExtractor
        ...resultsWithIds?.data?.map((item) => ({
          type: tagType,
          id: dynamicIdFormatter(keyExtractor(item)),
        })),
      ]
    : [{ type: tagType, id: dynamicIdFormatter("LIST") }];
}
export function providesList<
  R extends { data: any[]; total: number; page: number },
  T extends string
>(resultsWithIds: R | undefined, tagType: T) {
  return resultsWithIds
    ? [
        { type: tagType, id: "LIST" },
        ...resultsWithIds.data.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: "LIST" }];
}

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    } else {
      throw new Error("Authentication token is missing");
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: "api",
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    "Auth",
    "Customer",
    "Subscription",
    "User",
    "Invoices",
    "TicketResponse",
    "Wallets",
    "Errand",
    "Ticket",
    "ActivityLog",
    "Notification",
    "TicketCategories",
    "ErrandRequest",
    "Config",
    "Permission",
    "Zone",
    "NotificationSettings",
    "ErrandConversation",
    "Role",
    "ErrandCategory",
    "FaqCategory",
    "Admin",
    "Payments",
    "Dashboard",
    "Faq",
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});
