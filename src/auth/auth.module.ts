import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./localstrategy";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";

@Module({
  controllers: [AuthController],
  imports: [PassportModule, UsersModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
  