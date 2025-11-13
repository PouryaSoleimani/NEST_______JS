import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request, NotFoundException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./DTO/register-auth.dto";
import { LoginAuthDto } from "./DTO/login-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt.guard";

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
  // @UseGuards(JwtAuthGuard) // FOR USING PASSPORT STRATEGIES AND AUTH GUARDS
  async login(@Body() body: LoginAuthDto) {
    const token = this.jwtService.sign({ email: body.email, password: body.password });

    const result = await this.authService.validateUser(body.email, body.password);

    if (result?.ok) {
      await this.authService.addToken(result?.user.id, token);
    }

    if (result?.ok !== true) {
      throw new UnauthorizedException("403 | UNAUTHORIZED");
    } else {
      return {
        ok: true,
        message: "LOGGED IN SUCCESSFULLY ...",
        token: token,
      };
    }
  }

  // //^ USING JWT GUARD
  @UseGuards(JwtAuthGuard)
  @Get("/profile-infos")
  async getUser(@Request() req: any) {
    const isValid = await this.authService.validateUserToken(req.user.email);
    const infos = await this.authService.userInfos(req.user);

    if (!infos || !isValid) {
      throw new UnauthorizedException("YOU MUST LOG IN FIRST TO HAVE ACCESS");
    }

    return {
      ok: true,
      message: "USER INFOS :",
      userInfo: {
        email: infos?.email,
        fullname: infos?.full_name,
        age: infos?.age,
        role: infos?.role,
        createdAt: infos?.createdAt,
        updatedAt: infos?.updatedAt,
      },
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post("/logout")
  async logout(@Request() req: any) {
    return this.authService.removeToken(req.body.email);
  }
}  