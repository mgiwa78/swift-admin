import { ICustomer } from "./customers";
import { IErrandCategory } from "./errand-category";

export interface IErrand {
  receiver: ICustomer;
  helper?: ICustomer;
  category?: IErrandCategory;
  description: string;
  title: string;
  price: number;
  id: string;
  status: "requested" | "in-progress" | "completed" | "cancelled";
  paymentStatus: "unpaid" | "paid";
  createdAt: Date;
  updatedAt: Date;
}
