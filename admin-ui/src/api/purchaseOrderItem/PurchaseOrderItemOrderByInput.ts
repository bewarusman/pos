import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
