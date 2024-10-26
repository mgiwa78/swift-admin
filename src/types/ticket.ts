import IUser from "./user";
import ITicketCategory from "./ticket-categories";

export default interface ITicket {
  description: string;
  category: ITicketCategory;
  status: string;
  subject: string;
  createdAt: string;
  author: IUser;
  assignedTo: IUser;
  id: string;
}
