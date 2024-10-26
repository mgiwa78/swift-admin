import { ICustomer } from "./customers";
import IInvoice from "./invoice";

export default interface ITransaction {
  title: string;
  amount: number;
  description: string;
  invoice: IInvoice;
  createdAt: Date;
  type: "credit" | "debit" | "payment";
  id: string;
  user: ICustomer;
}
