import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseOrderListRelationFilter } from "../purchaseOrder/PurchaseOrderListRelationFilter";

export type VendorWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  purchaseOrders?: PurchaseOrderListRelationFilter;
};
