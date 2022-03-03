import { PurchaseOrderItemCreateNestedManyWithoutProductsInput } from "./PurchaseOrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  barcode: string;
  name: string;
  price?: number | null;
  purchaseOrderItems?: PurchaseOrderItemCreateNestedManyWithoutProductsInput;
};
