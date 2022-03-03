import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PurchaseOrderItemUpdateInput = {
  order?: PurchaseOrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
