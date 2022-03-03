import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchaseOrderItemService } from "./purchaseOrderItem.service";
import { PurchaseOrderItemControllerBase } from "./base/purchaseOrderItem.controller.base";

@swagger.ApiTags("purchase-order-items")
@common.Controller("purchase-order-items")
export class PurchaseOrderItemController extends PurchaseOrderItemControllerBase {
  constructor(
    protected readonly service: PurchaseOrderItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
