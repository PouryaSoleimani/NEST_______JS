import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy as JWT_STRATEGY } from "passport-jwt";
import { AuthService } from "./auth.service";

export class JwtStrategy extends PassportStrategy(JWT_STRATEGY) {
  constructor(private readonly service: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "secret____key",
    });
  }

  async validate(email: string, password: string) {
    return await this.service?.validateUser(email, password);
  }
}
