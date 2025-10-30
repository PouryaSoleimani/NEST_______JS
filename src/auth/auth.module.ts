import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./localstrategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  controllers: [AuthController],
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
