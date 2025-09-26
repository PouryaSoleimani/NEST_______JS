import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./user.repo";
import { ProductsService } from "src/products/products.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
  imports: [ProductsService],
})
export class UsersModule {}
