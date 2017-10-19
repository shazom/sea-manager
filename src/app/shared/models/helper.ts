import { HelperCategory } from "app/shared/models/helperCategory";

export interface Helper {
  id: number;
  name: string;
  categories: HelperCategory[];
  defaultCategories: number[];
}
