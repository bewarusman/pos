/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseOrderItemWhereInput } from "./PurchaseOrderItemWhereInput";
import { Type } from "class-transformer";
import { PurchaseOrderItemOrderByInput } from "./PurchaseOrderItemOrderByInput";

@ArgsType()
class PurchaseOrderItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemWhereInput,
  })
  @Field(() => PurchaseOrderItemWhereInput, { nullable: true })
  @Type(() => PurchaseOrderItemWhereInput)
  where?: PurchaseOrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: PurchaseOrderItemOrderByInput,
  })
  @Field(() => PurchaseOrderItemOrderByInput, { nullable: true })
  @Type(() => PurchaseOrderItemOrderByInput)
  orderBy?: PurchaseOrderItemOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PurchaseOrderItemFindManyArgs };
