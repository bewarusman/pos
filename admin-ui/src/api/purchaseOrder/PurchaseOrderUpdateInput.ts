import { PurchaseOrderItemUpdateManyWithoutPurchaseOrdersInput } from "./PurchaseOrderItemUpdateManyWithoutPurchaseOrdersInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type PurchaseOrderUpdateInput = {
  purchaseOrder?: PurchaseOrderItemUpdateManyWithoutPurchaseOrdersInput;
  total?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
