import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseOrderItemListRelationFilter } from "../purchaseOrderItem/PurchaseOrderItemListRelationFilter";

export type ProductWhereInput = {
  barcode?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatNullableFilter;
  purchaseOrderItems?: PurchaseOrderItemListRelationFilter;
};
