import { IAdmin } from "./admin";
import { ICustomer } from "./customers";
import ITicketCategory from "./ticket-categories";

export default interface ITicket {
  description: string;
  category: ITicketCategory;
  status: string;
  subject: string;
  createdAt: string;
  author: ICustomer;
  assignedTo: IAdmin;
  id: string;
}
