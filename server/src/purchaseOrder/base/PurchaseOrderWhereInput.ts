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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PurchaseOrderItemListRelationFilter } from "../../purchaseOrderItem/base/PurchaseOrderItemListRelationFilter";
import { VendorWhereUniqueInput } from "../../vendor/base/VendorWhereUniqueInput";
@InputType()
class PurchaseOrderWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseOrderItemListRelationFilter, {
    nullable: true,
  })
  purchaseOrder?: PurchaseOrderItemListRelationFilter;

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
  vendor?: VendorWhereUniqueInput;
}
export { PurchaseOrderWhereInput };
