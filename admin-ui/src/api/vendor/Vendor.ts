import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";

export type Vendor = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  purchaseOrders?: Array<PurchaseOrder>;
  updatedAt: Date;
};
