import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";
import { Product } from "../product/Product";

export type PurchaseOrderItem = {
  createdAt: Date;
  id: string;
  order?: PurchaseOrder | null;
  product?: Product | null;
  updatedAt: Date;
};
