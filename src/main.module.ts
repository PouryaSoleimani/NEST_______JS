import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./users/user.controller";
import { ProductController } from "./products/product.controller";

@Module({
  controllers: [AppController, UserController, ProductController],
})
export class AppModule {}
