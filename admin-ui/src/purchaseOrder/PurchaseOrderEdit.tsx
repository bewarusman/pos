import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VendorTitle } from "../vendor/VendorTitle";

export const PurchaseOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="total" source="total" />
        <ReferenceInput source="vendor.id" reference="Vendor" label="vendor">
          <SelectInput optionText={VendorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
