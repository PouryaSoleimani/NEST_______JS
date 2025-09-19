import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./users/user.controller";
import { PostsController } from "./posts/posts.controller";
import { ProductsModule } from "./products/products.module";
import { ProductsController } from "./products/products.controller";

@Module({
  controllers: [AppController, UserController, PostsController, ProductsController],
  imports: [],
})
export class MainModule {}
