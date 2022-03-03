import { PurchaseOrderItem } from "../purchaseOrderItem/PurchaseOrderItem";

export type Product = {
  barcode: string;
  createdAt: Date;
  id: string;
  name: string;
  price: number | null;
  purchaseOrderItems?: Array<PurchaseOrderItem>;
  updatedAt: Date;
};
