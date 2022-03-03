import { StringFilter } from "../../util/StringFilter";
import { PurchaseOrderItemListRelationFilter } from "../purchaseOrderItem/PurchaseOrderItemListRelationFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type PurchaseOrderWhereInput = {
  id?: StringFilter;
  purchaseOrder?: PurchaseOrderItemListRelationFilter;
  vendor?: VendorWhereUniqueInput;
};
