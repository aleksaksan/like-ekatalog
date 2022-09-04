import { CategoriesEnum } from "../shared/enums/CategoriesEnum";
import { CategoriesResponse } from "./responses/CategoriesResponse";

export interface Categories {
  name: CategoriesEnum;
  category: CategoriesResponse[];
};


