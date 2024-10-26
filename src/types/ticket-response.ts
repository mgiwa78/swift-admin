import { ICustomer } from "./customers";
import TTicket from "./ticket";

export default interface ITicketResponse {
  ticket: TTicket;
  message: string;
  createdAt: string;
  author: ICustomer;
  id: string;
}
