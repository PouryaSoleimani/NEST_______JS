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
  validate(email: string, password: string) {
    const isValidate = this.service.validate(email, password);
    if (!isValidate) {
      throw new UnauthorizedException();
    } else {
      return {
        ok: true,
        message: "✅ Logged In successfully ...",
      };
    }
  }
}
