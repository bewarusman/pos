import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PurchaseOrderItemResolverBase } from "./base/purchaseOrderItem.resolver.base";
import { PurchaseOrderItem } from "./base/PurchaseOrderItem";
import { PurchaseOrderItemService } from "./purchaseOrderItem.service";

@graphql.Resolver(() => PurchaseOrderItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PurchaseOrderItemResolver extends PurchaseOrderItemResolverBase {
  constructor(
    protected readonly service: PurchaseOrderItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
