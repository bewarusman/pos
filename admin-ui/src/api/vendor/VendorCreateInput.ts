import { PurchaseOrderCreateNestedManyWithoutVendorsInput } from "./PurchaseOrderCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  purchaseOrders?: PurchaseOrderCreateNestedManyWithoutVendorsInput;
};
