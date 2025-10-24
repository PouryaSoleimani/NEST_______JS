import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [PassportModule],
})
export class AuthModule {}
