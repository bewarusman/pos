/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput } from "./PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { VendorWhereUniqueInput } from "../../vendor/base/VendorWhereUniqueInput";
@InputType()
class PurchaseOrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput)
  @IsOptional()
  @Field(() => PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput, {
    nullable: true,
  })
  purchaseOrder?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrdersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  total?: number | null;

  @ApiProperty({
    required: false,
    type: () => VendorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VendorWhereUniqueInput)
  @IsOptional()
  @Field(() => VendorWhereUniqueInput, {
    nullable: true,
  })
  vendor?: VendorWhereUniqueInput | null;
}
export { PurchaseOrderCreateInput };
