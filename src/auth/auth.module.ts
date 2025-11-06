import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./localstrategy";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: "POURYA__SECRET",
      signOptions: { expiresIn: "6d" },
    }),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
  1;