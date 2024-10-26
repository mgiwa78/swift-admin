import { ICustomer } from "./customers";
import { IErrand } from "./errand";

export default interface IInvoice {
  paymentMethod: "paystack" | "bank_transfer" | "cash";
  amount: number;
  status: "unpaid" | "paid" | "overdue";
  createdAt: Date;
  dueDate: Date;
  paidDate: Date;
  errand: IErrand;
  id: string;
  user: ICustomer;
}
