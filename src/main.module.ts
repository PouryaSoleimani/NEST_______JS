import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./user/user.controller";
import { ProductController } from "./products/product.controller";

@Module({
  controllers: [AppController, UserController, ProductController],
})
export class AppModule {}
