import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VendorTitle } from "../vendor/VendorTitle";

export const PurchaseOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="total" source="total" />
        <ReferenceInput source="vendor.id" reference="Vendor" label="vendor">
          <SelectInput optionText={VendorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
