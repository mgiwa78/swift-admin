import { ICustomer } from "./customers";

export default interface INotification {
  title: string;
  message: string;
  status: boolean;
  color: string;
  createdAt: string;
  linkType: string;
  id: string;
  user: ICustomer;
}
