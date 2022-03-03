import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
