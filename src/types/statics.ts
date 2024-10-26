import { PERMISSIONS_ENUM } from "../constants/enums";

export interface PaginatedResponse<T> {
  data: T;
  total: number;
  page: number;
}

export interface GetParams {
  page: number;
  limit: number;
}

export const allPermissions = [
  PERMISSIONS_ENUM.VIEW_USERS,
  PERMISSIONS_ENUM.MANAGE_TRANSACTIONS,
  PERMISSIONS_ENUM.RESPOND_TO_TICKETS,
  PERMISSIONS_ENUM.MANAGE_HELP_CENTER,
  PERMISSIONS_ENUM.CREATE_USERS,
];
