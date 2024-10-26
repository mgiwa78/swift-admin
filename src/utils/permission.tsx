import { PERMISSIONS_ENUM } from "../constants/enums";

const hasPermission = (
  userPermissions: string[],
  requiredPermission: PERMISSIONS_ENUM
): boolean => {
  return userPermissions.includes(requiredPermission);
};

export default hasPermission;
