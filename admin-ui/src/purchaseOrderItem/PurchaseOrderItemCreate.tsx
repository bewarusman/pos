import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const PurchaseOrderItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="purchaseorder.id"
          reference="PurchaseOrder"
          label="order"
        >
          <SelectInput optionText={PurchaseOrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
