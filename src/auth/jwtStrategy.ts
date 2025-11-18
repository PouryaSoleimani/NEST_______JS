//^ JWT STRATEGY ==========================================================================
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly service: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "POURYA__SECRET",
    });
  }

  async validate(payload: any) {
    const user = await this.service?.validateUserToken(payload.email);
    if (!user) {
      throw new UnauthorizedException(
        "You Dont have Access to this page , Please login first",
      );
    }
    return { email: payload.email, password: payload.password, role: payload.role };
  }
}
