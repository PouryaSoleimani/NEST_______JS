import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./products.repository";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [],
})
export class ProductsModuleModule { }
