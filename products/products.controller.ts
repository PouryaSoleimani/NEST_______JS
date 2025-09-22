import { Controller, Get } from "@nestjs/common";

@Controller("/api/products")
export class ProductsController {
  @Get("/")
  GET__ALL__PRODUCTS() {
    return "ALL PRODUCTS";
  }
}
