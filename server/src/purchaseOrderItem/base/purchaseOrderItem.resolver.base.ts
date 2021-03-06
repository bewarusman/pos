/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePurchaseOrderItemArgs } from "./CreatePurchaseOrderItemArgs";
import { UpdatePurchaseOrderItemArgs } from "./UpdatePurchaseOrderItemArgs";
import { DeletePurchaseOrderItemArgs } from "./DeletePurchaseOrderItemArgs";
import { PurchaseOrderItemFindManyArgs } from "./PurchaseOrderItemFindManyArgs";
import { PurchaseOrderItemFindUniqueArgs } from "./PurchaseOrderItemFindUniqueArgs";
import { PurchaseOrderItem } from "./PurchaseOrderItem";
import { PurchaseOrder } from "../../purchaseOrder/base/PurchaseOrder";
import { Product } from "../../product/base/Product";
import { PurchaseOrderItemService } from "../purchaseOrderItem.service";

@graphql.Resolver(() => PurchaseOrderItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PurchaseOrderItemResolverBase {
  constructor(
    protected readonly service: PurchaseOrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "read",
    possession: "any",
  })
  async _purchaseOrderItemsMeta(
    @graphql.Args() args: PurchaseOrderItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [PurchaseOrderItem])
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "read",
    possession: "any",
  })
  async purchaseOrderItems(
    @graphql.Args() args: PurchaseOrderItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PurchaseOrderItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PurchaseOrderItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => PurchaseOrderItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "read",
    possession: "own",
  })
  async purchaseOrderItem(
    @graphql.Args() args: PurchaseOrderItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PurchaseOrderItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PurchaseOrderItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => PurchaseOrderItem)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "create",
    possession: "any",
  })
  async createPurchaseOrderItem(
    @graphql.Args() args: CreatePurchaseOrderItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PurchaseOrderItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PurchaseOrderItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"PurchaseOrderItem"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PurchaseOrderItem)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "update",
    possession: "any",
  })
  async updatePurchaseOrderItem(
    @graphql.Args() args: UpdatePurchaseOrderItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PurchaseOrderItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PurchaseOrderItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"PurchaseOrderItem"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PurchaseOrderItem)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "delete",
    possession: "any",
  })
  async deletePurchaseOrderItem(
    @graphql.Args() args: DeletePurchaseOrderItemArgs
  ): Promise<PurchaseOrderItem | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => PurchaseOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "read",
    possession: "any",
  })
  async order(
    @graphql.Parent() parent: PurchaseOrderItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PurchaseOrder | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PurchaseOrder",
    });
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrderItem",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: PurchaseOrderItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
