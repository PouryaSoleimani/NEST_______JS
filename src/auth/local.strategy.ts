//^ LOCAL STRATEGY
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(public service: AuthService) {
    super({ usernameField: "email" });
  }

  // BUILT-IN METHOD
  async validate(email: string, password: string) {
    const isValid = await this.service.validate(email, password);

    if (!isValid) {
      throw new UnauthorizedException();
    } else {
      return {
        ok: true,
        message: "LOGGED IN",
      };
    }
  }
}
