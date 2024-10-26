import { ICustomer } from "./customers";
import ITransaction from "./transaction";

export default interface Iwallet {
  id: number;
  balance: number;
  customer: ICustomer;
  type: "credit" | "debit";
  transactions: ITransaction[];
  createdAt: string;
  updatedAt: string;
}
