import { ERRAND_CATEGORY_TYPE } from "../constants/enums";

export interface IErrandCategory {
  name: string;
  id: string;
  type: ERRAND_CATEGORY_TYPE;
}
