import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./users/user.controller";
import { ProductController } from "./products/product.controller";
import { CategoriesController } from "./categories/categories.controller";

@Module({
  controllers: [
    AppController,
    UserController,
    ProductController,
    CategoriesController,
  ],
})
export class MainModule {}
