import { PurchaseOrderItemUpdateManyWithoutProductsInput } from "./PurchaseOrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  barcode?: string;
  name?: string;
  price?: number | null;
  purchaseOrderItems?: PurchaseOrderItemUpdateManyWithoutProductsInput;
};
