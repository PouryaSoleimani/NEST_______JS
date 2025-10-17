import { UsersController } from "./users.controller";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
