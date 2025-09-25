import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UsersController } from "./users/user.controller";
import { PostsController } from "./posts/posts.controller";
import { CategoriesController } from "./categories/categories.controller";
import { ProductsController } from "src/categories/products/products.controller";
import { ProductsService } from "src/categories/products/products.service";
import { ProductsRepository } from "src/categories/products/products.repository";

@Module({
  controllers: [
    AppController,
    UsersController,
    PostsController,
    ProductsController,
    CategoriesController,
  ],
  imports: [],
  providers: [ProductsService, ProductsRepository]
})
export class MainModule { }
