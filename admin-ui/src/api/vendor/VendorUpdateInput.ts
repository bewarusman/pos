import { PurchaseOrderUpdateManyWithoutVendorsInput } from "./PurchaseOrderUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  purchaseOrders?: PurchaseOrderUpdateManyWithoutVendorsInput;
};
