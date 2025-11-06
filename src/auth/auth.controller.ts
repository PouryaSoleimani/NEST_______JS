import { Controller, Post, Body, UseGuards, UnauthorizedException, Request, } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./DTO/register-auth.dto";
import { LoginAuthDto } from "./DTO/login-auth.dto";
import { LocalAuthGuard } from "./auth.guard";
import { JwtService } from "@nestjs/jwt";

@Controller("/auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post("/register")
  register(@Body() body: CreateAuthDto) {
    return this.authService.register(body);
  }

  @Post("/login")
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: LoginAuthDto, @Request() req: any) {
    const result = await this.authService.validateUser(body.email, body.password);
    if (!result?.ok == false) {
      throw new UnauthorizedException("403 | UNAUTHORIZED");
    } else {
      return {
        ok: true,
        message: "LOGGED IN SUCCESSFULLY ...",
        token: this.jwtService.sign({ id: req.user.id, email: req.user.id }),
      };
    }
  }
}
