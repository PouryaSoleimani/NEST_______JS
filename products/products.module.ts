import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [],
  exports: [],
})
export class ProductsModuleModule {}
