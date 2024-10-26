import { ICustomer } from "./customers";
import { IErrand } from "./errand";
import { IErrandCategory } from "./errand-category";

export interface IErrandRequest {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed" | "canceled";
  paymentStatus: "unpaid" | "paid";
  requester: ICustomer; // The customer who requested the errand
  helper?: ICustomer | null; // The helper assigned to the errand (can be null)
  category: IErrandCategory; // The category of the errand
  errand: IErrand; // The category of the errand
  dueDate: Date; // The due date of the errand
  location: string; // The location where the errand takes place
  price: number; // The price of the errand
  createdAt: Date; // The creation date of the errand
  updatedAt: Date; // The last updated date of the errand
}
