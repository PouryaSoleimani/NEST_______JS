import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";

@Module({
  controllers: [AppController], // DEFINE THE CONTROLLER HERE
})
class AppModule {}

export default AppModule;
