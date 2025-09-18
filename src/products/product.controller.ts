import { Controller, Get } from "@nestjs/common";
import { ContextCreator } from "@nestjs/core/helpers/context-creator";

@Controller("/api")
export class ProductController {
  @Get("/products")
  getAllProducts() {
    return "ALL PRODUCTS PAGE";
  }
  @Get("/products/:id")
  getSingleProduct(id: any) {
    return {
      message: " SINGLE PRODUCT ROUTE",
    };
  }
}
