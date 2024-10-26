import IRole from "./role";

export type IAdmin = {
  id: string;
  fullName: string;
  isVerified: boolean;
  address: string;
  email: string;
  contactNumber: string;
  password: string;
  role: IRole;
  status: "active" | "disabled" | "pending";
  profileImage?: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
};
