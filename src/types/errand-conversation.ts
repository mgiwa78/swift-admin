import TTicket from "./ticket";
import { IErrand } from "./errand";
import { ICustomer } from "./customers";

export default interface IErrandConversation {
  errand: IErrand;
  message: string;
  createdAt: string;
  author: ICustomer;
  id: string;
}
