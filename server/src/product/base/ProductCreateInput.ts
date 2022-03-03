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
import {
  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PurchaseOrderItemCreateNestedManyWithoutProductsInput } from "./PurchaseOrderItemCreateNestedManyWithoutProductsInput";
import { Type } from "class-transformer";
@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  barcode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PurchaseOrderItemCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  purchaseOrderItems?: PurchaseOrderItemCreateNestedManyWithoutProductsInput;
}
export { ProductCreateInput };
