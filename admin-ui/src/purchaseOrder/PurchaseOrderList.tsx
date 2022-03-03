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
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const PurchaseOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PurchaseOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
