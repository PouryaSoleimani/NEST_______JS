import { Module } from "@nestjs/common";
import { AppController } from "./main.controller";

@Module({
  controllers: [AppController],
})
export class AppModule {}
