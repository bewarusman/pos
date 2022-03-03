import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PurchaseOrderItemCreateInput = {
  order?: PurchaseOrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
