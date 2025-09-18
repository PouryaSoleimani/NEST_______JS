import { Controller, Get } from "@nestjs/common";

@Controller()
export class ProductController {
  @Get("/products")
  getAllProducts() {
    return "ALL PRODUCTS PAGE";
  }
  @Get("/products/:id")
  getSingleProduct(id: any) {
    return {
      message: " SINGLE PRODUCT ROUTE",
      ID: id,
    };
  }
}
