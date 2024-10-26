// Enums for Badge Types

export enum BADGE_STYLES {
  yellow100 = "bg-yellow-100 text-yellow-800",
  green100 = "bg-green-100 text-green-800",
  red100 = "bg-red-100 text-red-800",
  blue100 = "bg-blue-100 text-blue-800",
  gray100 = "bg-gray-100 text-gray-900",
  purple100 = "bg-purple-100 text-purple-800",
  teal100 = "bg-teal-100 text-teal-800",
  orange100 = "bg-orange-100 text-orange-800",
  pink100 = "bg-pink-100 text-pink-800",
  indigo100 = "bg-indigo-100 text-indigo-800",
  gray200 = "bg-gray-200 text-gray-800",
  green200 = "bg-green-200 text-green-800",
  red200 = "bg-red-200 text-red-800",
  red500 = "bg-red-500 text-white",
  green300 = "bg-green-300 text-green-900",
  gray300 = "bg-gray-300 text-gray-900",
  yellow300 = "bg-yellow-300 text-yellow-900",
  blue300 = "bg-[#002e66] text-white",
  gray400 = "bg-gray-400 text-gray-900",
}
export enum PERMISSIONS_ENUM {
  VIEW_USERS = "VIEW_USERS",
  CREATE_USERS = "CREATE_USERS",
  MANAGE_TRANSACTIONS = "MANAGE_TRANSACTIONS",
  MANAGE_HELP_CENTER = "MANAGE_HELP_CENTER",
  RESPOND_TO_TICKETS = "RESPOND_TO_TICKETS",
}
export enum BadgeType {
  UserStatus = "USER_STATUS",
  UserRole = "USER_ROLE",
  TransactionType = "TRANSACTION_TYPES",
  ErrandStatus = "ERRAND_STATUS",
  ErrandRequestStatus = "ERRAND_REQUEST_STATUS",
  SubscriptionStatus = "SUBSCRIPTIONS_STATUS",
  PaymentStatus = "PAYMENT_STATUS",
  PaymentMethod = "PAYMENT_METHODS",
  CustomerType = "CustomerTypes",
}

export enum TRANSACTION_TYPES {
  Credit = "credit",
  Debit = "debit",
}

export enum PAYMENT_STATUS {
  Rejected = "rejected",
  Succeeded = "succeeded",
  Pending = "pending",
  Failed = "failed",
}
export enum SUBSCRIPTIONS_STATUS {
  Rejected = "rejected",
}

// Enums for User Roles
export enum UserRole {
  Admin = "admin",
  Customer = "customer",
  Supervisor = "supervisor",
  Student = "student",
}

export enum PROPOSAL_STATUS {
  Approved = "approved",
  Pending = "pending",
  Rejected = "rejected",
}

// Enums for Patrol Status
export enum PatrolStatus {
  Pending = "pending",
  Abandoned = "abandoned",
  Completed = "completed",
}
export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}
export enum PAYMENT_METHODS {
  Paystack = "active",
  Cash = "cash",
  BankTransfer = "bank_transfer",
}
export enum SOCKET_EVENTS_ENUMS {
  NEW_ERRAND_REQUEST = "NEW_ERRAND_REQUEST",
  NEW_ERRAND = "NEW_ERRAND",
  ERRAND_REQUEST_STATUS = "NEW_ERRAND_REQUEST_STATUS",
}
export enum USER_ROLE_ENUM {
  Receiver = "receiver",
  Helper = "helper",
}
export enum ERRAND_CATEGORY_TYPE {
  Logistic = "logistic",
  Task = "task",
}

export enum ERRAND_STATUS {
  Paid = "paid",
  Unpaid = "unpaid",
  Requested = "requested",
  Completed = "completed",
  Pending = "pending",
  Cancelled = "cancelled",
  "In-progress" = "in-progress",
  Failed = "failed",
}

export enum ERRAND_REQUEST_STATUS {
  Rejected = "rejected",
  Accepted = "accepted",
  Pending = "pending",
  Canceled = "canceled",
}

// Enums for User Roles
export enum CustomerTypes {
  Receiver = "receiver",
  Helper = "helper",
}
