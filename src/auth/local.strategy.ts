import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(public service: AuthService) {
    super({
      usernameField: "email",
    });
  }
  validate(email: string, password: string) {
    console.log("STRATEGY", email, password);
    return { email, password };
  }
}
