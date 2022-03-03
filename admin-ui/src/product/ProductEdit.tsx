import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="barcode" source="barcode" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
