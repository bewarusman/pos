import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PURCHASEORDER_TITLE_FIELD } from "../purchaseOrder/PurchaseOrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const PurchaseOrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PurchaseOrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="order"
          source="purchaseorder.id"
          reference="PurchaseOrder"
        >
          <TextField source={PURCHASEORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
