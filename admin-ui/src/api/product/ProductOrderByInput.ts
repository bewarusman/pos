import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
