import { ICustomer } from "./customers";

export interface IPayment {
  customer: ICustomer;
  amount: number;
  currency: string;
  type: "errand" | "payment";
  paymentMethodId: string;
  paymentIntentId: string;
  status: "pending" | "succeeded" | "failed";
  createdAt: Date;
  updatedAt: Date;
}
