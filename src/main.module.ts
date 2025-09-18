import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";
import { UserController } from "./user/user.controller";

@Module({
  controllers: [AppController, UserController],
})
export class AppModule {}
