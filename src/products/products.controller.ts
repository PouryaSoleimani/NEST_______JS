import { Body, Controller, Get, Post } from "@nestjs/common";
import { _Products } from "./../../__data__/db.js";
import { createSingleProductDTO } from "./product.dto.js";

@Controller("/api/products")
export class ProductsController {
  @Get("/")
  getAllProduts() {
    return {
      ok: true,
      message: "ALL PRODUCTS ROUTE ==GET==",
      allProducts: _Products,
    };
  }
  @Post("/:id")
  PostSingleProduct(@Body() postReqBody: createSingleProductDTO) {
    _Products.push(postReqBody);
    return {
      ok: true,
      message: "NEW USER ADDDED",
      data: _Products,
    };
  }
}
