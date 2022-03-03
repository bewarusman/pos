import { PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput } from "./PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type PurchaseOrderCreateInput = {
  purchaseOrder?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput;
  total?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
