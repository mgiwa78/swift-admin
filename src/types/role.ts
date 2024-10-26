import IPermission from "./permission";

export default interface IRole {
  id: string;
  name: string;
  permissions: Array<IPermission>;
}
