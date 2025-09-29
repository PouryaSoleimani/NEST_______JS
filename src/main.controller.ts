// ? MAIN CONTROLLER
import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "NestJS Server is running! Go to /api for endpoints";
  }
  @Get("/api")
  getApiInfo(): object {
    return {
      message: "Welcome to API",
      endpoints: {
        users: "/api/users",
        posts: "/api/posts",
        products: "/api/products",
        categories: "/api/categories",
      },
    };
  }
}
