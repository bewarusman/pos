/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  PurchaseOrderItem,
  PurchaseOrder,
  Product,
} from "@prisma/client";

export class PurchaseOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PurchaseOrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.purchaseOrderItem.count(args);
  }

  async findMany<T extends Prisma.PurchaseOrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindManyArgs>
  ): Promise<PurchaseOrderItem[]> {
    return this.prisma.purchaseOrderItem.findMany(args);
  }
  async findOne<T extends Prisma.PurchaseOrderItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindUniqueArgs>
  ): Promise<PurchaseOrderItem | null> {
    return this.prisma.purchaseOrderItem.findUnique(args);
  }
  async create<T extends Prisma.PurchaseOrderItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemCreateArgs>
  ): Promise<PurchaseOrderItem> {
    return this.prisma.purchaseOrderItem.create<T>(args);
  }
  async update<T extends Prisma.PurchaseOrderItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemUpdateArgs>
  ): Promise<PurchaseOrderItem> {
    return this.prisma.purchaseOrderItem.update<T>(args);
  }
  async delete<T extends Prisma.PurchaseOrderItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemDeleteArgs>
  ): Promise<PurchaseOrderItem> {
    return this.prisma.purchaseOrderItem.delete(args);
  }

  async getOrder(parentId: string): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrderItem
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }

  async getProduct(parentId: string): Promise<Product | null> {
    return this.prisma.purchaseOrderItem
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
