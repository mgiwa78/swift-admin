import { ICustomer } from "./customers";

export interface ISubscription {
  customer: ICustomer;
  planType: "standard" | "platinum" | "elite";
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  paymentStatus: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}
