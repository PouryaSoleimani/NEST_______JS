import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./users/user.controller";
import { PostsController } from "./posts/posts.controller";
import { CategoriesController } from "./categories/categories.controller";
import { ProductsController } from "products/products.controller";

@Module({
  controllers: [
    AppController,
    UserController,
    PostsController,
    ProductsController,
    CategoriesController,
  ],
  imports: [],
})
export class MainModule {}
