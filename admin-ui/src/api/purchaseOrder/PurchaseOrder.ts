import { PurchaseOrderItem } from "../purchaseOrderItem/PurchaseOrderItem";
import { Vendor } from "../vendor/Vendor";

export type PurchaseOrder = {
  createdAt: Date;
  id: string;
  purchaseOrder?: Array<PurchaseOrderItem>;
  total: number | null;
  updatedAt: Date;
  vendor?: Vendor | null;
};
