import { IErrandCategory } from "./errand-category";
import { IZone } from "./zone";

export type ICustomer = {
  id: string;
  fullName: string;
  email: string;
  zone: IZone;
  preferences: IErrandCategory[];
  password: string;
  customerType: "receiver" | "helper";
  status: "active" | "disabled" | "pending";
  profileImage?: string;
  location: string;
  contactNumber: string;
  address: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};
