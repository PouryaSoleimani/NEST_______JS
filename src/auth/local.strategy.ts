import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(public service: AuthService) {
    super({
      usernameField: "email",
    });
  }
  async validate(email: string, password: string) {
    const isValid = await this.service.validate(email, password);
    if (!isValid) {
      return false;
    } else {
      return true;
    }
  }
}
