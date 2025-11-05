import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./DTO/register-auth.dto";
import { LoginAuthDto } from "./DTO/login-auth.dto";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/register")
  register(@Body() body: CreateAuthDto) {
    return this.authService.register(body);
  }

  @Post("/login") 
  // @UseGuards(LocalAuthGuard)
  login(@Body() body: LoginAuthDto) {
    return this.authService.validateUser(body.email, body.password);
  }
}
