import { PurchaseOrderItem as TPurchaseOrderItem } from "../api/purchaseOrderItem/PurchaseOrderItem";

export const PURCHASEORDERITEM_TITLE_FIELD = "id";

export const PurchaseOrderItemTitle = (record: TPurchaseOrderItem): string => {
  return record.id || record.id;
};
