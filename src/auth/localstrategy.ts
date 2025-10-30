import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UnauthorizedException } from "@nestjs/common";
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly service: AuthService) {
    super({
      usernameField: "email",
    });
  }

  async validate(email: string, password: string) {
    return await this.service?.validateUser(email, password);
  }
}
